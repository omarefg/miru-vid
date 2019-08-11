'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

const ReadMovieModel = {
    read_movie_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    read_movie_title: {
        type: Sequelize.STRING(80),
        allowNull: false
    },
    read_movie_description: {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    read_movie_content: {
        type: Sequelize.STRING(500),
        unique: true,
        allowNull: false
    },
    read_movie_release_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    createdAt: {
        field: 'read_movie_created_at',
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    updatedAt: {
        field: 'read_movie_updated_at',
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        allowNull: false
    },
    read_movie_number_of_chapters: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    read_movie_is_premium: {
        type: Sequelize.TINYINT(1),
        allowNull: false,
        defaultValue: 0
    },
    read_movie_poster: {
        type: Sequelize.STRING(500),
        unique: true,
        allowNull: false
    },
    read_movie_pages: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    read_movie_creator_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'creators',
            key: 'creator_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
    },
    read_movie_is_active: {
        type: Sequelize.TINYINT(1),
        allowNull: false,
        defaultValue: 1
    }
}

const setupReadMovieModel = config => {
    const db = setupDatabase(config)
    return db.define('read_movies', ReadMovieModel)
}

module.exports = setupReadMovieModel
