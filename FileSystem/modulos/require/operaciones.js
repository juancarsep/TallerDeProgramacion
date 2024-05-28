const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const mult = (a,b) => a * b;
const div = (a,b) => a / b;
const mod = (a,b) => a % b;

//Forma de EXPORTAR en COMMON JS
module.exports = {
    suma : suma,
    resta : resta,
    mult : mult,
    div : div,
    mod : mod
}