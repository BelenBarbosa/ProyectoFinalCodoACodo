//ENCARGADO DE PROCESAR TODAS LAS PETICIONES/SOLICITUDES DEL CLIENTE

const express = require('express');

const app = express();

const path = require('path')

const mainRoutes = require('./src/routes/mainRoutes')

const adminRoutes = require('./src/routes/adminRoutes');


const PORT = 3000;


/* ARCHIVOS ESTATICOS*/ 
app.use(express.static('public'));

/* VIEW ENGINE*/

app.set('view engine', 'ejs');

app.set('views', __dirname + '/src/views');


app.use('/', mainRoutes); 

app.use('/api', adminRoutes)


app.use((req,res) => {
    res.status(404).send('Lo sentimos, pagina no encontrada')
})



app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT} `));