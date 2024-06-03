import model from '../model/productosFile.js'

const obtenerProductos = id => {
    if (id) {
        const producto =  model.obtenerProducto(id)
        return producto || {} // ---> SHORT CIRCUIT OPERATOR
    } else {
        const productos = model.obtenerProductos();
        return productos
    }
}


const guardarProductos = producto => {

    model.guardarProductos(producto);

    console.log('Producto guardado con exito')

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

export default {
    obtenerProductos,
    guardarProductos,
    actualizarProductos,
    borrarProductos
}