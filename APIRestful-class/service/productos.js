import ModelFile from '../model/productosFile.js'

class Servicio {

    modelo = new ModelFile();

    obtenerProductos = id => {
        if (id) {
            const producto = this.modelo.obtenerProducto(id)
            return producto || {} // ---> SHORT CIRCUIT OPERATOR
        } else {
            const productos = this.modelo.obtenerProductos();
            return productos
        }
    }


    guardarProductos = producto => {

        this.modelo.guardarProductos(producto);

        console.log('Producto guardado con exito')

    }
    actualizarProductos = (id, producto) => {
        const index = this.modelo.obtenerProductos.findIndex(producto => producto.id === id);
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
    borrarProductos = () => {
        const index = productos.findIndex(producto => producto.id === id);
        if (index != -1) {
            productos.splice(index, 1, producto);
        }

        return producto
    }

}

export default Servicio