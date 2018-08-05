export class FormContact {
    constructor() {
        // elementos del DOM
        this.oFormContact =  document.querySelector('#contact')
        this.oInputName = document.querySelector('#name')
        this.oInputEmail = document.querySelector('#email')
        this.oInputPhone = document.querySelector('#phone')
        this.oTextMessage = document.querySelector('#message')
        this.oCheckCondiciones = document.querySelector('#condiciones')
        this.oInputOtros = document.querySelector('#selection-otro')
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
        this.oSelectSeleccion.addEventListener('change', this.watchSelect.bind(this))
        this.definirValidaciones()

    }

    leerContact(oE) {
        oE.preventDefault()
        //if (this.validar()) {
            this.guardarDatos()
        //}
    }

    guardarDatos() {
        this.oData = {
            name:  this.oInputName.value,
            email: this.oInputEmail.value ,
            phone: this.oInputPhone.value,
            message: this.oTextMessage.value,
            seleccion: this.oSelectSeleccion.options[this.oSelectSeleccion.selectedIndex].value
        }

    console.dir(this.oData)
    }


    watchSelect() {
        if (this.oSelectSeleccion.options[this.oSelectSeleccion.selectedIndex].value === "otros") {
            this.oInputOtros.parentElement.classList.remove('oculto')
            console.log( this.oInputOtros.parentElement)
        } else {
            this.oInputOtros.parentElement.classList.add('oculto')
        }
    }

    definirValidaciones() {

        // cambio de la validación del nombre para tener un ejemplo
        //  de como añadir un texto diferente a una validación existente
        this.validaNombre()
        this.oInputName.addEventListener('input', this.validaNombre.bind(this) )

        // Validación para la textarea
        this.validaTexto()
        this.oTextMessage.addEventListener('input', this.validaTexto.bind(this) )


    }

    validaNombre() {
        let msg = ''
        // resetea validaciones custom previas
        this.oInputName.setCustomValidity(msg)
        if(!this.oInputName.checkValidity()){
            msg = 'Es necesario indicar el nombre'
        } 
        this.oInputName.setCustomValidity(msg)
        console.log(msg)
    }

    validaTexto() {
        let msg = ''
        // resetea validaciones custom previas
        this.oTextMessage.setCustomValidity(msg)
        console.log("Validando texto", this.oTextMessage.value )
        if (!this.oTextMessage.value) {
            msg = 'Es necesario incluir algún texto en el mensaje'
        } else if (this.oTextMessage.value.split(' ').length > 150) {
            msg = 'El texto no debe sobrepasar 50 palabras'
        } 
        this.oTextMessage.setCustomValidity(msg)
        console.log('Validando texto', msg)
        console.log(this.oTextMessage.value.length)
    }


/*     escribeDatos (oE) {
        //anula el comportamiento por defecto de submit
        //incluida la validacion de los requireds
        //que ya se ha realizado para poder llegar aqui
        oE.preventDefault();
        //ocultar formulario
        this.domFormulario.classList.add("oculto")
        //mostrar bloque div para el resultado
        document.getElementById("resultado").classList.remove("oculto");
        // limpiar el nodo <ul> donde se presentarán los datos
        this.oLista.innerHTML = "";
        //incorporamos a la lista cada elemento del objeto		
        for (var i in this.oDatos) {
            this.oLista.innerHTML += "<li>" + i + ": <strong>" +
                this.oDatos[i] + "</strong></li>";
        };
    }//Fin del método escribedatos	 */
}