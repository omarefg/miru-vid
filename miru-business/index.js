'use strict'

const utils = require('miru-utils')
const db = require('miru-db')
const chalk = require('chalk')
const debug = require('debug')('miru:business')
const dbDebug = require('debug')('miru:db')
const logging = s => dbDebug(s)
const config = utils.db.config(false, logging)
const businesses = require('./businesses.json')

let services

const Businesses = {
    UserBusiness: undefined,
    SectionBusiness: undefined
}

const createBusinesses = async () => {
    if (!services) {
        debug(`${chalk.magenta('Conecting to Database...')}`)
        try {
            services = await db(config)
            for (let business of businesses) {
                const { name, path, service } = business
                Businesses[name] = require(path)(debug, services[service])
            }
            debug(`${chalk.green('Connected')}`)
        } catch (error) {
            debug(`${chalk.red(`[Conection error]: ${error}`)}`)
        }
        return Businesses
    } else {
        return Businesses
    }
}

module.exports = createBusinesses
