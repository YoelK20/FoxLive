const jwt = require('jsonwebtoken')
const secretKey = process.env.SECRET_KEY
function token(payload) {
    return jwt.sign(payload, secretKey)
}

function verifyToken(token) {
    return jwt.verify(token, secretKey)
}

module.exports = { token, verifyToken }