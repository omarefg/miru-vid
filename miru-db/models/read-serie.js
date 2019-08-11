'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

const ReadSerieModel = {
    read_serie_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    read_serie_title: {
        type: Sequelize.STRING(80),
        allowNull: false
    },
    read_serie_description: {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    read_serie_number_of_seasons: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    read_serie_is_premium: {
        type: Sequelize.TINYINT(1),
        allowNull: false
    },
    read_serie_poster: {
        type: Sequelize.STRING(500),
        allowNull: false,
        unique: true
    },
    read_serie_creator_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'creators',
            key: 'creator_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
    },
    read_serie_number_of_chapters: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    read_serie_is_active: {
        type: Sequelize.TINYINT(1),
        allowNull: false
    },
    read_serie_release_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    createdAt: {
        field: 'read_serie_created_at',
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    updatedAt: {
        field: 'read_serie_updated_at',
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        allowNull: false
    }
}

const setupReadSerieModel = config => {
    const db = setupDatabase(config)
    return db.define('read_series', ReadSerieModel)
}

module.exports = setupReadSerieModel
