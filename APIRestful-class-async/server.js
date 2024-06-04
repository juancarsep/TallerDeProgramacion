import express from 'express';
import RouterProductos from './router/productos.js';
const app = express();
app.use(express.json())










app.use('/productos', new RouterProductos().start())
const PORT = 8080;
const server = app.listen(PORT, () => console.log(`Servidor ApiRestful escuchando en http://localhost:${PORT}`));
server.on('error', error => console.log(`Error en el servidor: ${error.message}`))