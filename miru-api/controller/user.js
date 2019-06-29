'use strict'

const createBusinesses = require('miru-business')

const create = debug => async (req, res, next) => {
    const { UserBusiness } = await createBusinesses()
    try {
        const user = await UserBusiness.create(req.body)
        return res.status(200).send(user)
    } catch (error) {
        return next(error)
    }
}

const login = debug => async (req, res, next) => {
    const { UserBusiness } = await createBusinesses()
    try {
        const user = await UserBusiness.login(req.body)
        return res.status(200).send(user)
    } catch (error) {
        return next(error)
    }
}

const confirmRegisteredUser = debug => async (req, res, next) => {
    const { UserBusiness } = await createBusinesses()
    try {
        const url = UserBusiness.confirmRegisteredUser(req.params)
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
