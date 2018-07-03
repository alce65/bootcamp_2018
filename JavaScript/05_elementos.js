let nombre = 'Pepe'

// Wrapper Objects
console.log(nombre.toUpperCase())

let aDatos = [2,3,56,23]
aDatos.push(65)
console.log(aDatos)

/* for (let i = 0; i < aDatos.length; i++) {
    const element = aDatos[i];
} */

aDatos.forEach(
    (item, i)=>{ aDatos[i] = item + 2}
)

console.log(aDatos)

