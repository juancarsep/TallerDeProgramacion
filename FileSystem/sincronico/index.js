const fs = require('fs');

console.log("-----------> Inicio del programa");

function readWriteFsSync() {

    try {



        //Leer archivo de forma sincronica
        let datos = fs.readFileSync('../text.txt', 'utf-8');
        console.log(datos);

        //Escribir archivo de forma sincronica
        fs.writeFileSync('../text.txt', new Date().toLocaleString());
        console.log('Write OK');

        //Volver a mostrar el archivo
        datos = fs.readFileSync('../text.txt', 'utf-8');
        console.log(datos);

    }catch(error){
        console.log("Error al leer/escribir archivo: ");
    }
}

readWriteFsSync();

console.log('-----------> Otras tareas ...');

