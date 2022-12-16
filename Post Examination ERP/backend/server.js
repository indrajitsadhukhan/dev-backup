const app=require('./app')
const connectDatabase=require('./config/database')
const dotenv=require("dotenv")

// Handling Uncaught Exception
// Example - console.log(zz) -- Undeclared variable
process.on('uncaughtException',(err)=>{
    console.log("Error: "+err.message)
    console.log("Shutting down the server due to uncaught exception")
    process.exit(1)
})

// Config
dotenv.config({path:"config/config.env"})

// Connecting to Database
connectDatabase()

// Listening to PORT
const server = app.listen(process.env.PORT,()=>{
    console.log("Server is working on  http://localhost:"+process.env.PORT)
})

// Unhandled Promise Rejection
process.on('unhandledRejection',(err)=>{
    console.log('Error: '+err.message)
    console.log('Shutting down the server due to Unhandled Promise Rejection')
    server.close(()=>{
        process.exit(1)
    })
})


// Upto 1:44:55
