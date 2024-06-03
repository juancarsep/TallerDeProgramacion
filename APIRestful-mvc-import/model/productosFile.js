import fs from 'fs';

const nombreArchivo = "productos.json"

const leerArchivo = nombre => {
    let productos = [];
    try {
        productos = JSON.parse(fs.readFileSync(nombre, 'utf-8'));
    } catch { }

    return productos;
}

const escribirArchivo = (nombre, productos) => {
    fs.writeFileSync(nombre, JSON.stringify(productos, null, '\t')); // el tercer parametro de stringify hace que despues en el archivo json esten bien separados

}

const obtenerProductos = () => {
    return leerArchivo(nombreArchivo)
}

const obtenerProducto = id => {
    const productos = leerArchivo(nombreArchivo);
    const producto = productos.find(p => p.id === id);
    return producto || {}
}

const guardarProductos = producto => {
    const productos = leerArchivo(nombreArchivo);
    const id = String(parseInt(productos[productos.length - 1]?.id || 0) + 1)
    const productoConId = { id, ...producto };
    productos.push(productoConId);
    escribirArchivo(nombreArchivo, productos);
    return productoConId;
}

const actualizarProductos = (id, producto) => {

    const productos = leerArchivo(nombreArchivo);

    const index = productos.findIndex(producto => producto.id == id);
    if (index != -1) {
        const productoAnt = productos[index];
        const productoAct = { ...productoAnt, ...producto }
        productos.splice(index, 1, productoAct);
        escribirArchivo(nombreArchivo, productos)
        return productoAct
    } else {
        return {}
    }
}

const borrarProductos = id => {
    const productos = leerArchivo(nombreArchivo);

    let producto = {}
    const index = productos.findIndex(producto => producto.id === id);
    if(index != -1){
        producto = productos.splice(index, 1);
        escribirArchivo(nombreArchivo,productos)
    }

    return producto
}


export default {
    obtenerProductos,
    obtenerProducto,
    guardarProductos,
    actualizarProductos,
    borrarProductos
}