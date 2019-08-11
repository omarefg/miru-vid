'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

const UsersWatchStreamSeriesModel = {
    users_watch_stream_series_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    users_watch_stream_series_user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'users',
            key: 'user_id'
        }
    },
    users_watch_stream_series_stream_serie_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'stream_series',
            key: 'stream_serie_id'
        }
    }
}

const usersWatchStreamSeriesOptions = {
    timestamps: false
}

const setupUsersWatchStreamSeriesModel = config => {
    const db = setupDatabase(config)
    return db.define('users_watch_stream_series', UsersWatchStreamSeriesModel, usersWatchStreamSeriesOptions)
}

module.exports = setupUsersWatchStreamSeriesModel
