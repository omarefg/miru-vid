'use strict'

const jwt = require('jsonwebtoken')
const chalk = require('chalk')
const { EMAIL_SECRET, auth } = require('../constants/auth')
const { mailOptions } = require('../constants/email')
const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({ service: 'hotmail', auth })

const UserBusiness = (debug, UserModel) => {
    const create = async body => {
        const email = await UserModel.findByEmail(body.email)
        const username = await UserModel.findByUsername(body.username)

        if (email.length || username.length) {
            const error = new Error()
            error.lengthError = {
                username: username.length > 0,
                email: email.length > 0
            }
            throw error
        }

        const sendEmail = async (error, emailToken) => {
            if (error) { throw new Error(error) }
            const url = `http://localhost:3020/miru/user/confirmation/${emailToken}`
            transporter.sendMail({ ...mailOptions(url), to: body.email })
                .then(() => debug(`${chalk.green(`Email sent to: ${body.email}`)}`))
        }

        const user = await UserModel.createUser(body)
        const tokenobj = { id: user.id }
        const tokenparams = { expiresIn: 60 * 60 * 24 * 3 }
        jwt.sign(tokenobj, EMAIL_SECRET, tokenparams, sendEmail)
    }

    const login = async body => {
        let user, username, password
        let errors = { notConfirmed: false, username: false, password: false }
        try {
            user = await UserModel.findByUsernameAndPassword(body)
            username = await UserModel.findByUsername(body.username)
            password = await UserModel.findByPassword(body.password)
            if (user && !user.confirmed) { errors.notConfirmed = true }
            if (!username.length) { errors.username = true }
            if (!password.length) { errors.password = true }
            if (errors.notConfirmed || errors.username || errors.password) {
                const error = new Error()
                error.objError = errors
                throw error
            }
        } catch (error) {
            throw new Error(error)
        }
        return user
    }

    const confirmRegisteredUser = async params => {
        try {
            const { id } = jwt.verify(params.token, EMAIL_SECRET)
            await UserModel.updateUser({ id, confirmed: true })
            return 'http://localhost:3000/inicia-sesion'
        } catch (error) {
            throw new Error(error)
        }
    }

    return {
        create,
        login,
        confirmRegisteredUser
    }
}

module.exports = UserBusiness
