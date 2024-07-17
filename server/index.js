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

io.on("connection", (socket) => {
    console.log("User has Connected", socket.id);
    
    socket.emit("welcome", "Mr/Mrs" + socket.id);
    serveCards().then((cards) => {
        socket.emit('game-state', cards)
    }).catch((err) => console.log(err))

    if (socket.handshake.auth) {
        console.log("username :" + socket.handshake.auth.username);

        socket.on("message:new", (message) => {
            io.emit("message:update", {
                from: socket.handshake.auth.username,
                message
            })
        })
    }
});

httpServer.listen(port, () => {
    console.log(`http://localhost:${port}`);
})