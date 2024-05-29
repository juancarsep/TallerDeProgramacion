const fs = require('fs');

console.log("-----------> Inicio del programa");

function readWriteFsASync() {

    try {


        //Para que sea asincronico y no pierda el orden con CALLBACKS, se debe anidar pero causa el CALLBACK HELL !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


        //Leer archivo de forma sincronica
        fs.readFile('./textoo.txt', 'utf-8', (error, data) => {
            if (error) {
                console.log(`Error al leer el archivo: ${error.message} `)
            } else {
                console.log(`lectura OK rd ANTES: ${data}`)
            }


            //Escribir archivo de forma sincronica
            fs.writeFile('./textoo.txt', new Date().toLocaleString(), error => {
                if (error) throw Error(`Error en escritura asincronica: ${error.message}`)
                console.log('Write OK');


                //Volver a mostrar el archivo
                fs.readFile('./textoo.txt', 'utf-8', (error, data) => {
                    if (error) {
                        console.log(`Error al leer el archivo: ${error.message} `)
                    } else {
                        console.log(`lectura OK rd DESPUES: ${data}`)
                    }
                });
            });
        });










    } catch (error) {
        console.log("Error al leer/escribir archivo: ");
    }

    console.log("----------> Fin del programa")
}

readWriteFsASync();

console.log('-----------> Otras tareas ...');

