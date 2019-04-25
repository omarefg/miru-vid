'use strict'

const utils = require('miru-utils')
const debug = require('debug')('miru:api:routes')
const dbDebug = require('debug')('miru:api:db')
const express = require('express')
const db = require('miru-db')
const logging = s => dbDebug(s)
const config = utils.db.config(false, logging)
const chalk = require('chalk')

const api = express.Router()

let services, User

api.use('*', async (req, res, next) => {
  if (!services) {
    debug(`${chalk.magenta('Conecting to Database...')}`)
    try {
      services = await db(config)
      debug(`${chalk.green('Connected')}`)
    } catch (error) {
      debug(`${chalk.red('[Conection error]')}`)
      next(error)
    }
  }
  User = services.User
  next()
})

api.get('/users', async (req, res, next) => {
  let users = []
  try {
    users = await User.findAll()
  } catch (error) {
    return next(error)
  }
  res.status(200).send(users)
})

api.post('/user', async (req, res, next) => {
  let body
  try {
    body = await User.createUser(req.body)
  } catch (error) {
    return next(error)
  }
  res.status(200).send(body)
})

module.exports = api
