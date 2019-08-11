'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

const UsersHasUserNotificationsModel = {
    users_has_user_notifications_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    users_has_user_notifications_user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'users',
            key: 'user_id'
        }
    },
    users_has_user_notifications_user_notification_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'user_notifications',
            key: 'user_notification_id'
        }
    }
}

const usersHasUserNotificationsOptions = {
    timestamps: false
}

const setupUsersHasUserNotificationsModel = config => {
    const db = setupDatabase(config)
    return db.define('users_has_user_notifications', UsersHasUserNotificationsModel, usersHasUserNotificationsOptions)
}

module.exports = setupUsersHasUserNotificationsModel
