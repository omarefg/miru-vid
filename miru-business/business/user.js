'use strict'

const jwt = require('jsonwebtoken')
const chalk = require('chalk')
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')
const { EMAIL_SECRET, auth } = require('../constants/auth')
const { mailOptions } = require('../constants/email')
const { SALT_ROUNDS } = require('../constants/user')
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
        try {
            body.password = await bcrypt.hash(body.password, SALT_ROUNDS)
            await UserModel.createUser(body)
            await sendRegistrationEmail(body.email)
        } catch (error) {
            throw error
        }
    }

    const sendRegistrationEmail = async email => {
        const sendEmail = async (error, emailToken) => {
            if (error) { throw new Error(error) }
            const url = `http://localhost:3020/miru/user/confirmation/${emailToken}`
            transporter.sendMail({ ...mailOptions(url), to: email })
                .then(() => debug(`${chalk.green(`Email sent to: ${email}`)}`))
        }
        let user = await UserModel.findByEmail(email)
        user = user[0]
        const tokenobj = { id: user.id }
        const tokenparams = { }
        jwt.sign(tokenobj, EMAIL_SECRET, tokenparams, sendEmail)
    }

    const login = async body => {
        let user, username, password, match
        let errors = { notConfirmed: false, username: false, password: false }
        try {
            username = await UserModel.findByUsername(body.username)
            match = await bcrypt.compare(body.password, username[0].password)
            if (match) {
                body.password = username[0].password
                user = await UserModel.findByUsernameAndPassword(body)
                password = await UserModel.findByPassword(body.password)
                if (user && !user.confirmed) { errors.notConfirmed = true }
                if (!username.length) { errors.username = true }
                if (!password.length) { errors.password = true }
                if (errors.notConfirmed || errors.username || errors.password) {
                    const error = new Error()
                    error.objError = errors
                    throw error
                }
            } else {
                errors.password = true
                const error = new Error()
                error.objError = errors
                throw error
            }
        } catch (error) {
            throw error
        }
        delete user.password
        delete user.confirmed
        delete user.createdAt
        delete user.updatedAt
        return user
    }

    const confirmRegisteredUser = async params => {
        try {
            const { id } = jwt.verify(params.token, EMAIL_SECRET)
            await UserModel.updateUser({ id, confirmed: true })
            return 'http://localhost:3000/inicia-sesion'
        } catch (error) {
            throw error
        }
    }

    return {
        create,
        login,
        confirmRegisteredUser,
        sendRegistrationEmail
    }
}

module.exports = UserBusiness
