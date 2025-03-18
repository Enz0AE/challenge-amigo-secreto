
let amigos = [];

function agregarAmigo() {
    // Captura el valor de entrada
    let input = document.getElementById("amigo");
    let nombreAmigo = input.value.trim();

    //Validar que el campo no esté vacío y agregar a la lista de amigos
    if (nombreAmigo === '') {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(nombreAmigo);
        mostrarLista();
        //limpiar el campo de entrada
    }
    return input.value = '';
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = '';
    // Recorrer la lista de amigos y agregarlos a la lista de amigos
    amigos.forEach(function (nombreAmigo) {
        let li = document.createElement("li");
        li.innerHTML = nombreAmigo;
        lista.appendChild(li);
    });
}

