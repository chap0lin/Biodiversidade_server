const knex = require('knex')
const path = require('path')
require('dotenv/config')

const connection = knex({
    client: 'mysql2',
    connection: {
        host : process.env.PG_HOST,
        user : process.env.PG_USER,
        password : process.env.PG_PASSWORD,
        database : process.env.PG_DATABASE,
    },
})

module.exports = connection;