import fs from 'fs';

class ModeloArchivo {
    #nombreArchivo = null;
    constructor() {
        this.#nombreArchivo = 'productos.json'
    }

    #leerArchivo = nombre => {
        let productos = [];
        try {
            productos = JSON.parse(fs.readFileSync(nombre, 'utf-8'));
        } catch { }

        return productos;
    }

    #escribirArchivo = (nombre, productos) => {
        fs.writeFileSync(nombre, JSON.stringify(productos, null, '\t')); // el tercer parametro de stringify hace que despues en el archivo json esten bien separados

    }

    obtenerProductos = () => {
        return this.#leerArchivo(this.#nombreArchivo)
    }

    obtenerProducto = id => {
        const productos = this.#leerArchivo(this.#nombreArchivo);
        const producto = productos.find(p => p.id === id);
        return producto || {}
    }

    guardarProductos = producto => {
        const productos = this.#leerArchivo(this.#nombreArchivo);
        const id = String(parseInt(productos[productos.length - 1]?.id || 0) + 1)
        const productoConId = { id, ...producto };
        productos.push(productoConId);
        this.#escribirArchivo(this.#nombreArchivo, productos);
        return productoConId;
    }

    actualizarProductos = (id, producto) => {

        const productos = this.#leerArchivo(this.#nombreArchivo);

        const index = productos.findIndex(producto => producto.id == id);
        if (index != -1) {
            const productoAnt = productos[index];
            const productoAct = { ...productoAnt, ...producto }
            productos.splice(index, 1, productoAct);
            this.#escribirArchivo(this.#nombreArchivo, productos)
            return productoAct
        } else {
            return {}
        }
    }

    borrarProductos = id => {
        const productos = this.#leerArchivo(this.#nombreArchivo);

        let producto = {}
        const index = productos.findIndex(producto => producto.id === id);
        if (index != -1) {
            producto = productos.splice(index, 1);
            this.#escribirArchivo(this.#nombreArchivo, productos)
        }

        return producto
    }

}



export default ModeloArchivo