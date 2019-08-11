'use strict'

const setupUserModel = model => {
    const findById = id => model.findByPk(id)

    const findAll = () => model.findAll()

    const updateUser = async user => {
        const cond = { where: { id: user.id } }
        const existingUser = await model.findByPk(user.id)
        const updated = await model.update(user, cond)
        return updated ? model.findByPk(user.id) : existingUser
    }

    const createUser = async user => {
        const result = await model.create(user)
        return result.toJSON()
    }

    const findByUsername = username => {
        const cond = { where: { username } }
        return model.findAll(cond)
    }

    const findByUsernameAndPassword = user => {
        const { username, password } = user
        const cond = { where: { username, password } }
        return model.findOne(cond)
    }

    const findByEmail = email => {
        const cond = { where: { email } }
        return model.findAll(cond)
    }

    const findByPassword = password => {
        const cond = { where: { password } }
        return model.findAll(cond)
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
