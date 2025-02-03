// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Llama a la función para agregar un amigo cuando se presiona 'Enter'.
function agregarAmigoEnter(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
}

// Agrega un amigo a la lista si el nombre no está vacío ni repetido.
function agregarAmigo() {
    document.getElementById('resultado').innerHTML = '';
    let nombre = document.getElementById('amigo').value;
    if (nombre.length != 0) {
        if (amigos.includes(nombre)) {
            document.getElementById('section-title').innerHTML = 'Ese amigo ya fue agregado';
        } else {
            amigos.push(nombre);
            document.getElementById('section-title').innerHTML = 'Amigo agregado';
            document.getElementById('amigo').value = '';
            mostrarListaAmigos();
        }
    } else {
        document.getElementById('section-title').innerHTML = 'No se puede añadir un nombre vacío';
    }
}

// Muestra la lista de amigos en la página.
function mostrarListaAmigos() {
    let listaAmigos = '';
    amigos.forEach((amigo, index) => {
        listaAmigos += `<li>${amigo}</li>`;
    });
    document.getElementById('listaAmigos').innerHTML = listaAmigos;
}

// Sortea un amigo aleatorio de la lista si hay suficientes amigos.
function sortearAmigo() {
    if (amigos.length > 1) {
        let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        document.getElementById('listaAmigos').innerHTML = '';
        document.getElementById('resultado').innerHTML = `<li>${amigoSorteado}</li>`;
        amigos = [];
    } else {
        document.getElementById('section-title').innerHTML = 'No hay suficientes amigos para sortear';
    }
}