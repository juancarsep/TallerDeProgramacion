const model = require('../model/productos')

const obtenerProductos = id => {
    if (id) {
        const producto =  model.obtenerProducto
        return producto || {} // ---> SHORT CIRCUIT OPERATOR
    } else {
        const productos = model.obtenerProductos
        return productos
    }
}


const guardarProductos = producto => {

    productos.push(producto);

    producto.id = productos[productos.length - 1]?.id + 1 || 0;

    return producto
}
const actualizarProductos = (id, producto) => {
    const index = productos.findIndex(producto => producto.id === id);
    if (index != -1) {
        //Lo que permite esto es que solo sea una actualizacion parcial del registro
        const prodcutoAnt = productos[index];
        const productoAct = { ...prodcutoAnt, ...producto }
        productos.splice(index, 1, productoAct);
        return productoAct;
    } else {
        return {};
    }
}
const borrarProductos = () => {
    const index = productos.findIndex(producto => producto.id === id);
    if (index != -1) {
        productos.splice(index, 1, producto);
    }

    return producto;

}

module.exports = {
    obtenerProductos,
    guardarProductos,
    actualizarProductos,
    borrarProductos
}