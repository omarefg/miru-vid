'use strict'

const {
    setupUser,
    setupDatabase,
    setupSection
} = require('./lib/')

const {
    setupUserModel,
    setupSectionModel
} = require('./models/')

const defaults = require('defaults')
const { dbConfig } = require('miru-utils').db

const startDB = async config => {
    config = defaults(config, dbConfig)
    const sequelize = setupDatabase(config)
    const UserModel = setupUserModel(config)
    const SectionModel = setupSectionModel(config)

    await sequelize.authenticate()

    if (config.setup) {
        await sequelize.sync(({ force: true }))
    }

    const User = setupUser(UserModel)
    const Section = setupSection(SectionModel)

    return {
        User,
        Section
    }
}

module.exports = startDB
