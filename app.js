// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigoEnter(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
}

function agregarAmigo() {
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

function mostrarListaAmigos() {
    let listaAmigos = '';
    amigos.forEach((amigo, index) => {
        listaAmigos += `<li>${amigo}</li>`;
    });
    document.getElementById('listaAmigos').innerHTML = listaAmigos;
}