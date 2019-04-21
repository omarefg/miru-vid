'use strict'

module.exports = function setupUser (UserModel) {
  function findById (id) {
    return UserModel.findById(id)
  }
  async function updateUser (user) {
    const cond = { where: { id: user.id } }
    const existingUser = await UserModel.findById(user.id)
    const updated = await UserModel.update(user, cond)
    return updated ? UserModel.findById(user.id) : existingUser
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
  return {
    findById,
    createUser,
    updateUser,
    findAll,
    findByUsername,
    findByUsernameAndPassword
  }
}
