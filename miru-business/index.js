'use strict'

const utils = require('miru-utils')
const db = require('miru-db')
const chalk = require('chalk')
const debug = require('debug')('miru:business')
const dbDebug = require('debug')('miru:db')
const logging = s => dbDebug(s)
const config = utils.db.config(false, logging)

let services

const startDB = async () => {
    if (!services) {
        debug(`${chalk.magenta('Conecting to Database...')}`)
        try {
            services = await db(config)
            debug(`${chalk.green('Connected')}`)
        } catch (error) {
            debug(`${chalk.red('[Conection error]')}`)
        }
    }
}

startDB()
