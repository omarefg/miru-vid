'use strict'

const setupStreamMoviesHasSectionsModel = model => {
    const findById = id => model.findByPk(id)

    const findAll = () => model.findAll()

    return {
        findById,
        findAll
    }
}

module.exports = setupStreamMoviesHasSectionsModel
