require("dotenv").config()

const express = require('express')
const app = express()
const cors = require("cors")
const errorHandler = require("./helper/errorHandler")
const UserController = require("./controllers/userController")
const authentication = require("./middleware/authentification")
const { createServer } = require("http")
const { Server } = require("socket.io")
const serveCards = require("./gameLogic/serveCards")
const { log } = require("console")
const { verifyToken } = require("./helper/jwt")
const httpServer = createServer(app)

const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:5173"
    }
})
const port = 3000




//Setup CORS
app.use(cors())

//Body Parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Endpoints
app.post("/register", UserController.registerUser)
app.post("/login", UserController.login)

app.use(authentication)

app.get('/', UserController.showHome)

//Error Handling
app.use(errorHandler)

let currentUserTurn = ""
let currentGameState = []
let firstPlayer = ""

io.on("connection", (socket) => {
    
    
    socket.join("gameroom");
    let roomSize = io.sockets.adapter.rooms.get("gameroom").size
    console.log(roomSize);
    if (roomSize >= 2) {
        serveCards().then(res => {
            io.to("gameroom").emit('game-state', res);
            currentGameState = res;
        }).catch(err => console.log(err))
        
    };
    //listen for id from client
    socket.on("opencard", (cardId) => {
        const targetIndex = currentGameState.findIndex((item) => item.id === cardId);
        currentGameState[targetIndex].hidden = false;
        io.to("gameroom").emit('game-state', currentGameState);
        console.log('opened ' + cardId);
    })
    
    //later

    if (socket.handshake.auth) {
        // console.log(socket.handshake.auth);
        const payload = verifyToken(socket.handshake.auth.access_token)
        if(!firstPlayer) firstPlayer = payload.username
        // console.log(payload);
        

        socket.broadcast.emit("player", payload.username)
    }
});

httpServer.listen(port, () => {
    console.log(`http://localhost:${port}`);
})