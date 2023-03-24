const { Movie, Show } = require("../models/tables")

module.exports = {
    addMovie: async (req, res) => {
        try {
            const { userId, movieName, priority, imageUrl, length } = req.body

            await Movie.create({
                userId,
                movieName,
                priority,
                imageUrl,
                length
            })

            res.sendStatus(200)
        } catch (err) {
            console.log(err)
            res.status(500).send("The movie was not added correctly!")
        }
    },
    addShows: async (req, res) => {
        try {
            const {
                userId,
                showName,
                priority,
                imageUrl,
                avgEpisodeLength,
                seasons
            } = req.body

            await Show.create({
                userId,
                showName,
                priority,
                imageUrl,
                avgEpisodeLength,
                seasons
            })

            res.sendStatus(200)
        } catch (err) {
            console.log(err)
            res.status(500).send("The movie was not added correctly!")
        }
    },
    getFlix: async (req, res) => {
        try {
            const { userId } = req.params
            const movies = await Movie.findAll({ where: { userId } })
            const shows = await Show.findAll({ where: { userId } })
            res.status(200).send({ movies, shows })
        } catch (err) {
            console.log(err)
            res.sendStatus(500)
        }
    }
}
