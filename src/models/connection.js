const mysql = require('mysql');
require('dotenv').config();



const connection = mysql.createConnection({

host: process.env.HOST,
user: process.env.USER,
password: process.env.PASSWORD,
database: process.env.DATABASE
})

connection.connect( (err) => err ? console.log(err) : console.log('Conexion exitosa'));

/*
connection.connect((err)=> {
    if (err) {
        console.log(err);
    } else {
        console.log('Conexion Exitosa');
    }
});
*/

module.exports = connection;