
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
        //limpiar el campo de entrada
        input.innerHTML = '';
    }
}

