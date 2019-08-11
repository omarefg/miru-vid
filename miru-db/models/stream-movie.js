'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

const StreamMovieModel = {
    stream_movie_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    stream_movie_title: {
        type: Sequelize.STRING(80),
        allowNull: false
    },
    stream_movie_description: {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    stream_movie_trailer: {
        type: Sequelize.STRING(500),
        allowNull: false,
        unique: true
    },
    stream_movie_content: {
        type: Sequelize.STRING(500),
        allowNull: false,
        unique: true
    },
    stream_movie_duration: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    stream_movie_is_premium: {
        type: Sequelize.TINYINT(1),
        allowNull: false,
        defaultValue: 0
    },
    stream_movie_creator_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'creators',
            key: 'creator_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
    },
    stream_movie_poster: {
        type: Sequelize.STRING(500),
        allowNull: false,
        unique: true
    },
    stream_movie_is_active: {
        type: Sequelize.TINYINT(1),
        allowNull: false,
        defaultValue: 1
    },
    stream_movie_release_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    createdAt: {
        field: 'stream_movie_created_at',
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    updatedAt: {
        field: 'stream_movie_updated_at',
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        allowNull: false
    }

}

const setupStreamMovieModel = config => {
    const db = setupDatabase(config)
    return db.define('stream_movies', StreamMovieModel)
}

module.exports = setupStreamMovieModel
