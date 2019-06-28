'use strict'

const express = require('express')
const debug = require('debug')('miru:api:routes')
const controllers = require('./controller')
const endpoints = require('./controller/endpoints.json')

const api = express.Router()

let services

const startRouter = () => {
    if (services) {
        for (let endpoint in endpoints) {
            const controller = controllers[endpoint]
            const urls = endpoints[endpoint].urls
            for (let url of urls) {
                const getMethod = controller[url.get]
                const postMethod = controller[url.post]
                const putMethod = controller[url.put]
                const deleteMethod = controller[url.delete]
                if (getMethod) {
                    api.get(url.url, getMethod(debug))
                }
                if (postMethod) {
                    api.post(url.url, postMethod(debug))
                }
                if (putMethod) {
                    api.put(url.url, putMethod(debug))
                }
                if (deleteMethod) {
                    api.delete(url.url, deleteMethod(debug))
                }
            }
        }
    }
}

startRouter()

module.exports = api
