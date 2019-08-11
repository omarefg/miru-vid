'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

const CreatorModel = {
    creator_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    creator_name: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    creator_lastname: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    creator_username: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: true
    },
    creator_birthdate: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    creator_country: {
        type: Sequelize.STRING(2),
        allowNull: false
    },
    creator_direction: {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    creator_state: {
        type: Sequelize.STRING(45),
        allowNull: false
    },
    creator_city: {
        type: Sequelize.STRING(45),
        allowNull: false
    },
    creator_patreon: {
        type: Sequelize.STRING(500),
        unique: true
    },
    creator_is_trusted: {
        type: Sequelize.TINYINT(1),
        allowNull: false
    },
    creator_instagram: {
        type: Sequelize.STRING(500),
        unique: true
    },
    creator_behance: {
        type: Sequelize.STRING(500),
        unique: true
    },
    creator_youtube: {
        type: Sequelize.STRING(500),
        unique: true
    },
    creator_twitter: {
        type: Sequelize.STRING(500),
        unique: true
    },
    creator_is_public: {
        type: Sequelize.TINYINT(1),
        allowNull: false
    },
    creator_email: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
    },
    creator_password: {
        type: Sequelize.STRING(45),
        allowNull: false
    },
    creator_is_confirmed: {
        type: Sequelize.TINYINT(1),
        defaultValue: 0,
        allowNull: false
    },
    creator_is_premium: {
        type: Sequelize.TINYINT(1),
        defaultValue: 0,
        allowNull: false
    },
    creator_is_active: {
        type: Sequelize.TINYINT(1),
        defaultValue: 1,
        allowNull: false
    },
    createdAt: {
        field: 'creator_created_at',
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    updatedAt: {
        field: 'creator_updated_at',
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        allowNull: false
    }
}

const setupCreatorModel = config => {
    const db = setupDatabase(config)
    return db.define('creators', CreatorModel)
}

module.exports = setupCreatorModel
