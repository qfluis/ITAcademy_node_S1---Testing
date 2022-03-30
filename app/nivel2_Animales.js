// Nivel 3 Ejercicio 1
/* Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. 
Invoca-la amb diferents definicions. */

class Animal {
    constructor(tipo, nombre) {
        this.tipo = tipo;
        this.nombre = nombre;        
    } 

    saludar() {
        const saludo = `Hola me llamo ${this.nombre} y soy del tipo ${this.tipo}`
        console.log(saludo);
        return saludo;
    }
}

const crearAnimal = (tipo, nombre) => {
    return new Animal(tipo, nombre);
}

module.exports.Animal = Animal;
module.exports.crearAnimal = crearAnimal;