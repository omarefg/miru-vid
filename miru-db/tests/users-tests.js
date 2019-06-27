'use strict'

const ava = require('ava')
const proxyquire = require('proxyquire')
const sinon = require('sinon')
const userFixtures = require('./fixtures/user')

let config = { loggin: () => {} }
let single = { ...userFixtures.single }
let id = 1
let username = 'omarefg'
let password = '12345'
let email = 'omarefg92@gmail.com'
let UserStub = {}
let db = null
let sandbox = null
let idArgs = { where: { id } }
let usernameArgs = { where: { username } }
let usernameAndPasswordArgs = { where: { username, password } }
let mailArgs = { where: { email } }
let passArgs = { where: { password } }
let newUser = {
    name: 'omar',
    lastname: 'flores',
    username,
    birthday: new Date(),
    email,
    password
}

const beforeFunction = async () => {
    sandbox = sinon.createSandbox()

    UserStub.findById = sandbox.stub()
    UserStub.findById.withArgs(id).returns(Promise.resolve(userFixtures.findById(id)))

    UserStub.findOne = sandbox.stub()
    UserStub.findOne.withArgs(idArgs).returns(Promise.resolve(userFixtures.findById(id)))
    UserStub.findOne.withArgs(usernameAndPasswordArgs).returns(Promise.resolve(userFixtures.findByUsernameAndPassword(single)))

    UserStub.update = sandbox.stub()
    UserStub.update.withArgs(single, idArgs).returns(Promise.resolve(single))

    UserStub.create = sandbox.stub()
    UserStub.create.withArgs(newUser).returns(Promise.resolve({ toJSON () { return single } }))

    UserStub.findAll = sandbox.stub()
    UserStub.findAll.withArgs().returns(Promise.resolve(userFixtures.all))
    UserStub.findAll.withArgs(usernameArgs).returns(Promise.resolve(userFixtures.findByUsername(username)))
    UserStub.findAll.withArgs(mailArgs).returns(Promise.resolve(userFixtures.findByEmail(single.email)))
    UserStub.findAll.withArgs(passArgs).returns(Promise.resolve(userFixtures.findByPassword(single.password)))

    const setupDatabase = proxyquire('../', { './models/user': () => UserStub })
    db = await setupDatabase(config)
}

ava.beforeEach(beforeFunction)

ava.afterEach(() => sandbox && sinon.restore())

ava.serial('User', test => test.truthy(db.User, 'User service should exist'))

ava.serial('User#findById', async test => {
    const user = await db.User.findById(id)
    test.true(UserStub.findById.called, 'findById should be called on model')
    test.true(UserStub.findById.calledOnce, 'findById should be called once')
    test.true(UserStub.findById.calledWith(id), 'findById should be called with id')
    test.deepEqual(user, userFixtures.findById(id), 'should be the same')
})

ava.serial('User#update', async test => {
    const user = await db.User.updateUser(single)
    test.true(UserStub.findById.called, 'findById should be called on model')
    test.true(UserStub.findById.calledTwice, 'findById should be called twice on model')
    test.true(UserStub.update.called, 'update should be called')
    test.true(UserStub.update.calledOnce, 'update should be called once')
    test.deepEqual(user, single, 'should be the same')
})

ava.serial('User#create', async test => {
    const user = await db.User.createUser(newUser)
    test.true(UserStub.create.called, 'create should be called')
    test.true(UserStub.create.calledOnce, 'create should be called once')
    test.true(UserStub.create.calledWith(newUser), 'findById should be called with user argument')
    test.deepEqual(user, single, 'should be the same')
})

ava.serial('User#findAll', async test => {
    const users = await db.User.findAll()
    test.true(UserStub.findAll.called, 'findAll should be called')
    test.true(UserStub.findAll.calledOnce, 'findAll should be called once')
    test.deepEqual(users, userFixtures.all, 'should be the same')
})

ava.serial('User#findByUsername', async test => {
    const user = await db.User.findByUsername(username)
    test.true(UserStub.findAll.called, 'findAll should be called')
    test.true(UserStub.findAll.calledOnce, 'findAll should be called once')
    test.true(UserStub.findAll.calledWith(usernameArgs), 'findAll should be called with args')
    test.deepEqual(user, userFixtures.findByUsername(username), 'should be the same')
})

ava.serial('User#findByUsernameAndPassword', async test => {
    const user = await db.User.findByUsernameAndPassword(single)
    test.true(UserStub.findOne.called, 'findOne should be called')
    test.true(UserStub.findOne.calledOnce, 'findOne should be called once')
    test.true(UserStub.findOne.calledWith(usernameAndPasswordArgs), 'findOne should be called with args')
    test.deepEqual(user, userFixtures.findByUsernameAndPassword(single), 'should be the same')
})

ava.serial('User#findByEmail', async test => {
    const user = await db.User.findByEmail(single.email)
    test.true(UserStub.findAll.called, 'findAll should be called')
    test.true(UserStub.findAll.calledOnce, 'findAll should be called once')
    test.true(UserStub.findAll.calledWith(mailArgs), 'findAll should be called with args')
    test.deepEqual(user, userFixtures.findByEmail(single.email), 'should be the same')
})

ava.serial('User#findByPassword', async test => {
    const user = await db.User.findByPassword(single.password)
    test.true(UserStub.findAll.called, 'findAll should be called')
    test.true(UserStub.findAll.calledOnce, 'findAll should be called once')
    test.true(UserStub.findAll.calledWith(passArgs), 'findAll should be called with args')
    test.deepEqual(user, userFixtures.findByPassword(single.password), 'should be the same')
})
