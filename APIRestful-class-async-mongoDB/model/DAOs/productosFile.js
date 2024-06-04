import fs from 'fs';

class ModeloArchivo {
    #nombreArchivo = null;
    constructor() {
        this.#nombreArchivo = 'productos.json'
    }

    #leerArchivo = async nombre => {
        let productos = [];
        try {
            productos = JSON.parse(await fs.promises.readFile(nombre, 'utf-8'));
        } catch { }

        return productos;
    }

    #escribirArchivo = async (nombre, productos) => {
        await fs.promises.writeFile(nombre, JSON.stringify(productos, null, '\t')); // el tercer parametro de stringify hace que despues en el archivo json esten bien separados

    }

    obtenerProductos = async () => {
        return await this.#leerArchivo(this.#nombreArchivo)
    }

    obtenerProducto = async id => {
        const productos = await this.#leerArchivo(this.#nombreArchivo);
        const producto = productos.find(p => p.id === id);
        return producto || {}
    }

    guardarProductos = async producto => {
        const productos = await this.#leerArchivo(this.#nombreArchivo);
        const id = String(parseInt(productos[productos.length - 1]?.id || 0) + 1)
        const productoConId = { id, ...producto };
        productos.push(productoConId);
        this.#escribirArchivo(this.#nombreArchivo, productos);
        return productoConId;
    }

    actualizarProductos = async (id, producto) => {

        const productos = await this.#leerArchivo(this.#nombreArchivo);

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

    borrarProductos = async id => {
        const productos = await this.#leerArchivo(this.#nombreArchivo);

        let producto = {}
        const index = productos.findIndex(producto => producto.id === id);
        if (index != -1) {
            producto = productos.splice(index, 1);
            await this.#escribirArchivo(this.#nombreArchivo, productos)
        }

        return producto
    }

}



export default ModeloArchivo