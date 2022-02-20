//Cobfiguración de las librerías que utilizaremos
const express = require('express');
const hbs = require('hbs');
const path = require('path');
const dotenv = require('dotenv');
const app = express();
const PORT = process.env.PORT || 3000;


//Configuración de los Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

//Configuración del Motor de Plantillas
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));

//Configurar las Rutas de mi aplicación
app.use('/api/message', require('./routers/productos'));
//app.use('/api/clientes', require('./routes/clientes'));

app.get('/', (req, res) => {
    res.render('index', { titulo: 'Proyecto Programacion 2021' });
});

//Configuramos el puerto del Servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

app.on('error', (err) => {
    console.log(`Servidor corriendo en el puerto ${err}`);
});





