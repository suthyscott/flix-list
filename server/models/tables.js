const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')

module.exports = {
    User: sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        username: DataTypes.STRING,
        hashedPass: DataTypes.STRING
    }),
    Movie: sequelize.define('movie', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        movieName: DataTypes.STRING,
        priority: DataTypes.INTEGER,
        imageUrl: DataTypes.TEXT,
        length: DataTypes.STRING
    }),
    Show: sequelize.define('show', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        showName: DataTypes.STRING,
        priority: DataTypes.INTEGER,
        imageUrl: DataTypes.TEXT,
        avgEpisodeLength: DataTypes.STRING,
        seasons: DataTypes.INTEGER
    })
}