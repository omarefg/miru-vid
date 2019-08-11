'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

const UserNotificationModel = {
    user_notification_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    user_notification_is_active: {
        type: Sequelize.TINYINT(1),
        allowNull: false
    },
    user_notification_user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'user_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
    },
    user_notification_read_movie_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'read_movies',
            key: 'read_movie_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
    },
    user_notification_read_serie_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'read_series',
            key: 'read_serie_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
    },
    user_notification_stream_movie_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'stream_movies',
            key: 'stream_movie_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
    },
    user_notification_stream_serie_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'stream_series',
            key: 'stream_serie_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
    }
}

const userNotificationModelOptions = {
    timestamps: false
}

const setupUserNotificationModel = config => {
    const db = setupDatabase(config)
    return db.define('user_notifications', UserNotificationModel, userNotificationModelOptions)
}

module.exports = setupUserNotificationModel
