const { User } = require("../models/tables")
require("dotenv").config()
const { SECRET } = process.env
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const createToken = (username, id) => {
    return jwt.sign({ username, id }, SECRET, { expiresIn: "2 days" })
}

module.exports = {
    register: async (req, res) => {
        try {
            const { username, password } = req.body
            let foundUser = await User.findOne({ where: { username } })
            if (foundUser) {
                res.status(400).send("That username is already taken.")
            } else {
                const salt = bcrypt.genSaltSync(10)
                const hash = bcrypt.hashSync(password, salt)

                const newUser = await User.create({
                    username,
                    hashedPass: hash
                })

                const token = createToken(newUser.username, newUser.id)
                const exp = Date.now() + 1000 * 60 * 60 * 48

                res.status(200).send({
                    username: newUser.username,
                    userId: newUser.id,
                    token,
                    exp
                })
            }
        } catch (err) {
            console.log(err)
            res.status(400).send(err)
        }
    },
    login: async (req, res) => {
        try {
            const { username, password } = req.body
            let foundUser = await User.findOne({ where: { username } })

            if (foundUser) {
                const isAuthenticated = bcrypt.compareSync(
                    password,
                    foundUser.hashedPass
                )
                if (isAuthenticated) {
                    const token = createToken(foundUser.username, foundUser.id)
                    const exp = Date.now() + 1000 * 60 * 60 * 48

                    res.status(200).send({
                        username: foundUser.username,
                        userId: foundUser.id,
                        token,
                        exp
                    })
                } else {
                    res.status(400).send("that password is incorrect")
                }
            } else {
                res.status(400).send("That username does not exist")
            }
        } catch (err) {
            console.log(err)
            res.status(400).send(err)
        }
    }
}
