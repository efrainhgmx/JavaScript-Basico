// Declarativas

function miFuncion() {
    return 3;
}

miFuncion();
// Expresión

var miFuncion = function(a, b) {
    return a + b;
}

miFuncion();

function saludarEstudiante (estudiante) {
    //Plantilla de cadena de texto o template string
    console.log(`Hola ${estudiante}`);
}

saludarEstudiante("Nombre del estudiante");
