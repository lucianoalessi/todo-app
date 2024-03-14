require('dotenv').config()
console.log(process.env.USERNAMEDB) 

const Pool = require('pg').Pool

const pool = new Pool({
    user: process.env.USERNAMEDB,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.DBPORT,
    database: 'todoapp'
})

module.exports = pool