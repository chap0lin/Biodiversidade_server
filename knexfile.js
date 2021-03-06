const path =  require('path')
require('dotenv/config')

module.exports = {
    client: 'pg',
    connection: {
        host: process.env.PG_HOST,
        user : process.env.PG_USER,
        password : process.env.PG_PASSWORD,
        database : process.env.PG_DATABASE,
    },
    migrations: {
        directory: path.resolve(__dirname, 'server', 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'server', 'database', 'seeds')
    },
    useNullAsDefault: true,
}