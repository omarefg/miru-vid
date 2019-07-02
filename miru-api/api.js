'use strict'

const express = require('express')
const controllers = require('./controller')
const endpoints = require('./controller/endpoints.json')

const api = express.Router()

const startRouter = () => {
    for (let endpoint in endpoints) {
        const controller = controllers[endpoint]
        const urls = endpoints[endpoint].urls
        for (let url of urls) {
            const getMethod = controller[url.get]
            const postMethod = controller[url.post]
            const putMethod = controller[url.put]
            const deleteMethod = controller[url.delete]
            if (getMethod) {
                api.get(url.url, getMethod)
            }
            if (postMethod) {
                api.post(url.url, postMethod)
            }
            if (putMethod) {
                api.put(url.url, putMethod)
            }
            if (deleteMethod) {
                api.delete(url.url, deleteMethod)
            }
        }
    }
}

startRouter()

module.exports = api
