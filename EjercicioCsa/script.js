console.log("Hola")

let nom= "Andrea"
console.log(nom)
let tel="3024776997"
console.log(tel,nom)


//condicionales 
let autorizado = true 
if (autorizado) console.log("bienvenido") 
    else console.log("no autorizado") 

//funciones 
function sumar(a,b) {
    return a + b;
}

let resultado= sumar(5 , 2);
console.log(resultado)

//Listas, bucles 
let lista= [ 2,3,4,5]

for (elemento of lista ) {
    let suma= sumar(elemento,2)
    console.log(suma)
 }

 //POO
let animal= {nombre:"perro", sonido:function sonido() { console.log("woof")}}

animal.nombre
animal.sonido()


class Animal {
    constructor(nombreA,sonidoA){ 
        this.nombreA= nombreA
        this.sonidoA= sonidoA
    }
    //metodo
    hazSonido(){ 
        console.log("Soy un "+ this.nombreA + " y hago "+ this.sonidoA)
    }
 }

 let perro= new Animal("gato", "miauuu")
 perro.hazSonido()
