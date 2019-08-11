'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

const ReadMoviesHasSectionsModel = {
    read_movies_has_sections_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    read_movies_has_sections_read_movie_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'read_movies',
            key: 'read_movie_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
    },
    read_movies_has_sections_section_id: {
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

const readMoviesHasSectionsModelOptions = {
    timestamps: false
}

const setupReadMoviesHasSectionsModel = config => {
    const db = setupDatabase(config)
    return db.define('read_movies_has_sections', ReadMoviesHasSectionsModel, readMoviesHasSectionsModelOptions)
}

module.exports = setupReadMoviesHasSectionsModel
