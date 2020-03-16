const express = require('express')
const dotenv = require('dotenv')
const logger = require('./middleware/logger')
const morgan = require('morgan')
const connectDB = require('./config/db')

// LOad env var
dotenv.config({ path: './config/config.env' })

// Connect to database
connectDB()

// Route files
const bootcamps = require('./routes/bootcamps')


const app = express()


// Dev logging middelware - this gonna run en develp[ment enviroment]
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}


// login
app.use(logger)

// Mount routers
app.use('/api/v1/bootcamps', bootcamps)

const PORT = process.env.PORT || 5000

const server = app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)

// Handle unhandled promise rejections

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error:: ${err.message}`)
    // Close server & exit process
    server.close(() => process.exit(1))
})

