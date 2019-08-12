'use strict'

const models = require('./models/')
const libs = require('./lib/')
const modelsData = require('./models.json')
const defaults = require('defaults')
const { dbConfig } = require('miru-utils').db

const startDB = async config => {
    config = defaults(config, dbConfig)
    const sequelize = libs.setupDatabase(config)
    const databases = {}

    for (const data of modelsData) {
        const { lib, model, name } = data
        const modelSetup = models[model](config)
        databases[name] = libs[lib](modelSetup, sequelize)
    }

    await sequelize.authenticate()

    if (config.setup) {
        await sequelize.sync({ force: true, logging: console.log })
    }

    return databases
}

module.exports = startDB
