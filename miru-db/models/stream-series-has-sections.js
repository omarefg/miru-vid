'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

const StreamSeriesHasSectionsModel = {
    stream_series_has_sections_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    stream_series_has_sections_stream_serie_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'stream_series',
            key: 'stream_serie_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
    },
    stream_series_has_sections_section_id: {
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

const streamSeriesHasSectionsModelOptions = {
    timestamps: false
}

const setupStreamSeriesHasSectionsModel = config => {
    const db = setupDatabase(config)
    return db.define('stream_series_has_sections', StreamSeriesHasSectionsModel, streamSeriesHasSectionsModelOptions)
}

module.exports = setupStreamSeriesHasSectionsModel
