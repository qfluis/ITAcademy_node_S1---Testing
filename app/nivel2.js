// Nivel 2 Ejercicio 2
/* Crea una classe Persona que rebi un paràmetre 'nom' al ser instanciada. 
La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. 
Invoca el mètode dirNom des de fora de la classe. */

class Persona {
    constructor(nom){
        this.nom = nom;
    }

    dirNom(){
        const saludo = `El meu nom es: ${this.nom}`;
        console.log(saludo);
        return saludo;    
    }
}

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

module.exports.Persona = Persona;
module.exports.crearAnimal = crearAnimal;