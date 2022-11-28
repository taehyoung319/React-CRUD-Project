require("dotenv").config();
const mysql = require("mysql2/promise");

const config = {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
};

const pool = mysql.createPool(config);

module.exports = pool;