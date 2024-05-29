//importo el router
const router = require('./router/productos')

//
//      API RESTful de productos
//




const express = require('express');

const app = express();
app.use(express.json())



app.use('/productos', router)
const PORT = 8080;
const server = app.listen(PORT, () => console.log(`Servidor ApiRestful escuchando en http://localhost:${PORT}`));
server.on('error', error => console.log(`Error en el servidor: ${error.message}`))