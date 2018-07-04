function saludar () {
    let saludo = 'Hola Mundo'
    console.log(saludo)
}

/* function app () {
    // Detactar el elemento DOM 
    let oBoton = document.querySelector('#btn1')
    // Detectar el click en ese elemnto
    oBoton.addEventListener('click', saludar)
}


( function() {
    // Esperar a la carga de la página / documento
    //window.load
    //document.DOMContentLoaded
    window.addEventListener('load', app)
})() */


( function() {
    // Esperar a la carga de la página / documento
    //window.load
    //document.DOMContentLoaded
    window.addEventListener('load',  () => {
        // Detactar el elemento DOM 
        let oBoton = document.querySelector('#btn1')
        console.log(oBoton)
        console.dir(oBoton)
        // Detectar el click en ese elemnto
        oBoton.addEventListener('click', saludar)
    })
})()
