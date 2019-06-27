'use strict'

const setupDatabase = require('./lib/db')
const setupUser = require('./lib/user')
const setupUserModel = require('./models/user')
const defaults = require('defaults')
const { dbConfig } = require('miru-utils').db

const startDB = async config => {
    config = defaults(config, dbConfig)
    const sequelize = setupDatabase(config)
    const UserModel = setupUserModel(config)

    await sequelize.authenticate()

    if (config.setup) {
        await sequelize.sync(({ force: true }))
    }

    const User = setupUser(UserModel)

    return {
        User
    }
}

module.exports = startDB
