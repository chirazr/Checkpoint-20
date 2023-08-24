//nadi lel express (import par require)
const express = require('express')
require('dotenv').config()
//console.log(process.env.PORT)
const connectdb=require('./config/DBconnect')
//port=process.env.PORT


//initianilation server
const app = express()
connectdb()

//middleware 
app.use(express.json)
app.use('/users', require('./routes/user'))

const port=process.env.PORT
  //  creation server
    app.listen(port,(err)=>err ? console.log(err):console.log(`server in ${port}`))
