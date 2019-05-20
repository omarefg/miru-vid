'use strict'

const utils = require('miru-utils')
const db = require('miru-db')
const chalk = require('chalk')
const express = require('express')
const debug = require('debug')('miru:api:routes')
const dbDebug = require('debug')('miru:api:db')
const controllers = require('./controller')
const endpoints = require ('./controller/endpoints.json')
const logging = s => dbDebug(s)
const config = utils.db.config(false, logging)

const api = express.Router()

let services

const startRouter = () => {
    if (services) {
        for (let endpoint in endpoints) {
            const controller = controllers[endpoint]
            const urls = endpoints[endpoint].urls
            const model = endpoints[endpoint].model
            for (let url of urls) {
                const getMethod = controller[url.get]
                const postMethod = controller[url.post]
                const putMethod = controller[url.put]
                const deleteMethod = controller[url.delete]
                if (getMethod) {
                    api.get(url.url, getMethod(services[model], debug))
                }
                if (postMethod) {
                    api.post(url.url, postMethod(services[model], debug))
                }
                if (putMethod) {
                    api.put(url.url, putMethod(services[model], debug))
                }
                if (deleteMethod) {
                    api.delete(url.url, deleteMethod(services[model], Debug))
                }
            }
        }
    }
}

const startDB = async () => {
    if (!services) {
        debug(`${chalk.magenta('Conecting to Database...')}`)
        try {
            services = await db(config)
            debug(`${chalk.green('Connected')}`)
        } catch (error) {
            debug(`${chalk.red('[Conection error]')}`)
            next(error)
        }
        startRouter()
    }
}

startDB()



module.exports = api
