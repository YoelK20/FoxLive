const { verifyToken } = require("../helper/jwt")
const { User } = require("../models/index")

async function authentication(req, res, next){
    try {
        const {authorization} = req.headers

        if(!authorization) throw {name: "Unauthorized"}

        const access_token = authorization.split(" ")[1]

        const payload = verifyToken(access_token)

        const user = await User.findOne({
            where: {
                username: payload.username
            }
        })

        if(!user) throw{name: "Unauthorized"}

        req.loginInfo = {
            id: user.id,
            username: user.username
        }
        
        next()
    } catch (error) {
        console.log(error);
        next(error)
    }
}

module.exports = authentication