require("dotenv").config()

const express = require('express')
const app = express()
const cors = require("cors")
const errorHandler = require("./helper/errorHandler")
const UserController = require("./controllers/userController")
const authentication = require("./middleware/authentification")
const { createServer } = require("http")
const { Server } = require("socket.io")
const {serveCards, getTargetCard} = require("./gameLogic/serveCards")

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

let currentUserTurn = "" //fill with socket id
let currentGameState = []
let firstPlayer = ""
let connectedUsers = []
let currentTargetCard = {};
let gameOver = false;

io.on("connection", (socket) => {



    //later

    if (socket.handshake.auth) {
        // console.log(socket.handshake.auth);
        const payload = verifyToken(socket.handshake.auth.access_token)
        connectedUsers.push(payload.username)
        //inform username of user
        socket.emit('my-username', payload.username)

        socket.join("gameroom");
        let roomSize = io.sockets.adapter.rooms.get("gameroom").size
        console.log(roomSize);
        if (roomSize >= 2) {
            serveCards().then(res => {
                currentTargetCard = getTargetCard(res);
                io.to("gameroom").emit('game-state', res, currentTargetCard);
                io.to("gameroom").emit("players", connectedUsers)
                currentGameState = res;
            }).catch(err => console.log(err))
            //send other player username when two players ready
            console.log(io.sockets.adapter.rooms.get("gameroom")); 
            //listen for id from client
            
        };
        
        socket.on("opencard", (cardId) => {
            
            console.log('opencard hit');
            //turn mechanic 
            //make sure not the same socket id as previous player
            console.log(`${currentUserTurn} vs ${socket.handshake.auth.access_token}`);
            if (socket.handshake.auth.access_token !== currentUserTurn && !gameOver ) {
                const targetIndex = currentGameState.findIndex((item) => item.id === cardId);
                currentGameState[targetIndex].hidden = false;
                io.to("gameroom").emit('game-state', currentGameState);
                //check victory condition
                if (cardId === currentTargetCard.id) {
                    gameOver = true;
                    const payload = verifyToken(socket.handshake.auth.access_token)
                    io.to("gameroom").emit("winner", payload.username);
                } else {
                    console.log('opened ' + cardId);
                    currentUserTurn = socket.handshake.auth.access_token;
                }   
                
                
                
            }
            
        })


        socket.on('disconnect', () => {
            connectedUsers = connectedUsers.filter((item) => item !== verifyToken(socket.handshake.auth.access_token).username)
            currentUserTurn = ""
            gameOver = false
        })

    }
});

httpServer.listen(port, () => {
    console.log(`http://localhost:${port}`);
})