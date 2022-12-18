const express = require('express');

const router = express.Router();

const path = require('path');
/*
router.get('/',(req,res)=> {
    res.send('Hola Mundo!');
});
*/
//El metodo render, la app va a ir a buscar la configuracion inicial entonces ve que las vistas estan ahi, y tiene que renderizar de esas vistas que se llama index 
router.get('/', (req,res) => {
    res.render('index', {
        title: 'Home | Crystal',
        style: 'index',
   
    }); 
})

router.get('/conocenos', (req,res) => {
    res.render('conocenos', {
        title: 'Home | Crystal',
        style: 'index',
   
    }); 
})





/*
router.get('/nosotros',(req,res)=> {
    //res.send(__dirname+'../public/nosotros.html'); al usar path:
    res.sendFile(path.join(__dirname, '../../public/nosotros.html'))
});
*/
//Lo estoy devolviendo como respuesta a la peticion, a un archivo"estatico".


//A la ruta nosotros le vamos a decir que nos conteste con esto

module.exports = router;

//Nuestras rutas se guardan aca dentro,  esto lo exportamos y despues lo leemos desde app.