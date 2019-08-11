'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

const StreamChapterModel = {
    stream_chapter_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    stream_chapter_title: {
        type: Sequelize.STRING(80),
        allowNull: false
    },
    stream_chapter_description: {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    stream_chapter_stream_serie_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'stream_series',
            key: 'stream_serie_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
    },
    stream_chapter_season: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    stream_chapter_content: {
        type: Sequelize.STRING(500),
        allowNull: false,
        unique: true
    },
    stream_chapter_duration: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    stream_chapter_number: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    createdAt: {
        field: 'stream_chapter_created_at',
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    updatedAt: {
        field: 'stream_chapter_updated_at',
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        allowNull: false
    }

}

const setupStreamChapterModel = config => {
    const db = setupDatabase(config)
    return db.define('stream_chapters', StreamChapterModel)
}

module.exports = setupStreamChapterModel
