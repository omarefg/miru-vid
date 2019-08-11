'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

const ReadSeriesHasSectionsModel = {
    read_series_has_sections_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    read_series_has_sections_read_serie_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'read_series',
            key: 'read_serie_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
    },
    read_series_has_sections_section_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'sections',
            key: 'section_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
    }
}

const readSeriesHasSectionsModelOptions = {
    timestamps: false
}

const setupReadSeriesHasSectionsModel = config => {
    const db = setupDatabase(config)
    return db.define('read_series_has_sections', ReadSeriesHasSectionsModel, readSeriesHasSectionsModelOptions)
}

module.exports = setupReadSeriesHasSectionsModel
