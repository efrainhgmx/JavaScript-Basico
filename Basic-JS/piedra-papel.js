// Es es un juego usando validación de condiciones para jugar piedra, papel o tijeras e interntar ganarle a la maquina.

var player = "piedra";
var machine = "papel";

function startGame (player, machine) {
    if (player  === machine) {
        console.log("Es un empate");
    } else if (player === "piedra" && machine === "papel"){
        console.log("Perdiste");
    } else if (player === "piedra" && machine === "tijeras"){
        console.log("TU GANAS");
    } else if (player === "papel" && machine === "piedra"){
        console.log("TU GANAS");
    } else if (player === "papel" && machine === "tijeras"){
        console.log("Perdiste");
    } else if (player === "tijeras" && machine === "piedra"){
        console.log("perdiste");
    } else if (player === "tijeras" && machine === "papel"){
        console.log("TU GANAS");
    } else {
        console.log("NO ELEJISTE BIEN");
    }
}

startGame(player, machine);