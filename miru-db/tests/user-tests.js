'use strict'

const test = require('ava')
const proxyquire = require('proxyquire')
const sinon = require('sinon')
const userFixtures = require('./fixtures/user')

let config = { loggin: function () {} }

let single = {...userFixtures.single}
let id = 1
let UserStub = {}
let db = null
let sandbox = null
let idArgs = { where: { id: '1' } }
let username = 'omarefg'
let usernameArgs = { where: { username } }
let usernameAndPasswordArgs = { where: { username, password: '12345' } }

let newUser = {
    name: 'omar',
    lastname: 'flores',
    username: 'omarefg',
    birthday: new Date(),
    email: 'omarefg92@gmail.com',
    password: '12345'
}

test.beforeEach(async () => {
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

  UserStub.findByUsername = sandbox.stub()
  UserStub.findByUsername.withArgs(username).returns(Promise.resolve(userFixtures.findByUsername(username)))

  UserStub.findByUsernameAndPassword = sandbox.stub()
  UserStub.findByUsernameAndPassword.withArgs(single).returns(Promise.resolve(userFixtures.findByUsernameAndPassword(single)))

  const setupDatabase = proxyquire('../', { './models/user': () => UserStub })
  db = await setupDatabase(config)
})

test.afterEach(() => sandbox && sinon.restore())

test('User', t => t.truthy(db.User, 'User service should exist'))

test.serial('User#findById', async t => {
  let user = await db.User.findById(id)
  t.true(UserStub.findById.called, 'findById should be called on model')
  t.true(UserStub.findById.calledOnce, 'findById should be called once')
  t.true(UserStub.findById.calledWith(id), 'findById should be called with id')
  t.deepEqual(user, userFixtures.findById(id), 'should be the same')
})

test.serial('User#update', async t => {
  let user = await db.User.updateUser(single)
  t.true(UserStub.findById.called, 'findById should be called on model')
  t.true(UserStub.update.calledOnce, 'update should be called once')
  t.deepEqual(user, single, 'should be the same')
})

test.serial('User#create', async t => {
  let user = await db.User.createUser(newUser)
  t.true(UserStub.create.calledOnce, 'create should be called once')
  t.deepEqual(user, single, 'should be the same')
})

test.serial('User#findAll', async t => {
  let users = await db.User.findAll()
  t.true(UserStub.findAll.calledOnce, 'findAll should be called once')
  t.deepEqual(users, userFixtures.all, 'should be the same')
})

test.serial('User#findByUsername', async t => {
  let user = await db.User.findByUsername(username)
  t.true(UserStub.findAll.calledOnce, 'findAll should be called once')
  t.deepEqual(user, userFixtures.findByUsername(username), 'should be the same')
})

test.serial('User#findByUsernameAndPassword', async t => {
  let user = await db.User.findByUsernameAndPassword(single)
  t.true(UserStub.findOne.calledOnce, 'findOne should be called once')
  t.deepEqual(user, userFixtures.findByUsernameAndPassword(single), 'should be the same')
})