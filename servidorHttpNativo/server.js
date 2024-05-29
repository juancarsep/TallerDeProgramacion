const http = require('http');
const fs = require('fs');

//devuelve un objeto
const server = http.createServer(async (req, res) => {
    //respuesta que da el servidor
    const url = req.url;
    const method = req.method;

    if (method == 'GET') {
        //devolvemos una pagina local cuando la ruta solicitada es la raiz
        if (url == '/') {
            const index = 'public/index.html'

            try {
                res.writeHead(200, { 'content-type': 'text/html' })
                const page = await fs.promises.readFile(index);
                res.end(page)
            }catch(error){
                res.writeHead(404, { 'content-type': 'text/html' })
                res.end('NO SE ENCONTRO LA PAGINA RAIZ')
            }
            
            
        }
        else if (url == '/mensaje') {
            res.writeHead(200, { 'content-type': 'text/html' })
            res.end('<h1>Hola soy el servidor HTTP</h1>')
        } else if (url == '/time') {
            res.writeHead(200, { 'content-type': 'text/html' })
            res.end(`<h1>La fecha y horas actuales son: ${new Date().toLocaleString()} </h1>`)
        }

        else {
            res.writeHead(404, { 'content-type': 'text/html' })
            res.end(`<h3 style="color:red;">ERROR, en la ruta ${url} no existe</h3>`)
        }
    } else {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.end(`<h3 style="color:red;">ERROR, el metodo ${method} no existe</h3>`)
    }

});

//definimos el puerto
const PORT = 8080;

//pone el escucha el proceso del servidor
server.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`));
//se pone en marcha
server.on('error', error => console.log(`Error en servidor: ${error.message}`));
