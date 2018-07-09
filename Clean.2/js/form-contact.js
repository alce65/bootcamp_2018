export class FormContact {
    constructor() {
        // elementos del DOM
        this.oFormContact =  document.querySelector('#contact')
        this.oInputName = document.querySelector('#name')
        this.oInputEmail = document.querySelector('#email')
        this.oInputPhone = document.querySelector('#phone')
        this.oTextMessage = document.querySelector('#message')
        this.oCheckCondiciones = document.querySelector('#condiciones')
        this.oRadioOpciones = document.querySelectorAll('[name=opciones]')
        this.oSelectSeleccion = document.querySelector('#selection')

        this.oData = {
            name: '',
            email: '',
            phone: '',
            message: '',
            condiciones: '',
            opciones: '',
            seleccion: ''
        }

        this.oFormContact.addEventListener('submit', this.leerContact.bind(this)) 
        this.definirValidaciones()

    }

    leerContact(oE) {
        oE.preventDefault()
        if (this.validar()) {
            this.guardarDatos()
        }
    }

    guardarDatos() {
        this.oData = {
            name:  this.oInputName.value,
            email: this.oInputEmail.value ,
            phone: this.oInputPhone.value,
            message: this.oTextMessage.value,
            condiciones: this.oCheckCondiciones.checked,
            opciones: this.processRadio(this.oRadioOpciones),
            seleccion: this.oSelectSeleccion.options[this.oSelectSeleccion.selectedIndex].value
        }

    console.dir(this.oData)
    }

    processRadio(aNodos) {
        let value
        aNodos.forEach(
            (item) => {if(item.checked) {value = item.value}}
        )
        return value
    }

    definirValidaciones() {
        this.oInputName.setCustomValidity('El nombre es obligatorio')
        console.dir(this.oInputName.validity)
        console.dir(this.oInputEmail.validity)

    }

    validar() {
        return true
    }
}