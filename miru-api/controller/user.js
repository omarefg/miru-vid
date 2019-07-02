'use strict'

const createBusinesses = require('miru-business')

const create = async (req, res, next) => {
    const { UserBusiness } = await createBusinesses()
    try {
        const user = await UserBusiness.create(req.body)
        return res.status(200).send(user)
    } catch (error) {
        if (error.lengthError) {
            return res.status(500).jsonp(error.lengthError)
        }
        return next(error)
    }
}

const login = async (req, res, next) => {
    const { UserBusiness } = await createBusinesses()
    try {
        const user = await UserBusiness.login(req.body)
        return res.status(200).send(user)
    } catch (error) {
        if (error.objError) {
            return res.status(500).jsonp(error.objError)
        }
        return next(error)
    }
}

const confirmRegisteredUser = async (req, res, next) => {
    const { UserBusiness } = await createBusinesses()
    try {
        const url = await UserBusiness.confirmRegisteredUser(req.params)
        return res.redirect(url)
    } catch (error) {
        return next(error)
    }
}

module.exports = {
    create,
    login,
    confirmRegisteredUser
}
