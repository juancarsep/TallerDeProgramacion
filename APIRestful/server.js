//
//      API RESTful de productos
//

const productos = [
    { id: 1, nombre: "TV", precio: 12342.43, stock: 55 },
    { id: 2, nombre: "Compu", precio: 1233.43, stock: 55 },
    { id: 3, nombre: "Auris", precio: 1235.43, stock: 55 },
    { id: 4, nombre: "Mouse", precio: 1236.43, stock: 55 },
    { id: 5, nombre: "Teclado", precio: 123.43, stock: 55 },
    { id: 6, nombre: "Joystick", precio: 1223.43, stock: 55 },
]


const express = require('express');

const app = express();



//GET ENDPOINT
// app.get('/productos', (req, res) => {
//     res.json({productos})
// })


//Agregandole un signo de pregunta al parametro hace que no sea obligatorio
app.get('/productos/:id?', (req, res) => {
    const { id } = req.params

    if (id) {
        const producto = productos.find(producto => producto.id = id)
        res.json(producto || {}) // ---> SHORT CIRCUIT OPERATOR
    } else {
        res.json(productos)
    }

    //esta modificacion permite que si no se pasa id, no da error y devuelve todos los registros, si se pasa id devuelv el registro
    //con la id solicitada o devulve vacio


})




//POST ENDPOINT
app.post('/productos', (req, res) => {
    const producto = req.bodyconsole.log(producto)
    productos.push(producto);
    //le agregamos el id ya que no lo pasamos desde la solicitud
    producto.id = productos[productos.length - 1]?.id + 1 || 0;
    // optional chaning es agregar un signo de pregunta, si no esta definido, devuelve un indefinido
    // y si si esta definido, devuelve lo que tiene que devolver

    res.json(producto);
})




//PUT ENDPOINT
app.put('/productos/:id', (req, res) => {
    const { id } = req.params;
    const producto = req.body;

    const index = productos.findIndex(producto => producto.id === id);
    if (index != -1) {
        //Lo que permite esto es que solo sea una actualizacion parcial del registro
        const prodcutoAnt = productos[index];
        const productoAct = {...prodcutoAnt, ...producto}
        productos.splice(index, 1, productoAct);
        res.json(productoAct);
    } else {
        res.json({});
    }    
})





//DELETE ENDPOINT
app.delete('/productos/:id', (req, res) => {
    const { id } = req.params;
    const producto = req.body;

    const index = productos.findIndex(producto => producto.id === id);
    if (index != -1) {        
        productos.splice(index, 1, producto);
    }

    res.json(producto);

})



const PORT = 8080;
const server = app.listen(PORT, () => console.log(`Servidor ApiRestful escuchando en http://localhost:${PORT}`));
server.on('error', error => console.log(`Error en el servidor: ${error.message}`))