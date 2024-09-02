const express = require('express')
const mongoose = require('mongoose')
//const cors=require('cors')
const alienRouter = require('./Controllers/Controller.js')


const url = 'mongodb+srv://<db-username>:<db-password>@cluster0.zeiywfe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const app = express()
mongoose.connect(url)
const con = mongoose.connection


con.on('open', () =>
{
console.log('connected...')
})
//app.use(cors())
app.use(express.json())

app.use('/Controller.js',alienRouter)
app.listen(9000, () =>
{
console.log('Server started')
})
