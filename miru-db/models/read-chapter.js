'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

const ReadChapterModel = {
    read_chapter_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    read_chapter_title: {
        type: Sequelize.STRING(80),
        allowNull: false
    },
    read_chapter_description: {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    read_chapter_read_serie_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'read_series',
            key: 'read_serie_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
    },
    read_chapter_season: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    read_chapter_pages: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    read_chapter_content: {
        type: Sequelize.STRING(500),
        allowNull: false,
        unique: true
    },
    read_chapter_number: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    read_chapter_release_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    createdAt: {
        field: 'read_chapter_created_at',
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    updatedAt: {
        field: 'read_chapter_updated_at',
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        allowNull: false
    }
}

const setupReadChapterModel = config => {
    const db = setupDatabase(config)
    return db.define('read_chapters', ReadChapterModel)
}

module.exports = setupReadChapterModel
