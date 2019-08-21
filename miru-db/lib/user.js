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
            return user
        } catch (error) {
            throw error
        }
    }

    const findAll = async () => {
        try {
            const users = await sql.query(`
                SELECT * FROM users
            `,
            {
                type: sql.QueryTypes.SELECT,
                raw: true
            })
            return users
        } catch (error) {
            throw error
        }
    }

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

            return updated
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

    const findByUsername = async username => {
        try {
            const user = await sql.query(`
                SELECT * FROM users
                WHERE user_username = '${username}'
            `,
            {
                type: sql.QueryTypes.SELECT,
                raw: true
            })
            return user
        } catch (error) {
            throw error
        }
    }

    const findByUsernameAndPassword = async user => {
        const { username, password } = user
        try {
            const user = await sql.query(`
                SELECT * FROM users
                WHERE user_username = '${username}'
                AND user_password = '${password}'
            `,
            {
                type: sql.QueryTypes.SELECT,
                raw: true
            })
            return user
        } catch (error) {
            throw error
        }
    }

    const findByEmail = async email => {
        try {
            const user = await sql.query(`
                SELECT * FROM users
                WHERE user_email = '${email}'
            `,
            {
                type: sql.QueryTypes.SELECT,
                raw: true
            })
            return user
        } catch (error) {
            throw error
        }
    }

    const findByPassword = async password => {
        try {
            const user = await sql.query(`
                SELECT * FROM users
                WHERE user_password = '${password}'
            `,
            {
                type: sql.QueryTypes.SELECT,
                raw: true
            })
            return user
        } catch (error) {
            throw error
        }
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
