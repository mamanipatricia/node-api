const ErrorResponse = require('../utils/errorResponse')


const errorHandler = (err, req, res, next) => {
    // Log to console for dev
    console.log(err.red)
    // spread operator
    let error = { ...err }

    error.message = err.message

    // Mongoose bad ObjectId
    if (err.name == 'CastError') {
        const message = `Resource not found with id of ${err.value}`
        error = new ErrorResponse(message, 404)
    }

    // Mongoose duplicate key
    if (err.code === 11000) {
        const message = 'Duplicated field value entered'
        error = new ErrorResponse(message, 400)
    }

    // Mongose validationError
    if (err.name == 'ValidationError') {
        const message = Object.values(err.errors).map(val => val.message)
        error = new ErrorResponse(message, 400)
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server Error'
    })
}

module.exports = errorHandler
