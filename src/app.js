const express = require('express')
const logger = require('morgan')
const dotenv = require('dotenv').config()
// const path = require('path')
// const bodyParser = require('body-parser')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello there')
})

//ROUTER FOLDER DECLARATION
// app.use(require('./routes'))

app.use(logger('dev'))

app.listen(process.env.PORT, () => {
console.log(`On port: ${process.env.PORT}`)
})