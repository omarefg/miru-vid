'use strict'

const SectionBusiness = (debug, SectionModel) => {
    const getAll = async () => {
        try {
            const sections = await SectionModel.findAll()
            return sections
        } catch (error) {
            throw error
        }
    }

    const getSectionById = async id => {
        try {
            const section = await SectionModel.findById(id)
            if (section.length) {
                return section[0]
            } else {
                const error = new Error('The section do not exist')
                throw error
            }
        } catch (error) {
            throw error
        }
    }

    return {
        getAll,
        getSectionById
    }
}

module.exports = SectionBusiness
