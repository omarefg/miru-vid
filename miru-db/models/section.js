'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

const sectionModel = {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}

const setupSectionModel = config => {
    const sequelize = setupDatabase(config)
    return sequelize.define('section', sectionModel)
}

module.exports = setupSectionModel
