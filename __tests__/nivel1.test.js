const nivel1 = require('../app/nivel1');

// TESTING sumar/restar/dividir/multiplicar

describe('Testing función sumar', ()=> {
    test('sumar 1 + 2 debe dar 3', () => {
        expect(nivel1.sumar(1,2)).toBe(3);
    });
    test('sumar 1 + 2 + 4 debe dar 7', () => {
        expect(nivel1.sumar(1,2,4)).toBe(7);
    });
    test('sumar 1 + -2 + -4 debe dar -5', () => {
        expect(nivel1.sumar(1,-2,-4)).toBe(-5);
    });
});

describe('Testing función restar', () => {
    test('restar 5 - 1 debe dar 4', ()=> {
        expect(nivel1.restar(5,1)).toBe(4);
    });
    test('restar 5 - 1 - 2 debe dar 2', ()=> {
        expect(nivel1.restar(5,1, 2)).toBe(2);
    });
    test('restar 5 - 10 - 8 debe dar -13', ()=> {
        expect(nivel1.restar(5,10, 8)).toBe(-13);
    });
    test('restar (-10) - (-10) - (5) debe dar -13', ()=> {
        expect(nivel1.restar(-10,-10, 5)).toBe(-5);
    });    
});

describe('Testing función multiplicar', ()=> {
    test('multiplicar 2 * 2 debe dar 4', () => {
        expect(nivel1.multiplicar(2,2)).toBe(4);
    });
    test('multiplicar 1 * 2 * 4 debe dar 8', () => {
        expect(nivel1.multiplicar(1,2,4)).toBe(8);
    });
    test('multiplicar 1 * -2 * -4 debe dar 8', () => {
        expect(nivel1.multiplicar(1,-2,-4)).toBe(8);
    });
    test('multiplicar 5 * 5 * 0 debe dar 0', () => {
        expect(nivel1.multiplicar(5,5,0)).toBe(0);
    });
});
describe('Testing función dividir', ()=> {
    test('dividir 4 / 2 debe dar 2', () => {
        expect(nivel1.dividir(4,2)).toBe(2);
    });
    test('dividir 12 / 3 / 2 debe dar 2', () => {
        expect(nivel1.dividir(12,3,2)).toBe(2);
    });
    test('dividir 10 / -2 / -1 debe dar 5', () => {
        expect(nivel1.dividir(10,-2,-1)).toBe(5);
    });
    test('dividir 5 * 5 * 0 debe dar null', () => {
        expect(nivel1.dividir(5,5,0)).toBe(null);
    });
});


// TESTING Async / Await N1 E1
// https://jestjs.io/docs/asynchronous

describe('Testing funciones getEmployee y getSalary', ()=> {
    test('obtener empleado Linus Torvalds', () => {
        return expect(nivel1.getEmployee(1)).resolves.toEqual({id: 1, name: 'Linux Torvalds'});        
    });
});
