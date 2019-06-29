'use strict'

const utils = require('miru-utils')
const db = require('miru-db')
const chalk = require('chalk')
const debug = require('debug')('miru:business')
const dbDebug = require('debug')('miru:db')
const logging = s => dbDebug(s)
const config = utils.db.config(false, logging)

let services, UserBusiness

const createBusinesses = async () => {
    if (!services) {
        debug(`${chalk.magenta('Conecting to Database...')}`)
        try {
            services = await db(config)
            UserBusiness = require('./business/user')(debug, services.User)
            debug(`${chalk.green('Connected')}`)
        } catch (error) {
            debug(`${chalk.red(`[Conection error]: ${error}`)}`)
        }
        return {
            UserBusiness
        }
    } else {
        return {
            UserBusiness
        }
    }
}

module.exports = createBusinesses
