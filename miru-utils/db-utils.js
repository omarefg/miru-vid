'use strict'

module.exports = {
    config: (setup, logging) => ({
        database: process.env.DB_NAME || 'miru',
        username: process.env.DB_USER || 'omarefg',
        password: process.env.DB_PASS || '20350273',
        host: process.env.DB_HOST || 'localhost',
        dialect: 'mysql',
        logging,
        setup
    }),
    dbConfig: {
        dialect: 'mysql',
        pool: {
            max: 10,
            min: 0,
            idle: 10000
        },
        query: {
            raw: true
        }
    }
}
