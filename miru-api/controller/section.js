'use strict'

const createBusinesses = require('miru-business')

const getAll = async (req, res, next) => {
    const { SectionBusiness } = await createBusinesses()
    try {
        const sections = await SectionBusiness.getAll(req.body)
        return res.status(200).send(sections)
    } catch (error) {
        return next(error)
    }
}

const getSectionById = async (req, res, next) => {
    const { SectionBusiness } = await createBusinesses()
    const { id } = req.params
    try {
        const section = await SectionBusiness.getSectionById(id)
        return res.status(200).send(section)
    } catch (error) {
        return next(error)
    }
}

module.exports = {
    getAll,
    getSectionById
}
