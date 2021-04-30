import express from "express"
import morgan from "morgan"
import path from "path"
import bodyParser from "body-parser"

import gamesRoutes from './server/routes/gameRoutes.js'
import developerRoutes from "./server/routes/developerRoutes.js"
import genreRoutes from "./server/routes/genreRoutes.js"

//ALLOWS TO USE ENV VARS
import dotenv from "dotenv";
dotenv.config()

// const path = require('path')
// const bodyParser = require('body-parser')

const app = express()

app.get('/', (req, res) => {
  res.send('BackEnd up')
})

//ROUTER FOLDER DECLARATION
app.use("/game", gamesRoutes)
app.use("/developer", developerRoutes)
app.use("/genres", genreRoutes)

app.use(morgan('dev'))

app.listen(process.env.PORT, () => {
console.log(`BackEnd on port: ${process.env.PORT}`)
})