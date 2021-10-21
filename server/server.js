const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
require('dotenv').config()
app.use(express.json())
app.use(cors())
//connect to DB :
mongoose.connect(process.env.MONGO_URI,(err)=> err ? console.error(err) :console.log('database connected'))
// ! routes
app.use('/ingredients',require('./routes/ingredientRoute'))
// creating server :
app.listen(5000,()=>console.log('server is running !'))