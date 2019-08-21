'use strict'

const jwt = require('jsonwebtoken')
const chalk = require('chalk')
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')
const { EMAIL_SECRET, auth } = require('../constants/auth')
const { mailOptions } = require('../constants/email')
const { SALT_ROUNDS } = require('../constants/user')
const transporter = nodemailer.createTransport({ service: 'hotmail', auth })
const moment = require('moment')

const UserBusiness = (debug, UserModel) => {
    const create = async body => {
        const email = await UserModel.findByEmail(body.user_email)
        const username = await UserModel.findByUsername(body.user_username)

        if (email.length || username.length) {
            const error = new Error()
            error.lengthError = {
                username: username.length > 0,
                email: email.length > 0
            }
            throw error
        }
        try {
            body.user_password = await bcrypt.hash(body.user_password, SALT_ROUNDS)
            await UserModel.createUser(body)
            await sendRegistrationEmail(body.user_email)
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
        const tokenobj = { id: user.user_id }
        const tokenparams = { }
        jwt.sign(tokenobj, EMAIL_SECRET, tokenparams, sendEmail)
    }

    const login = async body => {
        let user, username, password, match
        let errors = { notConfirmed: false, username: false, password: false }
        const error = new Error()

        try {
            username = await UserModel.findByUsername(body.user_username)
            if (!username.length) {
                errors.username = true
                error.objError = errors
                throw error
            }
            match = await bcrypt.compare(body.user_password, username[0].user_password)
            if (match) {
                user = await UserModel.findByUsernameAndPassword({ username: body.user_username, password: username[0].user_password })
                if (user.length && !user[0].user_is_confirmed) {
                    errors.notConfirmed = true
                    error.objError = errors
                    throw error
                }
                password = await UserModel.findByPassword(username[0].user_password)
                if (!password.length) {
                    errors.password = true
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
        user = user[0]
        delete user.user_password
        delete user.user_is_confirmed
        delete user.user_confirmed_at
        delete user.user_is_active
        delete user.user_created_at
        delete user.user_updated_at
        return user
    }

    const confirmRegisteredUser = async params => {
        try {
            const { id } = jwt.verify(params.token, EMAIL_SECRET)
            const userIsConfirmed = await UserModel.findById(id)
            if (!userIsConfirmed.user_is_confirmed) {
                const now = moment.utc().local().format('YYYY-MM-DD HH:mm:ss')
                await UserModel.updateUser({ user_id: id, user_is_confirmed: 1, user_confirmed_at: now })
            }
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
