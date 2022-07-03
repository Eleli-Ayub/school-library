const express = require('express')
const mongoose = require('mongoose')
const Addbook = require('./routes/Addbook')
const Viewbooks = require('./routes/Viewbooks')
const Deletebook = require('./routes/Deletebook')
const cors = require('cors')
require('dotenv').config()


//Initialize the app using
const app = express()

app.use(cors())
app.use(express.json())

//Global variables
const PORT = process.env.PORT || 4000


//Connect to the mongoDB database
mongoose.connect(process.env.MONGO_URL, ()=>{
    console.log("Connected to the database");
})


//Routes
app.use('/api/book', Addbook)
app.use('/api/book', Viewbooks)
app.use('/api/book', Deletebook)



//Listen the app
app.listen(PORT, (error)=>{
    if (error) {
        return error
    }
    console.log("App Running Succesifully");
})
