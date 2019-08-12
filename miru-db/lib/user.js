'use strict'

const { createUpdateSQLByFields } = require('miru-utils').db

const setupUserModel = (model, sql) => {
    const findById = async id => {
        try {
            const user = await sql.query(`
                SELECT * FROM users
                WHERE user_id = ${id}
            `,
            {
                type: sql.QueryTypes.SELECT,
                raw: true
            })
            return user[0]
        } catch (error) {
            throw error
        }
    }

    const findAll = () => model.findAll()

    const updateUser = async user => {
        const fields = { ...user }
        delete fields.user_id
        try {
            await sql.query(`
                UPDATE users
                ${createUpdateSQLByFields(fields)}
                WHERE user_id = ${user.user_id}
            `,
            {
                raw: true,
                type: sql.QueryTypes.UPDATE
            })

            const updated = await sql.query(`
                SELECT * FROM users
                WHERE user_id = ${user.user_id}
            `,
            {
                raw: true,
                type: sql.QueryTypes.SELECT
            })

            return updated[0]
        } catch (error) {
            throw error
        }
    }

    const createUser = async user => {
        try {
            await sql.query(`
                INSERT INTO users(user_name, user_lastname, user_username, user_birthdate, user_email, user_password)
                VALUES('${user.user_name}', '${user.user_lastname}', '${user.user_username}', '${user.user_birthdate}', '${user.user_email}', '${user.user_password}')
            `)
        } catch (error) {
            throw error
        }
    }

    const findByUsername = username => {
        const cond = { where: { user_username: username } }
        return model.findAll(cond)
    }

    const findByUsernameAndPassword = user => {
        const { username, password } = user
        const cond = { where: { user_username: username, user_password: password } }
        return model.findOne(cond)
    }

    const findByEmail = email => {
        const cond = { where: { user_email: email } }
        return model.findAll(cond)
    }

    const findByPassword = password => {
        const cond = { where: { user_password: password } }
        return model.findAll(cond)
    }

    return {
        findById,
        createUser,
        updateUser,
        findAll,
        findByUsername,
        findByUsernameAndPassword,
        findByEmail,
        findByPassword
    }
}

module.exports = setupUserModel
