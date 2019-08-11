'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

const UsersLikeReadSeriesModel = {
    users_like_read_series_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    users_like_read_series_user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'users',
            key: 'user_id'
        }
    },
    users_like_read_series_read_serie_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'read_series',
            key: 'read_Serie_id'
        }
    }
}

const usersLikeReadSeriesOptions = {
    timestamps: false
}

const setupUsersLikeReadSeriesModel = config => {
    const db = setupDatabase(config)
    return db.define('users_like_read_series', UsersLikeReadSeriesModel, usersLikeReadSeriesOptions)
}

module.exports = setupUsersLikeReadSeriesModel
