const getMenus = require('../models/getMenus');
const getMenu = require('../models/getMenu');

module.exports = {
    all: (req,res) => {
 
    getMenus((err, results,fields) => {
        //res.json(results);

      
        res.render('servicios', {
            title: 'Nuestro Menu',
            style: 'index',
            results
        });
        });
    },

    one: (req,res) => {
 
        
        const id =req.params.id;
        getMenu(id,(err,results,fields)  => {
        //res.json(results);
             res.render('servicio', {
                title: 'Animate a probar nuevos sabores',
                style: 'index',
                char: results[0]
            })
         });
        
    }
}

