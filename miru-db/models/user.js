'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

const userModel = {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    birthday: {
        type: Sequelize.DATE,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    confirmed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
}

const setupUserModel = config => {
    const sequelize = setupDatabase(config)
    return sequelize.define('user', userModel)
}

module.exports = setupUserModel
