'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

const SectionModel = {
    section_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    section_name: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: true
    }
}

const sectionModelOptions = {
    timestamps: false
}

const setupSectionModel = config => {
    const db = setupDatabase(config)
    return db.define('sections', SectionModel, sectionModelOptions)
}

module.exports = setupSectionModel
