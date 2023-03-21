require('dotenv').config()
const express = require('express')
const cors = require('cors')

const {SERVER_PORT} = process.env

const {User, Show, Movie} = require('./models/tables')
const {sequelize} = require('./util/database')

const app = express()

app.use(express.json())
app.use(cors())


sequelize.sync()
    .then(() => {
        
        app.listen(SERVER_PORT, () => console.log(`Take us to warp ${SERVER_PORT}!`))
    })
    .catch(err => console.log(err))