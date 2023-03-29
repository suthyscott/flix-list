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
    },
    editMovie: async (req, res) => {
        try {
            const { id, movieName, priority, imageUrl, length } = req.body

            await Movie.update(
                {
                    movieName,
                    priority,
                    imageUrl,
                    length
                },
                { where: { id } }
            )

            res.status(200).send('Movie was updated successfully')
            
        } catch (err) {
            console.log(err)
            res.status(400).send("We were not able to save your changes:/")
        }
    },
    editShow: async (req, res) => {
        try {
            const { id, showName, priority, imageUrl, avgEpisodeLength, seasons } = req.body

            await Show.update(
                {
                    showName, priority, imageUrl, avgEpisodeLength, seasons 
                },
                { where: { id } }
            )

            res.status(200).send('Show was updated successfully')
            
        } catch (err) {
            console.log(err)
            res.status(400).send("We were not able to save your changes:/")
        }
    }, 
    deleteFlix: async (req, res) => {
        try {
            const {type, id} = req.params
            if(type === 'movie'){
                await Movie.destroy({where: {id}})
            } else {
                await Show.destroy({where: {id}})
            }
            res.status(200).send('That flick was destroyed!')
        }catch(err) {
            console.log(err)
            res.status(400).send('We were not able to delete that flick')
        }
    }
}
