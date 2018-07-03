function normal() {
    console.log(this)
}

// normal()

oPrueba = {
    nombre : 'Prueba',
    probar : function () {console.log(this)}
}

// Inconsistencia del this

// this se refiere al objeto
oPrueba.probar()

// this se refiere a process
setTimeout(
    oPrueba.probar, 1000
)

// soluciones

setTimeout(
    function () {oPrueba.probar()}, 2000)