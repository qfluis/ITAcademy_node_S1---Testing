const nivel2 = require('../app/nivel2');

// TESTING clase persona N2E2

jest.mock('../app/nivel2');
Persona = nivel2.Persona;

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