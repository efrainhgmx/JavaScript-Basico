var piedra = 1;
var papel = 2;
var tijeras = 3;
var jugador = piedra;
var maquina = papel;

function jugar(jugador, maquina) {
    switch (jugador) {
        case 1: 
            console.log("Elegiste piedra");
            break;
        case 2: 
            console.log("Elegiste papel");
            break;
        case 3: 
            console.log("Elegiste tijeras");
            break;
        default:
            console.log("No hay ganador");
    }

    switch (maquina) {
        case 1: 
            console.log("Maquina eligio piedra");
            break;

        case 2: 
            console.log("Maquina eligio papel");
            break;
        case 3: 
            console.log("Elegiste piedra");
            break;
        default:
            console.log("No hay ganador");
    }

    if (jugador === maquina)
    {
        console.log("Es un empate");
    } else if (maquina== 1 && jugador == 2) {
        console.log("Tu ganas");
    } else if (maquina == 2 && jugador == 1){
        console.log("Tu pierdes");
    } else if (maquina == 1 && jugador == 3) {
        console.log("Tu pierdes");
    } else if (maquina == 3 && jugador == 1) {
        console.log("Tu ganas");
    } else if (maquina == 2 && jugador == 3) {
        console.log("Tu ganas");
    } else if (maquina == 3 && jugador == 2) {
        console.log("Tu pierdes"); 
    } else {
        console.log("fin");
    }

}

jugar(jugador, maquina);