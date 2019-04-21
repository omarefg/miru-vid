'use strict'

const setupDatabase = require('./lib/db')
const setupUser = require('./lib/user')
const setupUserModel = require('./models/user')
const defaults = require('defaults')

module.exports = async function (config) {
  config = defaults(config, {
    dialect: 'sqlite',
    pool: {
      max: 10,
      min: 0,
      idle: 10000
    },
    query: {
      raw: true
    }
  })
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
