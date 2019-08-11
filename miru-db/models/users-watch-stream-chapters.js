'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

const UsersWatchStreamChaptersModel = {
    users_watch_stream_chapters_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    users_watch_stream_chapters_user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'users',
            key: 'user_id'
        }
    },
    users_watch_stream_chapters_stream_chapter_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'stream_chapters',
            key: 'stream_chapter_id'
        }
    }
}

const usersWatchStreamChaptersOptions = {
    timestamps: false
}

const setupUsersWatchStreamChaptersModel = config => {
    const db = setupDatabase(config)
    return db.define('users_watch_stream_chapters', UsersWatchStreamChaptersModel, usersWatchStreamChaptersOptions)
}

module.exports = setupUsersWatchStreamChaptersModel
