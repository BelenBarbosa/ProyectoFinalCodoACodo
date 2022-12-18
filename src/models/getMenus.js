const connection = require('./connection');

function getMenus(callback) {
    connection.query('SELECT * FROM ofertas;', callback);


}

module.exports=getMenus;