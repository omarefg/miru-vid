'use strict'

const setupSectionModel = (model, sql) => {
    const findById = async id => {
        try {
            const section = await sql.query(`
                SELECT * FROM sections
                WHERE section_id = ${id}
            `,
            {
                type: sql.QueryTypes.SELECT,
                raw: true
            })
            return section
        } catch (error) {
            throw error
        }
    }

    const findAll = async () => {
        try {
            const sections = await sql.query(`
                SELECT * FROM sections
            `,
            {
                type: sql.QueryTypes.SELECT,
                raw: true
            })
            return sections
        } catch (error) {
            throw error
        }
    }

    return {
        findById,
        findAll
    }
}

module.exports = setupSectionModel
