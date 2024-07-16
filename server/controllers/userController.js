const { User } = require("../models/index")
const { comparePassword } = require("../helper/bcrypt")
const { token } = require("../helper/jwt")
class UserController {
    static async showHome(req, res, next){
        try {
            res.send("ini home")
        } catch (error) {
            
        }
    }

    static async registerUser(req, res, next) {
        try {
            const { username, password } = req.body
            const user = await User.create({ username, password})
            res.status(201).json({
                message: `Success Create New User ${username}`
            })
        } catch (error) {
            console.log(error)
            next(error)
        }
    }

    static async login(req, res, next) {
        try {
            const { username, password } = req.body

            if(!username || !password) throw {name: "Bad Request"}

            const user = await User.findOne({
                where: {
                    username
                }
            })

            if(!user) throw {name: "Login Error"}

            const checkPass = comparePassword(password, user.password)

            if(!checkPass) throw {name: "Login Error"}

            const payload = {
                id: user.id,
                username: user.username
            }
            
            const access_token = token(payload)
            res.status(201).json({
                access_token,
                message: `Success Login with ${username}`
            })
        } catch (error) {
            console.log(error)
            next(error)

        }
    }
}

module.exports = UserController