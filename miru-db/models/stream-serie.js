'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

const StreamSerieModel = {
    stream_serie_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    stream_serie_title: {
        type: Sequelize.STRING(80),
        allowNull: false
    },
    stream_serie_description: {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    stream_serie_trailer: {
        type: Sequelize.STRING(500),
        allowNull: false,
        unique: true
    },
    stream_serie_number_of_chapters: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    stream_serie_release_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    stream_serie_poster: {
        type: Sequelize.STRING(500),
        allowNull: false,
        unique: true
    },
    stream_serie_number_of_seasons: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    stream_serie_is_premium: {
        type: Sequelize.TINYINT(1),
        allowNull: false,
        defaultValue: 0
    },
    stream_serie_creator_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'creators',
            key: 'creator_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
    },
    stream_serie_is_active: {
        type: Sequelize.TINYINT(1),
        allowNull: false,
        defaultValue: 1
    },
    createdAt: {
        field: 'stream_serie_created_at',
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    updatedAt: {
        field: 'stream_serie_updated_at',
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        allowNull: false
    }

}

const setupStreamSerieModel = config => {
    const db = setupDatabase(config)
    return db.define('stream_series', StreamSerieModel)
}

module.exports = setupStreamSerieModel
