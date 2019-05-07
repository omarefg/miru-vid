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

api.get('/user', async (req, res, next) => {
  try {
    users = await User()
  } catch (error) {
    return next(error)
  }
  res.status(200).send(users)
})

api.post('/user', async (req, res, next) => {
  let user, email, username
  email = await User.findByEmail(req.body.email)
  username = await User.findByUsername(req.body.username)
  if (email.length || username.length) {
    return res.status(500).jsonp({
      username: username.length > 0,
      email: email.length > 0
    })
  }
  try {
    user = await User.createUser(req.body)
  } catch (error) {
    return next(error)
  }
  res.status(200).send(user)
})

module.exports = api
