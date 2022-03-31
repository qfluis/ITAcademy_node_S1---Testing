const nivel2_Personas = require('../app/nivel2_Personas');
const nivel2_Animales = require('../app/nivel2_Animales');





// TESTING clase persona N2E2
jest.mock('../app/nivel2_Personas');
Persona = nivel2_Personas.Persona;

describe('Testing clase Persona', () => {

    test('El constructor es llamado',() => {
        const persona = new Persona("Luis");
        expect(Persona).toHaveBeenCalledTimes(1);
    });

    test('La persona dice su nombre 🙂', () => {
        const persona2 = new Persona("Luis");
        persona2.dirNom();
        //console.log('HOLIWI', persona2.dirNom());
        expect(persona2.dirNom).toHaveBeenCalledTimes(1);
    });
});

// TESTING crearAnimal

describe('Testing crearAnimal', () => {
    
    let miAnimal;

    beforeAll(() => {
        miAnimal = nivel2_Animales.crearAnimal('perro', 'Lassie');
    })

    test('El animal se instancia correctamente', () => {        
        expect(miAnimal).toEqual({ tipo: 'perro', nombre: 'Lassie' });
    });

    test('El animal saluda 👍', () => {
        expect(miAnimal.saludar()).toBe("Hola me llamo Lassie y soy del tipo perro");
    });
});

