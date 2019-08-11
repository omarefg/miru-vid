'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

const StreamMoviesHasSectionsModel = {
    stream_movies_has_sections_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    stream_movies_has_sections_stream_movie_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'stream_movies',
            key: 'stream_movie_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
    },
    stream_movies_has_sections_section_id: {
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

const streamMoviesHasSectionsModelOptions = {
    timestamps: false
}

const setupStreamMoviesHasSectionsModel = config => {
    const db = setupDatabase(config)
    return db.define('stream_movies_has_sections', StreamMoviesHasSectionsModel, streamMoviesHasSectionsModelOptions)
}

module.exports = setupStreamMoviesHasSectionsModel
