import express from 'express';

const controladorRutaDefault = (req, res) => {
    const {url, method} = req
    res.status(404).send(`<h3 style="color:red;"> Error en la ruta ${method}: ${url}</h3>`)
}

//me devuelve la aplicacion de express.
const app = express();


app.use(express.urlencoded({extended: true}))
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

app.get('/datos/:nombre/:apellido', (req, res) =>{
    //tiene la decodificacion del formato que viaja por url
    const query = req.query;
    const params = req.params
    console.log(query)
    console.log(params)

    res.send('Datos Ok')
})

//esta ruta es para todas las que no están especificadas. (*)
app.get('*', controladorRutaDefault)



//
//              ENDPOINTS POST
//

app.post('/datos', (req, res) => {

    const body = req.body;


    res.send('Datos ok')
})

app.post('*', controladorRutaDefault)

//
//              ENDPOINTS PUT
//

app.put('*', controladorRutaDefault)

//
//              ENDPOINTS DELETE
//

app.delete('*', controladorRutaDefault)



const PORT = 8080;

//Pone en marcha el servidor
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en http://localhost:${PORT}`));
server.on('error', error => console.log(`Error en servidor: ${error.message}`))