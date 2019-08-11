'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

const CreatorNotificationModel = {
    creator_notification_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    creator_notification_is_active: {
        type: Sequelize.TINYINT(1),
        allowNull: false
    },
    creator_notification_creator_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'creators',
            key: 'creator_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
    },
    creator_notification_read_movie_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'read_movies',
            key: 'read_movie_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
    },
    creator_notification_read_serie_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'read_series',
            key: 'read_serie_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
    },
    creator_notification_stream_movie_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'stream_movies',
            key: 'stream_movie_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
    },
    creator_notification_stream_serie_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'stream_series',
            key: 'stream_serie_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
    }
}

const creatorNotificationModelOptions = {
    timestamps: false
}

const setupCreatorNotificationModel = config => {
    const db = setupDatabase(config)
    return db.define('creator_notifications', CreatorNotificationModel, creatorNotificationModelOptions)
}

module.exports = setupCreatorNotificationModel
