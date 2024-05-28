const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;
const mod = (a, b) => a % b;


//Aca pasando las funciones de encima como parametro, me ahorro tener que hacer el switch teniendo un mejor desacople.
//La funcion recibe lo que tiene que hacer mediante un callback

function operacion(a, b, cb) {


    return cb(a,b)

    // switch (op) {
    //     case 'suma': return a + b;
    //     case 'resta' : return a - b;
    //     case 'mult' : return a * b;
    //     case 'div' : return a / b;
    //     default : return 'Operacion no definida';
    // }



}


const n1 = 6, n2 = 4;

console.log(operacion(n1, n2, suma));
console.log(operacion(n1, n2, resta));
console.log(operacion(n1, n2, mult));
console.log(operacion(n1, n2, div));
console.log(operacion(n1, n2, mod));