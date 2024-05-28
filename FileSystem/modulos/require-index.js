
//IMPORT en COMMON JS
const operaciones = require('./require/operaciones')
const suma = operaciones.suma;
const resta = operaciones.resta;
const mult = operaciones.mult;
const div = operaciones.div;
const mod = operaciones.mod;

//IMPORT con ES MODULES
import operaciones from './import/operaciones.js'

console.log("----------Inicio de los calculos----------");

console.log(suma(11,30));