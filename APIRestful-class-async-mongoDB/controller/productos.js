import servicio from '../service/productos.js'

class Controlador {

    constructor(){
        this.servicio = new servicio();
    }

    //si adelante de la declaracion del metodo ponemos '#' el metodo se vuelve privado
    obtenerProductos = async (req, res) => {
        const { id } = req.params
        const productos = await this.servicio.obtenerProductos(id)
        res.json(productos)
    }

    guardarProductos = async (req, res) => {
        const producto = req.body
        console.log(producto)
        const productoGuardado = await this.servicio.guardarProductos(producto)
        res.json(productoGuardado);
    }

    actualizarProductos = async (req, res) => {
        const { id } = req.params;
        const producto = req.body;

        const productoActualizado = await this.servicio.actualizarProductos(id, producto)
        res.json(productoActualizado)
    }

    borrarProductos = async (req, res) => {
        const { id } = req.params;
        const producto = req.body;
        const productoEliminado = await this.servicio.borrarProductos(id)
        res.json(productoEliminado)
    }
}




export default Controlador