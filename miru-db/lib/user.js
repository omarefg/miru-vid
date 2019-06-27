'use strict'

const setupUserModel = UserModel => {
    const findById = id => UserModel.findById(id)

    const findAll = () => UserModel.findAll()

    const updateUser = async user => {
        const cond = { where: { id: user.id } }
        const existingUser = await UserModel.findById(user.id)
        const updated = await UserModel.update(user, cond)
        return updated ? UserModel.findById(user.id) : existingUser
    }

    const createUser = async user => {
        const result = await UserModel.create(user)
        return result.toJSON()
    }

    const findByUsername = username => {
        const cond = { where: { username } }
        return UserModel.findAll(cond)
    }

    const findByUsernameAndPassword = user => {
        const cond = { where: { username: user.username, password: user.password } }
        return UserModel.findOne(cond)
    }

    const findByEmail = email => {
        const cond = { where: { email } }
        return UserModel.findAll(cond)
    }

    const findByPassword = password => {
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

module.exports = setupUserModel
