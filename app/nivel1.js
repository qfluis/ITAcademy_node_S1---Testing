/* Sumas, restas, multiplicaciones y divisiones */
const sumar = (a, b, ...args) => {
    let resultado = a + b;
    for (let argument of args){
        resultado += argument;
    }
    return resultado;
}

const restar = (a, b, ...args) => {
    let resultado = a - b;
    for (let argument of args){
        resultado -= argument;
    }
    return resultado;
}

const multiplicar = (a, b, ...args) => {
    let resultado = a * b;
    for (let argument of args){
        resultado *= argument;
    }
    return resultado;
}

const dividir = (a, b, ...args) => {
    if(a == 0 || b == 0 || args.includes(0)) {
        return null;
    }
    let resultado = a / b;
    for (let argument of args){
        resultado /= argument;
    }
    return resultado;
}


/* ASYNC / AWAIT N1E1 */

let employees = [
    {id: 1, name: 'Linux Torvalds'},
    {id: 2, name: 'Bill Gates'},
    {id: 3, name: 'Jeff Bezos'},
    {id: 4, name: 'Bender'}
];
 
let salaries = [
    {id: 1, salary: 4000},
    {id: 2, salary: 1000},
    {id: 3, salary: 2000}
];

getEmployee = (id) => {
    return new Promise((resolve, reject) => {
        const result = employees.find( employee => employee.id == id);
        if(result){
            resolve(result);
        } else {
            reject(new Error('Empleado no encontrado'));
        }
    });
}

getSalary = (employee) => {
    return new Promise((resolve, reject) => {
        const result = salaries.find( salary => salary.id == employee.id);
        if(result){
            resolve(result);
        } else {
            reject(new Error('Salario no encontrado'));
        }
    });
}

//Nivel 1 Ejercicio 2
/*
getEmployeeAndSalary = async (id) => {
    try {
        const employee = await getEmployee(id);
        const salary = await getSalary(employee);
        console.log(`Empleado: ${employee.name} Salario: ${salary.salary}`);
    } catch ( err ) {
        console.log( err.message );
    }
}*/












module.exports.sumar = sumar;
module.exports.restar = restar;
module.exports.multiplicar = multiplicar;
module.exports.dividir = dividir;

module.exports.getEmployee = getEmployee;
module.exports.getSalary = getSalary





