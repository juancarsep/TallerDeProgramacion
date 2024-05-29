const http = require('http');

//devuelve un objeto
const server = http.createServer((req, res) => {
    //respuesta que da el servidor
    res.writeHead(200, {'content-type' : 'text/html'})
    res.end('<h1>Hola soy el servidor HTTP</h1>')
});

//definimos el puerto
const PORT = 8080;

//pone el escucha el proceso del servidor
server.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`));
//se pone en marcha
server.on('error', error => console.log(`Error en servidor: ${error.message}`));
