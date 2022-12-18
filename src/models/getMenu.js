const connection = require('./connection');

function getMenu(id,callback) {
    connection.query('SELECT * FROM ofertas WHERE idOferta = ' + id, callback);
    // si tuviera que filtrar por otra cosa mas en vez de pasar actor_id = ? ;',id actor_id paso un array de valores []

}



module.exports=getMenu;