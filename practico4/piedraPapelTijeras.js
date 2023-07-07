let readline = require('readline-sync');
//2.
function obtenerJugadaComputadora() {
  let numeroAleatorio = Math.floor(Math.random() * 3);
  if (numeroAleatorio === 0) {
    return "piedra";
  } else if (numeroAleatorio === 1) {
    return "papel";
  } else {
    return "tijeras";
  }
}
//3.
function obtenerJugadaUsuario() {
 let jugada = readline.question("Ingresa tu jugada: piedra, papel o tijeras: ");

  if (jugada === "piedra" || jugada === "papel" || jugada === "tijeras") {
    return jugada;
  } else {
    console.log("Error!!  ingresa piedra, papel o tijeras.");
    return obtenerJugadaUsuario(); 
  }
}

//4.
function determinarGanador(jugadaComputadora, jugadaUsuario) {
  if (jugadaComputadora === jugadaUsuario) {
    return "Empate";
  } else if (
    (jugadaComputadora === "piedra" && jugadaUsuario === "tijeras") ||
    (jugadaComputadora === "tijeras" && jugadaUsuario === "papel") ||
    (jugadaComputadora === "papel" && jugadaUsuario === "piedra")
  ) {
    return "Gana la computadora";
  } else {
    return "Gana el usuario";
  }
}

//5.
let jugadaComputadora = obtenerJugadaComputadora();
let jugadaUsuario = obtenerJugadaUsuario();
let resultado = determinarGanador(jugadaComputadora, jugadaUsuario);
//6.
console.log("La computadora eligió: " + jugadaComputadora);
console.log("El usuario eligió: " + jugadaUsuario);
console.log("El resultado fue: " + resultado);
