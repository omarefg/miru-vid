'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

const UserModel = {
    user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    user_name: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    user_lastname: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    user_username: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: true
    },
    user_birthdate: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    user_email: {
        type: Sequelize.STRING(320),
        allowNull: false,
        unique: true
    },
    user_password: {
        type: Sequelize.STRING(500),
        allowNull: false
    },
    user_is_confirmed: {
        type: Sequelize.TINYINT(1),
        defaultValue: 0,
        allowNull: false
    },
    user_is_premium: {
        type: Sequelize.TINYINT(1),
        defaultValue: 0,
        allowNull: false
    },
    user_is_active: {
        type: Sequelize.TINYINT(1),
        defaultValue: 1,
        allowNull: false
    },
    user_confirmed_at: {
        type: Sequelize.DATE
    },
    createdAt: {
        field: 'user_created_at',
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    updatedAt: {
        field: 'user_updated_at',
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        allowNull: false
    }
}

const setupUserModel = config => {
    const db = setupDatabase(config)
    return db.define('users', UserModel)
}

module.exports = setupUserModel
