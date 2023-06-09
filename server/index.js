require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')

const {PORT} = process.env

const {User, Show, Movie} = require('./models/tables')
const {sequelize} = require('./util/database')
const {register, login} = require('./controllers/authCtrl')
const {addMovie, addShows, getFlix, editMovie, editShow, deleteFlix} = require('./controllers/flixCtrl')
const {isAuthenticated} = require('./middleware/isAuthenticated')

const app = express()

app.use(express.json())
app.use(cors())

app.use(express.static(path.resolve(__dirname, "../build")));

User.hasMany(Show)
Show.belongsTo(User)

User.hasMany(Movie)
Movie.belongsTo(User)


app.post('/api/register', register)
app.post('/api/login', login)

app.post('/api/movies', isAuthenticated, addMovie)
app.post('/api/shows', isAuthenticated, addShows)
app.get('/api/flix/:userId', isAuthenticated, getFlix)
app.put('/api/movies', isAuthenticated, editMovie)
app.put('/api/shows', isAuthenticated, editShow)
app.delete('/api/flix/:type/:id', isAuthenticated, deleteFlix)

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  });

sequelize.sync()
// sequelize.sync({force: true})
    .then(() => {
        
        app.listen(PORT, () => console.log(`Take us to warp ${PORT}!`))
    })
    .catch(err => console.log(err))