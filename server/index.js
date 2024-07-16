require("dotenv").config()

const express = require('express')
const app = express()
const cors = require("cors")
const errorHandler = require("./helper/errorHandler")
const UserController = require("./controllers/userController")
const authentication = require("./middleware/authentification")
const port = 3000

//Setup CORS
app.use(cors())

//Body Parser
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//Endpoints
app.post("/register", UserController.registerUser)
app.post("/login", UserController.login)

app.use(authentication)

app.get('/', UserController.showHome)

//Error Handling
app.use(errorHandler)

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})