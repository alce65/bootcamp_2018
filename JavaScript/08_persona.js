class Persona {

    constructor (nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }

    saludar () {
        console.log(`Hola soy ${this.nombre}`)
    }
}

oJuan = new Persona('Juan', 33)
oJuan.profesion = 'Escritor'
oJuan.saludar()
console.log(oJuan)