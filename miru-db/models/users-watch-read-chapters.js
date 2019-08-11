'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

const UsersWatchReadChaptersModel = {
    users_watch_read_chapters_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    users_watch_read_chapters_user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'users',
            key: 'user_id'
        }
    },
    users_watch_read_chapters_read_chapter_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'read_chapters',
            key: 'read_chapter_id'
        }
    }
}

const usersWatchReadChaptersOptions = {
    timestamps: false
}

const setupUsersWatchReadChapters = config => {
    const db = setupDatabase(config)
    return db.define('users_watch_read_chapters', UsersWatchReadChaptersModel, usersWatchReadChaptersOptions)
}

module.exports = setupUsersWatchReadChapters
