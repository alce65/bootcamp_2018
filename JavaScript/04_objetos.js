let persona = {
    nombre: 'Pepe',
    edad: 22
}

console.log(typeof persona, persona)
console.log(persona.nombre)
console.log(persona["nombre"])

persona.edad = 23
let propiedad = 'edad'
console.log(persona[propiedad])

persona.profesion = "Programador"
console.log(typeof persona, persona)

let oVuelo = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2004-09-23 10:42",
        city: "Los Angeles"
    },
    mostrar : function() {console.log('Volando')}
}

oVuelo.mostrar()

const oDatos = {}
oDatos.dia = 'Martes'
console.log(oDatos)

for (const key in oVuelo) {
    if (oVuelo.hasOwnProperty(key)) {
        const element = oVuelo[key];
        console.log(key, element)
    }
}

console.clear()

oVuelo.mostrar = function (obj=this) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] == 'object') {
                console.log(key, '------------')
                this.mostrar(obj[key])
            } else if (typeof obj[key] != 'function') {
                console.log(`${key} : ${obj[key]}`)
            }
        }
    }
}

oVuelo.mostrar()