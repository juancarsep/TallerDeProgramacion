import servicio from '../service/productos.js'

class Controlador {

    constructor(){
        this.servicio = new servicio();
    }

    //si adelante de la declaracion del metodo ponemos '#' el metodo se vuelve privado
    obtenerProductos = (req, res) => {
        const { id } = req.params
        const productos = this.servicio.obtenerProductos(id)
        res.json(productos)
    }

    guardarProductos = (req, res) => {
        const producto = req.body
        console.log(producto)
        const productoGuardado = this.servicio.guardarProductos(producto)
        res.json(productoGuardado);
    }

    actualizarProductos = (req, res) => {
        const { id } = req.params;
        const producto = req.body;

        const productoActualizado = this.servicio.actualizarProductos(id, producto)
        res.json(productoActualizado)
    }

    borrarProductos = (req, res) => {
        const { id } = req.params;
        const producto = req.body;
        const productoEliminado = this.servicio.borrarProductos(id)
        res.json(productoEliminado)
    }
}




export default Controlador