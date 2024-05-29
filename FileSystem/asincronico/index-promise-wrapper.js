const fs = require('fs');

console.log("-----------> Inicio del programa");


//
//                  FUNCIONES WRAPPER FILE SYSTEM
//

function readFilePromise() {
    return new Promise((resolve, reject) => {
        s.readFile('./textoo.txt', 'utf-8', (error, data) => {
            if (error) reject(error)
            else resolve(data)
        })
    })
}

function writeFilePromise(file, datos) {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, datos, error => {
            if (error) reject(error)
            else resolve()
        })
    })
}





async function readWriteFsASync() {

    try {


        //Para que sea asincronico y no pierda el orden con CALLBACKS, se debe anidar pero causa el CALLBACK HELL !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


        //Leer archivo de forma sincronica
        let datos = await readFilePromise('./textoo.txt')
        console.log('rd antes', datos);


        await writeFilePromise('./textoo.txt', new Date().toLocaleString())

        datos = await readFilePromise('./textoo.txt')
        console.log('rd despues', datos)

    }
    catch (error) {
        console.log("Error al leer/escribir archivo: ");
    }

    console.log("----------> Fin del programa")
}

readWriteFsASync();

console.log('-----------> Otras tareas ...');

