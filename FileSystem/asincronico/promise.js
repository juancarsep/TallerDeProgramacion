console.log('Inicio del programa');

//
//      OPERACIONES ASINCRONICAS ANIDADAS USANDO CALLBACKS --- GENERA UN CALLBACK HELL
//


// const powAsyncCb = (a,b, cb) => {
//     setTimeout( () => cb(a ** b ), 2000)
// }


// powAsyncCb(2,2, res => {
//     console.log(res)
//     powAsyncCb(res,2, res => {
//         console.log(res)
//         powAsyncCb(res,2, res => {
//             console.log(res)
//             powAsyncCb(res,2, res => {
//                 console.log(res)
//                 powAsyncCb(res,2, res => {
//                     console.log(res)
//                     powAsyncCb(res,2, res => {
//                         console.log(res)
//                         powAsyncCb(res,2, res => {
//                             console.log(res)
//                         })
//                     })
//                 })
//             })
//         })
//     })
// });




//
//              operaciones asincronicas anidadas con PROMESAS
//

const powAsyncPromise = (a, b) => {

    return new Promise((resolve, reject) => {
        if (typeof a == 'number' && typeof b == 'number') {
            setTimeout(() => resolve(a ** b), 2000);
        } else {
            reject('Los parametros son incorrectos');
        }

    })


}

//el then es para capturar si se ejecuto el resolve, es decir, la promesa tuvo exito.

//
//  PROMESAS CON INTERFACE THEN / CATCH ES6
//

// powAsyncPromise(2, 2)
//     .then(res => {
//         console.log(res)
//         return powAsyncPromise(res, 2)
//     })
//     .then(res => {
//         console.log(res)
//         return powAsyncPromise(res, 2)
//     })
//     .then(res => {
//         console.log(res)
//         return powAsyncPromise(res, 2)
//     })
//     .then(res => {
//         console.log(res)
//         return powAsyncPromise(res, 2)
//     })
//     .then(res => {
//         console.log(res)
//         return powAsyncPromise(res, 2)
//     })
//     .catch(error => console.log(error))

//el catch es para manejar el caso de que se rechace la promesa, es decir se vaya por el reject


//se puede anidar y no se deforma el codigo, ademas si alguna de cualquiera de esas cadenas de then si falla, salta al catch.




//
//     PROMESAS CON ASYNC AWAIT
//

// async function calcular() {

//     try {
//         let res = await powAsyncPromise(2, 2);
//         console.log(res);

//         res = await powAsyncPromise(res, 2)
//         console.log(res);

//         res = await powAsyncPromise(res, 2)
//         console.log(res);

//         res = await powAsyncPromise(res, 2)
//         console.log(res);

//         res = await powAsyncPromise(res, 2)
//         console.log(res)
//     }catch (error){
//         console.log(error)
//     }
// }

//EL AWAIT SOLO SE PUEDE USAR DENTRO DE FUNCIONES ASYNC Y EL CATCH SE MANEJA MEDIANTE TRY CATCH

console.log('Otras operaciones');


//
//      METODOS ESTATICOS DE LAS PROMESAS
//

 //Devuelve una promesa cumplida.
// Promise.resolve(6).
// then(rta => rta * 2).
// then(rta => {
//     if(rta != 12) throw
//     return rta
// }).
// then(rta => console.log('rta', rta)).
// catch(error => console.log('error', error))

 //Devuelve siempre una promesa rota.
// Promise.reject('bad')



// ---------------- RACE, ALL ----------------

const retardo = (ms, mensaje) => new Promise((resolve, reject) => {
    let tipo = typeof ms;
    if(tipo == 'number'){
        setTimeout(() => resolve(mensaje), ms);
    }else{
        const error = {
            razon: 'Error en el tipo de dato en parametro ms: debe ser un numero',
            ms,
            tipo,
            mensaje
        }
        reject(error);
    }
    

})


const prtTime = mensaje => console.log(mensaje, new Date().toLocaleString())
prtTime('ini delay')
retardo(3000, 'delay 3000ms ok')
.then( rta => {
    console.log(rta)
    prtTime('fin delay')
})
.catch(error => {
    console.log(error)
    prtTime('Error Delay')
})



//necesita recibir un array de promesas
//de todos esas promesas, solo ejecuta el then la que termina primero, la que se cumple primero y activa el then.
Promise.race([
    retardo(4000, 'Delay 4000ms'),
    retardo(2000, 'Delay 2000ms'),
    retardo(7000, 'Delay 7000ms'),
    retardo(9000, 'Delay 9000ms'),
])
.then(rta => {
    console.log('Ganó: ', rta)
    prtTime('Fin de la carrera')
})
.catch(error => {
    console.log('Error', error)
    prtTime('Error en la carrera')
})


//--------- EL ALL ESPERA A QUE TODAS LAS PROMESAS DEL ARRAY SE CUMPLAN PARA PODER LLAMAR AL THEN


prtTime("Ini cumplimiento total")
Promise.all([
    retardo(4000, 'Delay 4000ms'),
    retardo(2000, 'Delay 2000ms'),
    retardo(7000, 'Delay 7000ms'),
    retardo(9000, 'Delay 9000ms'),
])
.then(rta => {
    console.log('Cumplimiento total', rta)
    prtTime('Fin de la carrera')
})
.catch(error => {
    console.log('Error', error)
    prtTime('Error cumplimiento total')
})


// ------------------ ES LO MISMO QUE ALL PERO DA UN MENSAJE MAS DETALLADO, 
// ------------------Y SI UNA PROMESA FALLA, NOTIFICA CUAL FALLO PERO SI ALGUNA CUMPLE, CUMPLE Y LLAMA AL THEN

prtTime("Ini cumplimiento total")
Promise.allSettled([
    retardo(4000, 'Delay 4000ms'),
    retardo(2000, 'Delay 2000ms'),
    retardo(7000, 'Delay 7000ms'),
    retardo(9000, 'Delay 9000ms'),
])
.then(rta => {
    console.log('Cumplimiento total', rta)
    prtTime('Fin de la carrera')
})
.catch(error => {
    console.log('Error', error)
    prtTime('Error cumplimiento total')
})