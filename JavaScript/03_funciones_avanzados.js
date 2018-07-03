function calcular (a,b, operacion, calculo) {
    console.log(`El resultado de la ${operacion} de ${a} y ${b} es ${calculo(a,b)}`)
}
calcular(4,6,'suma', (a,b)=>a+b)
calcular(4,6,'producto', (a,b)=>a*b)

//Con una función nombrada
function media(a,b) {return (a+b)/2} 
calcular(4,6,'media', media)

//Importancia en relación con la asincronia
setTimeout(
    ()=>{console.log("Despues de un tiempo")}, 
    2000
)

setTimeout(
    function () {console.log("Despues de un tiempo, clasico")}, 
    1000
)


// Funciones anidadas
function miFuncion () {

    let a = 1

    function funcionInterna () {
        return a++
    }

    return funcionInterna()

}

console.log(miFuncion());


// Funciones autoinvocadas: patrón IIFE
// ( function (parámetros) {
// 	código de la función
// } (argumentos))

( function(p=1) {
   console.log(`Patron IIFE, con el argumento ${p} `)
}) (22)


// Closures

/* let enteroUnico = function () {
    let contador = 0;
    function contar () { return contador++; };
    return contar;
} (); */

let enteroUnico = function () {
    let contador = 0
    return () => { return contador++}
}()

console.log(enteroUnico()) //  0
console.log(enteroUnico()) //  1