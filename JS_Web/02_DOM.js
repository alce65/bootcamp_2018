function add () {
    let nuevoElemento = prompt('Introduce un nuevo valor','');
    // Creacion de un nodo del DOM
    let elemento = document.createElement("li");
    let texto = document.createTextNode(nuevoElemento);
    elemento.appendChild(texto);
    let lista = document.getElementById("lista");
    lista.appendChild(elemento);
    console.log("Added", nuevoElemento )
}


function addSimple () {
    let nuevoElemento = prompt('Introduce un nuevo valor','');
    // Creacion de un nodo del DOM
    let lista = document.getElementById("lista");
    lista.innerHTML += `<li>${nuevoElemento}</li>`
    console.log("Added", nuevoElemento)
    lista.setAttribute('title', "Muchos animales")
    console.dir(lista)
}


( function() {
    window.addEventListener('load',  () => {
        let oBoton = document.querySelector('#addBtn')
        oBoton.addEventListener('click', addSimple)
    })
})()
