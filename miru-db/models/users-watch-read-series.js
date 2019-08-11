'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

const UsersWatchReadSeriesModel = {
    users_watch_read_series_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    users_watch_read_series_user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'users',
            key: 'user_id'
        }
    },
    users_watch_read_series_read_serie_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'read_series',
            key: 'read_serie_id'
        }
    }
}

const usersWatchReadSeriesOptions = {
    timestamps: false
}

const setupUsersWatchReadSeriesModel = config => {
    const db = setupDatabase(config)
    return db.define('users_watch_read_series', UsersWatchReadSeriesModel, usersWatchReadSeriesOptions)
}

module.exports = setupUsersWatchReadSeriesModel
