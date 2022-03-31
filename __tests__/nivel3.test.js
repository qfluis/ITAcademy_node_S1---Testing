const {employees, salaries, getEmployeeAndSalary} = require('../app/nivel3');

// TODO: hacer que funcione...
jest.mock("../app/nivel3", ()=> {
    const originalModule = jest.requireActual('../app/nivel3');

    return {
        //__esModule:true,
        ...originalModule,
       //default: jest.fn(() => 'mocked baz'),
        employees: [
            {"id": 1, "name": "Luis Quevedo"},
            {"id": 2, "name": "Sara Quevedo"},
            {"id": 3, "name": "Cristina Giménez"}
        ],
        salaries: [
            {"id": 1, "salary": 5000},
            {"id": 2, "salary": 6000}
        ]
        
    }
});
/*
const employees = jest
  .spyOn(nivel3, 'employees')
  .mockImplementation(() => {
    return [
        {"id": 1, "name": "Luis Quevedo"},
        {"id": 2, "name": "Sara Quevedo"},
        {"id": 3, "name": "Cristina Giménez"}
    ]
  }); // comment this line if just want to "spy"

const salaries = jest
    .spyOn(nivel3, 'salaries')
    .mockImplementation(() => {
    return [
        {"id": 1, "salary": 5000},
        {"id": 2, "salary": 6000}
    ]
    }); // comment this line if just want to "spy"
*/


describe('Testing función getEmployeeAndSalary (JSON version)', () => {
    test('obtener empleado y salario de Luis Quevedo', () => {
        return expect(getEmployeeAndSalary(1)).resolves.toEqual({id: 1, name: 'Luis Quevedo', salary:5000});        
    });
    
    test('obtener error empleado no encontrado', () => {
        return expect(getEmployeeAndSalary(5)).resolves.toEqual(new Error('Empleado no encontrado'));        
    });

    test('obtener error salario no encontrado (buscando empleado existente sin salario)', () => {
        return expect(getEmployeeAndSalary(4)).resolves.toEqual(new Error('Salario no encontrado'));        
    });
    
});