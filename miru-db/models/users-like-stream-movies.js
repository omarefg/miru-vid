'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

const UsersLikeStreamMovies = {
    users_like_stream_movies_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    users_like_stream_movies_user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'users',
            key: 'user_id'
        }
    },
    users_like_stream_movies_stream_movie_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'stream_movies',
            key: 'stream_movie_id'
        }
    }
}

const usersLikeStreamMoviesOptions = {
    timestamps: false
}

const setupUsersLikeStreamMoviesModel = config => {
    const db = setupDatabase(config)
    return db.define('users_like_stream_movies', UsersLikeStreamMovies, usersLikeStreamMoviesOptions)
}

module.exports = setupUsersLikeStreamMoviesModel
