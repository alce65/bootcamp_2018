console.log('Hola Mundo')

// *** Variables ***
// Ámbitos: funciones y bloques.
 
// ES5: var ES6: let, const

const num = 23

function ambitos() {
    let x = 1
    {
        // codigo
        let n = 0
        x += n
    }
    console.log(x)
}

ambitos()

// *** Tipos de datos *** 
// Number, String, Boolean, Undefined (y null), Object (y Arrays)

let a = 12
let b = 'Pepe' // 
b = "Pepe"
let c = true
let d
let o = {}
let n = null
let aDatos = [1,2]

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(typeof o)
console.log(typeof n)
console.log(typeof aDatos)



// Number y String.  ES6: string template
let saludoInicial = 'Hola '
let saludo = a + 'Mundo'

let t = `Esto es una plantilla para ${b}`
console.log(t)

// *** Tipado dinámico. Casting automático ***


function tipos()  {
    let num1 = 22
    let num2 = "3"
    let r = num1 / num2
    console.log(r)
    console.log(typeof num2)
}

tipos()

function sumar()  {
    let num1 = 22
    let num2 = "3"
    let r = num1 + +num2
    console.log(r)
}

sumar()

function sumarTextos()  {
    let num1 = 22
    let num2 = "Pepe"
    let r = num1 + +num2
    console.log(r)
    console.log(isNaN(r))
}

sumarTextos()

// Boolean: valores falsy: condiciones

console.log(Boolean(false))
console.log(Boolean(0))
console.log(Boolean(''))
console.log(Boolean(undefined))
console.log(Boolean(null))

let z = 0
if (z) { console.log('Número válido')}

// *** Object: tipos referenciados. Arrays ***

function elementales() {
    let a = 2
    let b = a
    a += 2
    console.log(b) 
}

elementales()

function referencias () {
    let a = {nombre: "Pepe", edad: 22}
    let b = a
    a.edad = 33
    console.log(b)
}

referencias()

// *** Operadores ***
// Particularidades de la suma
// Comparación (==) y comparación estricta (===)

if (22 == '22') {} // true
if (22 === '22') {} // false

// Operador ternario
let edad = 12
let estado = (edad > 18) ? 'Mayor de Edad' : 'Menor de Edad'