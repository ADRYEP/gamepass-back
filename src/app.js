import express from "express"
import cors from "cors"
// import path from "path"
import bodyParser from "body-parser"

import gamesRoutes from './server/routes/gameRoutes.js'
import developerRoutes from "./server/routes/developerRoutes.js"
import genreRoutes from "./server/routes/genreRoutes.js"

// import session from "./DB/connection.js"

//ALLOWS TO USE ENV VARS
import dotenv from "dotenv";
dotenv.config()


// const path = require('path')
const app = express()
app.use(cors())


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })) 
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('BackEnd up')
})

//ROUTER FOLDER DECLARATION
app.use("/game", gamesRoutes)
app.use("/developer", developerRoutes)
app.use("/genres", genreRoutes)

app.listen(process.env.PORT, () => {
    console.log(`BackEnd on port: ${process.env.PORT}`)
})