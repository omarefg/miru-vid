'use strict'

const extend = require('miru-utils').general.extend

const user = {
    id: 1,
    name: 'omar',
    lastname: 'flores',
    username: 'omarefg',
    birthday: new Date(),
    email: 'omarefg92@gmail.com',
    password: '12345',
    createdAt: new Date(),
    updatedAt: new Date()
}

const users = [
    user,
    extend(user, {
        id: 2,
        name: 'dulce',
        lastname: 'mercado',
        username: 'dulceamr',
        email: 'dulceamr@gmail.com',
        password: '54321'
    }),
    extend(user, {
        id: 3,
        name: 'enrique',
        lastname: 'grimontt',
        username: 'egrimontt',
        email: 'egrimontt@gmail.com',
        password: '159357'
    }),
    extend(user, {
        id: 4,
        name: 'angelina',
        lastname: 'ruiz',
        username: 'aruiz',
        email: 'aruiz@gmail.com',
        password: '357951'
    })
]

const findById = id => users.filter(user => user.id === id)[0]

const findByUsername = username => users.filter(user => user.username === username)[0]

const findByUsernameAndPassword = user => users.filter(u => u.username === user.username && u.password === user.password)[0]

const findByEmail = email => users.filter(user => user.email === email)

const findByPassword = password => users.filter(user => user.password === password)

module.exports = {
    single: user,
    all: users,
    findById,
    findByUsername,
    findByUsernameAndPassword,
    findByEmail,
    findByPassword
}
