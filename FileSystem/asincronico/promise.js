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

async function calcular() {

    try {
        let res = await powAsyncPromise(2, 2);
        console.log(res);

        res = await powAsyncPromise(res, 2)
        console.log(res);

        res = await powAsyncPromise(res, 2)
        console.log(res);

        res = await powAsyncPromise(res, 2)
        console.log(res);

        res = await powAsyncPromise(res, 2)
        console.log(res)
    }catch (error){
        console.log(error)
    }
}

//EL AWAIT SOLO SE PUEDE USAR DENTRO DE FUNCIONES ASYNC Y EL CATCH SE MANEJA MEDIANTE TRY CATCH

console.log('Otras operaciones');