'use strict'

const setupSectionModel = SectionModel => {
    const findById = id => SectionModel.findByPk(id)

    const findAll = () => SectionModel.findAll()

    return {
        findById,
        findAll
    }
}

module.exports = setupSectionModel
