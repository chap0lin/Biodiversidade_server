const knex = require('knex')
const path = require('path')
require('dotenv/config')

const connection = knex({
    client: 'pg',
    connection: {
        host : process.env.PG_HOST,
        user : process.env.PG_USER,
        password : process.env.PG_PASSWORD,
        database : process.env.PG_DATABASE,
    },
    useNullAsDefault: true,
})

module.exports = connection;