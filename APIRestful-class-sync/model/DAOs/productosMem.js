class ModelMem {
    #productos = []

    constructor() {
        this.#productos = [
            { id: 1, nombre: "TV", precio: 12342.43, stock: 55 },
            { id: 2, nombre: "Compu", precio: 1233.43, stock: 55 },
            { id: 3, nombre: "Auris", precio: 1235.43, stock: 55 },
            { id: 4, nombre: "Mouse", precio: 1236.43, stock: 55 },
            { id: 5, nombre: "Teclado", precio: 123.43, stock: 55 },
            { id: 6, nombre: "Joystick", precio: 1223.43, stock: 55 },
        ]
    }
    obtenerProductos = () => productos
    obtenerProducto = id => {
        const producto = this.#productos.find(p => p.id === id)
        return producto || {}
    }
    guardarProductos = () => { }
    actualizarProductos = () => { }
    borrarProductos = () => { }
}












export default ModelMem