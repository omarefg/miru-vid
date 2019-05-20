'use strict'

module.exports = function setupUser (UserModel) {
  function findById (id) {
    return UserModel.findByPk(id)
  }

  async function updateUser (user) {
    const cond = { where: { id: user.id } }
    const existingUser = await UserModel.findByPk(user.id)
    const updated = await UserModel.update(user, cond)
    return updated ? UserModel.findByPk(user.id) : existingUser
  }

  async function createUser (user) {
    const result = await UserModel.create(user)
    return result.toJSON()
  }

  function findAll () {
    return UserModel.findAll()
  }

  function findByUsername (username) {
    const cond = { where: { username } }
    return UserModel.findAll(cond)
  }
  
  function findByUsernameAndPassword (user) {
    const cond = { where: { username: user.username, password: user.password } }
    return UserModel.findOne(cond)
  }

  function findByEmail (email) {
    const cond = { where: { email } }
    return UserModel.findAll(cond)
  }

  function findByPassword (password) {
    const cond = { where: { password } }
    return UserModel.findAll(cond)
  }
  
  return {
    findById,
    createUser,
    updateUser,
    findAll,
    findByUsername,
    findByUsernameAndPassword,
    findByEmail,
    findByPassword
  }
}
