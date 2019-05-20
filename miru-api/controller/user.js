'use strict'

const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')
const chalk = require('chalk')
const { EMAIL_SECRET, auth } = require('../auth')
const transporter = nodemailer.createTransport({service: 'hotmail', auth})
const mailOptions = url => ({
    from: 'omarefg@hotmail.com',
    subject: 'Confirmación de correo para Miru',
    html: `
    <h1>Confirmación de correo para Miru</h1>
    <p>¡Hola! Soy Omar, el creador de Miru.</p>
    <p>Muchas gracias por haberte unido a esta comunidad.</p>
    <p>Solo falta confirmar tu correo.</p>
    <p>Hazlo ingresando en el siguiente <a href="${url}">link</a>.</p>
    `
})

const create = (User, debug) => async (req, res, next) => {
    let user, email, username
    email = await User.findByEmail(req.body.email)
    username = await User.findByUsername(req.body.username)
    if (email.length || username.length) {
        return res.status(500).jsonp({
            username: username.length > 0,
            email: email.length > 0
        })
    }
    try {
        user = await User.createUser(req.body)
        jwt.sign({
                id: user.id
            },
                EMAIL_SECRET,
            {
                expiresIn: 300
            },
            (error, emailToken) => {
                const url = `http://localhost:3020/miru/user/confirmation/${emailToken}`
                transporter.sendMail({...mailOptions(url), to: req.body.email})
                    .then(() => debug(`${chalk.green(`Email sent to: ${req.body.email}`)}`))
                    .catch(error => next(error))
            })
    } catch (error) {
        return next(error)
    }
    res.status(200).send(user)
}

const login = (User, debug) => async (req, res, next) => {
    let user, username, password
    let errors = { notConfirmed: false, username: false, password: false }
    try {
      user = await User.findByUsernameAndPassword(req.body)
      username = await User.findByUsername(req.body.username)
      password = await User.findByPassword(req.body.password)
      if (user && !user.confirmed) { errors.notConfirmed = true }
      if (!username.length) { errors.username = true }
      if (!password.length) { errors.password = true }
      if (errors.notConfirmed || errors.username || errors.password) {
        return res.status(500).jsonp(errors)
      }
    } catch (error) {
      return next(error)
    }
    res.status(200).send(user)
}

const confirmRegisteredUser = (User, debug) => async (req, res, next) => {
    try {
      const { id } = jwt.verify(req.params.token, EMAIL_SECRET)
      await User.updateUser({ id, confirmed: true })
      return res.redirect('http://localhost:3000/inicia-sesion')
    } catch (error) {
      return next(error)
    }
}

module.exports = {
    create,
    login,
    confirmRegisteredUser
}