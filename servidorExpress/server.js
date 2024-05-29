import express from 'express';


//me devuelve la aplicacion de express.
const app = express();
//procesar peticiones de archivos, servicio de middleware
//public es la carpeta que tiene los recursos que se pueden solicitar
app.use(express.static('public'))

console.log('__dirname:', process.cwd()); // ---> sirve para common JS y ES Modules

//
//      ENDPOINTS GET
//


//este es el endpoint. GET es el metodo utilizado
app.get('/', (req, res) => {
    //send sirve para devolver al cliente un archivo
    //dirname es la direccion de donde se esta ejecutnado node --- SIRVE SOLO PARA COMMON JS

    // res.sendFile(__dirname +'public/index.html'); --- solo sirve para common JS
    res.sendFile(process.cwd() + '/public/index.html')
})

app.get('/', (req, res) => {
    res.send('<h1 style="color:green;"> Ruta raiz</h1>')
})

//esta ruta es para todas las que no están especificadas. (*)
app.get('*', (req, res) => {
    const {url, method} = req;
    res.send(`<h3 style="color:red;"> Error en la ruta GET: ${url}, no está implementada`)
})

//
//              ENDPOINTS POST
//

app.post('*', (req, res) => {
    const {url, method} = req;
    res.send(`<h3 style="color:red;"> Error en la ruta POST: ${url}, no está implementada`)
})

//
//              ENDPOINTS PUT
//

app.put('*', (req, res) => {
    const {url, method} = req;
    res.send(`<h3 style="color:red;"> Error en la ruta PUT: ${url}, no está implementada`)
})


//
//              ENDPOINTS DELETE
//

app.delete('*', (req, res) => {
    const {url, method} = req;
    res.send(`<h3 style="color:red;"> Error en la ruta DELETE: ${url}, no está implementada`)
})



const PORT = 8080;

//Pone en marcha el servidor
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en http://localhost:${PORT}`));
server.on('error', error => console.log(`Error en servidor: ${error.message}`))