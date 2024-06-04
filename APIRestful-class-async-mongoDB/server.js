import express from 'express';
import RouterProductos from './router/productos.js';
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended : true})) //los datos enviados por un form html viajan en url encoded no json



app.use(express.static('public')) //el servidor en su ruta raiz ofrece los elementos de public

//estos dos son lo mismo, es para devolver el idnex

//app.get('/', (req, res) => {
    //res.sendFile(process.cwd() + '/public/index.html')
//})








app.use('/productos', new RouterProductos().start())
const PORT = 8080;
const server = app.listen(PORT, () => console.log(`Servidor ApiRestful escuchando en http://localhost:${PORT}`));
server.on('error', error => console.log(`Error en el servidor: ${error.message}`))