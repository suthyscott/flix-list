require('dotenv').config()
const express = require('express')
const cors = require('cors')

const {SERVER_PORT} = process.env

const {User, Show, Movie} = require('./models/tables')
const {sequelize} = require('./util/database')
const {register, login} = require('./controllers/authCtrl')
const {addMovie, addShows, getFlix, editMovie, editShow} = require('./controllers/flixCtrl')

const app = express()

app.use(express.json())
app.use(cors())

User.hasMany(Show)
Show.belongsTo(User)

User.hasMany(Movie)
Movie.belongsTo(User)


app.post('/api/register', register)
app.post('/api/login', login)

app.post('/api/movies', addMovie)
app.post('/api/shows', addShows)
app.get('/api/flix/:userId', getFlix)
app.put('/api/movies', editMovie)
app.put('/api/shows', editShow)

sequelize.sync()
// sequelize.sync({force: true})
    .then(() => {
        
        app.listen(SERVER_PORT, () => console.log(`Take us to warp ${SERVER_PORT}!`))
    })
    .catch(err => console.log(err))