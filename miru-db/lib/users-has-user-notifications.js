'use strict'

const setupUsersHasUserNotificationsModel = model => {
    const findById = id => model.findByPk(id)

    const findAll = () => model.findAll()

    return {
        findById,
        findAll
    }
}

module.exports = setupUsersHasUserNotificationsModel
