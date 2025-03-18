// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let mostrarAmigos = document.getElementById("listaAmigos");

function agregarAmigo() {
    // dato ingresado
    let nombreIngresado = document.querySelector("input").value;
    // si el dato ingresado es vacío, mostrar alerta
    if (nombreIngresado === '') {
        alert("Por favor, ingrese un nombre");
    } else {
        // agregar el dato a la lista
        listaAmigos.push(nombreIngresado);
        return document.querySelector("input").value = '';
    }
}
function mostrarLista() {
    // limpiar la lista
    mostrarAmigos.innerHTML = '';
    // recorrer la lista de amigos
    for (let i = 0; i < listaAmigos.length; i++) {
        // crear un elemento li
        let li = document.createElement("li");
        // agregar el nombre del amigo a la lista
        li.appendChild(document.createTextNode(listaAmigos[i]));
        // agregar el elemento li a la lista
        mostrarAmigos.appendChild(li);
    }
    
}

agregarAmigo();
