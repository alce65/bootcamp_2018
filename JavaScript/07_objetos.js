function Persona (nombre, edad) {
    this.nombre = nombre;
    this.edad = edad
}

Persona.prototype.saludar = function () {console.log(`Hola soy ${this.nombre}`)}

oPepe = new Persona('Pepe', 22)
oPepe.profesion = 'Programador'
oLuis = new Persona('Luis', 23,)
oLuis.informatico = 'Informatico'

console.log(oPepe)
console.log(oLuis)

oPepe.saludar()