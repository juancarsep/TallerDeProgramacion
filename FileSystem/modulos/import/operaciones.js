const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const mult = (a,b) => a * b;
const div = (a,b) => a / b;
const mod = (a,b) => a % b;

//Forma de EXPORTAR en ES MODULES
export default {
    suma,
    resta,
    mult,
    div,
    mod
}

//Tambien adelante de cada funcion se puede poner el export:
//  export const suma = (a,b) => a + b;
//y de igual manera serviria