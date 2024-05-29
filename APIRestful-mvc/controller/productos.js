const servicio = require('../service/productos')


const obtenerProductos = (req, res) => {
    const { id } = req.params
    const productos = servicio.obtenerProductos(id)
    res.json(productos)





}
const guardarProductos = (req, res) => {
    const producto = req.bodyconsole.log(producto)
    const productoGuardado = producto.guardarProductos(producto)
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


module.exports = {
    obtenerProductos,
    guardarProductos,
    actualizarProductos,
    borrarProductos
}