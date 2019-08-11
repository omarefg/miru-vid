'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

const UsersLikeStreamSeries = {
    users_like_stream_series_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    users_like_stream_series_user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'users',
            key: 'user_id'
        }
    },
    users_like_stream_series_stream_serie_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'stream_series',
            key: 'stream_serie_id'
        }
    }
}

const usersLikeStreamSeriesOptions = {
    timestamps: false
}

const setupUsersLikeStreamSeriesModel = config => {
    const db = setupDatabase(config)
    return db.define('users_like_stream_series', UsersLikeStreamSeries, usersLikeStreamSeriesOptions)
}

module.exports = setupUsersLikeStreamSeriesModel
