'use strict'

const utils = require('miru-utils')
const db = require('./')
const debug = require('debug')('miru:db:setup')
const inquirer = require('inquirer')
const chalk = require('chalk')
const prompt = inquirer.createPromptModule()
const force = process.argv.filter(f => f === '--force')[0]
const logging = s => debug(s)
const handleFatalError = utils.request.handleFatalError
const config = utils.db.config(true, logging)

const question = {
    type: 'confirm',
    name: 'setup',
    message: `${chalk.yellow('Esto va a destruir la BBDD, ¿deseas continuar?')}`
}

const dbConfigSucces = () => {
    console.log('Success')
    process.exit(0)
}

const setup = async () => {
    if (!force) {
        const answer = await prompt([question])
        if (!answer.setup) {
            return console.log(`${chalk.blue('Ah bueno. Menos mal. Bichito ;).')}`)
        }
        console.log(`${chalk.blue('Espero que sepas lo que haces...')}`)
    }
    await db(config).then(dbConfigSucces).catch(handleFatalError)
}

setup()
