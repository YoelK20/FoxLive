function errorHandler(error, req, res, next) {
    let status = 500
    let message = "Internal Sevrer Error" 

    if (error.name === "SequelizeValidationError") {
        status = 400
        message = error.errors.map(el => el.message)
    }

    if(error.name === "SequelizeDatabaseError"){
        status = 400
        message = "Invalid Input"
    }

    if(error.name === 'SequelizeUniqueConstraintError'){
        status = 400
        message = "Username already Exists"
    }

    if(error.name === "Bad Request"){
        message = "Please input your Username or Password"
        status = 400
    }

    if(error.name === "Login Error"){
        message = "Invalid Username or password"
        status = 401
    }

    if (error.name === "Unauthorized" || error.name === "JsonWebTokenError") {
        status = 401
        message = "Please Login First"
    }

    res.status(status).json({
        message
    })
}

module.exports = errorHandler