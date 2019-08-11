'use strict'

const Sequelize = require('sequelize')
let db = null

const setupDatabase = config => {
    if (!db) {
        db = new Sequelize(config)
    }
    return db
}

module.exports = setupDatabase
