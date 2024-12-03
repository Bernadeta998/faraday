const mysql =  require('mysql2/promise')
require("dotenv").config();

async function createDBConnection(databaseName){
    const connection = await mysql.createConnection({
        host: process.env.DBHOST,
        port: process.env.DBPORT,
        user: process.env.DBUSER,
        password: process.env.DBPASSWORD,
        database: databaseName,
    });

    return connection;
}

module.exports = {
    createDBConnection,
};