function normal() {
    console.log(this)
}

// normal()

oPrueba = {
    nombre : 'Prueba',
    probar : function () {console.log(this)}
}

oPrueba.probar()

setTimeout(
    function () {oPrueba.probar()}, 1000
)