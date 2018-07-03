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