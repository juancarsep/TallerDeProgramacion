///Clases en ES6

class Timer {

    //va sin let ni var ni nada, solo se declara la propiedad.
    contador = 0;

    //constructor de la clase
    constructor(timer) {
        this.contador = timer;
    }

    //metodos de una clase
    getContador() {
        return this.contador;
    }

    //el this dentro de las funciones es dinamico y depende del contexto
    //that permite almacenar la direccion que apunta el this antes de que cambie el contexto
    setTimer(ms) {
        var that = this;
        setInterval(function () {
            console.log((that))
            console.log(++that.contador);
        }, ms)
    }

    //tambien se puede hacer con bind para determinador el contexto que debe utilizar
    setTimer2(ms){
        setInterval((function(){
            console.log(this);
            console.log(++this.contador);
        }).bind(this),ms);
    }

    //el this en las arrow function no es dinamico sino que es contextual, no necesita ser parcheado, funciona bien asi
    setTimer3(ms){
        setInterval(() =>{
            console.log(this);
            console.log(++this.contador);
        },ms)
    }

}



const timer1 = new Timer(50);
//const timer2 = new Timer(550);
//const timer3 = new Timer(505);

console.log(timer1.getContador());
//console.log(timer2.getContador());
//console.log(timer3.getContador());

timer1.setTimer(1000);