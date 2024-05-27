const operaciones = require('./require/operaciones')
const suma = operaciones.suma;
const resta = operaciones.resta;
const mult = operaciones.mult;
const div = operaciones.div;
const mod = operaciones.mod;

console.log("----------Inicio de los calculos----------");

console.log(suma(11,30));