'use strict'

const jwt = require('jsonwebtoken')
const chalk = require('chalk')
const { EMAIL_SECRET, auth } = require('../constant/auth')
const { mailOptions } = require('../constant/email')
const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({ service: 'hotmail', auth })

const UserBusiness = (debug, UserModel) => {
    const create = async body => {
        let user, email, username
        email = await UserModel.User.findByEmail(body.email)
        username = await UserModel.User.findByUsername(body.username)
        if (email.length || username.length) {
            throw new Error({
                username: username.length > 0,
                email: email.length > 0
            })
        }
        user = await UserModel.User.createUser(body)
        jwt.sign({ id: user.id }, EMAIL_SECRET, { expiresIn: 60 * 60 * 24 * 3 },
            async (error, emailToken) => {
                if (error) { throw new Error(error) }
                const url = `http://localhost:3020/miru/user/confirmation/${emailToken}`
                try {
                    await transporter.sendMail({ ...mailOptions(url), to: body.email })
                    debug(`${chalk.green(`Email sent to: ${body.email}`)}`)
                } catch (error) {
                    throw new Error(error)
                }
            })
    }

    return {
        create
    }
}

module.exports = UserBusiness
