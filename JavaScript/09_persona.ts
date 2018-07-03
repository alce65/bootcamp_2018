class PersonaTS {

    public nombre: string;
    public edad: number;
    constructor (nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }

    saludar () {
        console.log(`Hola soy ${this.nombre}`)
    }
}

let oJuan = new Persona('Juan', 33)
oJuan.saludar()