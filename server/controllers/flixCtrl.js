const {Movie, Show} = require("../models/tables")

module.exports = {
    addMovie: async (req, res) => {
       try{
        const {userId, movieName, priority, imageUrl, length} = req.body

        await Movie.create({
            userId,
            movieName,
            priority,
            imageUrl,
            length
        })

        res.sendStatus(200)
       } catch(err){
        console.log(err)
        res.status(500).send('The movie was not added correctly!')
       }
    },
    addShows: async (req, res) => {
        // receive necessary info on req.body, insert it into the db, send back a response

    }
}