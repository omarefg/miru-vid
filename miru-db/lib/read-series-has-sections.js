'use strict'

const setupReadSeriesHasSectionsModel = model => {
    const findById = id => model.findByPk(id)

    const findAll = () => model.findAll()

    return {
        findById,
        findAll
    }
}

module.exports = setupReadSeriesHasSectionsModel
