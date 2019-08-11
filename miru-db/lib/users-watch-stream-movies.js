'use strict'

const setupUsersWatchStreamMoviesModel = model => {
    const findById = id => model.findByPk(id)

    const findAll = () => model.findAll()

    return {
        findById,
        findAll
    }
}

module.exports = setupUsersWatchStreamMoviesModel
