const express = require('express')
const logger = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()

const app = express()

app.listen(process.env.PORT, () =>
console.log(`Port: ${process.env.PORT}`))