export class FormContact {
    constructor() {
        // elementos del DOM
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

}