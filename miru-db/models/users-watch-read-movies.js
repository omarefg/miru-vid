'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

const UsersWatchReadMoviesModel = {
    users_watch_read_movies_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    users_watch_read_movies_user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'users',
            key: 'user_id'
        }
    },
    users_watch_read_movies_read_movie_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'read_movies',
            key: 'read_movie_id'
        }
    }
}

const usersWatchReadMoviesOptions = {
    timestamps: false
}

const setupUsersWatchReadMoviesModel = config => {
    const db = setupDatabase(config)
    return db.define('users_watch_read_movies', UsersWatchReadMoviesModel, usersWatchReadMoviesOptions)
}

module.exports = setupUsersWatchReadMoviesModel
