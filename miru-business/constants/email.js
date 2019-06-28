'use strict'

const mailOptions = url => ({
    from: 'omarefg@hotmail.com',
    subject: 'Confirmación de correo para Miru',
    html: `
    <h1>Confirmación de correo para Miru</h1>
    <p>¡Hola! Soy Omar, el creador de Miru.</p>
    <p>Nos encanta que seas parte de esta comunidad.</p>
    <p>Solo falta confirmar tu correo.</p>
    <p>Hazlo ingresando en el siguiente <a href="${url}">enlace</a> por favor.</p>
    `
})

module.exports = {
    mailOptions
}
