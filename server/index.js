const express = require('express');
const morgan = require ('morgan'); 
const app = express();

const { mongoose } = require('./databese');

//Configuración del puerto 
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan ('dev')); 
app.use(express.json());


//Routes
app.use('/feed', require('./routers/feed'));

//Inicia el servidor
app.listen( app.set('port'), () => {
  console.log('El servidor se escucha en el puerto', app.set('port'));
});