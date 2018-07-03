// *** Creación de funciones ***
// Declaraciones v. asignación a variables de funciones anónimas
// Hoisting


function sumar(a = 2, b = 2) {
    return a + b
}

let sumarOtra = function (a = 2, b = 2) {
    return a + b
}

console.log(sumar(3,6))
console.log(sumarOtra(3,6))

// ES6: Arrow functions

// let sumarArrow  = (a = 2, b = 2) => {return a + b}
let sumarArrow  = (a = 2, b = 2) => a + b

console.log(sumarArrow(3,6))

// *** Argumentos y parámetros ***  
// Declaración: parámetros (reales)
// Invocación: parámetros formales o argumentos
// Valores y referencias en los argumentos

let user = {nombre: 'Pepe', codigo : '007'}

cambiarCodigo = function (obj) {
    obj.codigo = '008'
}

cambiarCodigo(user)
console.log(user)

// ES6: valores por defecto

function calcularPrecio(num, iva = 1.22) {
    return num * iva
}

console.log(calcularPrecio(12))
console.log(calcularPrecio(12, 1.06))

// Parametros sobrantes
console.log(sumarArrow(3,5,6,7))

// Parametros insuficientes
console.log(sumarArrow(3))

// ES6: spread operator
function sumatorio (...aDatos) {
    let total = 0
    aDatos.forEach(dato => total += dato)
    return total
}

console.log(sumatorio (2,2,2,2))

// ES6 Desesctucturacion

function usuario ({codigo, nombre}) {
    console.log( `Accediendo al usuario ${nombre}, de código ${codigo}`)
}

usuario({nombre:'Pepe', codigo: 7})

usuario({nombre:'Pepe'})

