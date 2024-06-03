const express = require('express')
const controlador = require('../controller/productos')

//conjunto de rrutas bajo un nombre determinador
const router = express.Router()

//Agregandole un signo de pregunta al parametro hace que no sea obligatorio
router.get('/:id?', controlador.obtenerProductos)

//POST ENDPOINT
router.post('/', controlador.guardarProductos)

//PUT ENDPOINT
router.put(':id', controlador.actualizarProductos)

//DELETE ENDPOINT
router.delete('/:id', controlador.borrarProductos)

//exporto el router
module.exports = router