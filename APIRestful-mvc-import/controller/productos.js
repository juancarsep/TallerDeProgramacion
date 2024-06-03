import servicio from '../service/productos.js'


const obtenerProductos = (req, res) => {
    const { id } = req.params
    const productos = servicio.obtenerProductos(id)
    res.json(productos)
}

const guardarProductos = (req, res) => {
    const producto = req.body
    console.log(producto)
    const productoGuardado = servicio.guardarProductos(producto)
    res.json(productoGuardado);
}

const actualizarProductos = (req, res) => {
    const { id } = req.params;
    const producto = req.body;

    const productoActualizado = servicio.actualizarProductos(id, producto)
    res.json(productoActualizado)
}

const borrarProductos = (req, res) => {
    const { id } = req.params;
    const producto = req.body;
    const productoEliminado = servicio.borrarProductos(id)
    res.json(productoEliminado)    
}


export default {
    obtenerProductos,
    guardarProductos,
    actualizarProductos,
    borrarProductos
}