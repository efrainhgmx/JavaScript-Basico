// Los loops nos permiten repetir tareas sin necesidad de hacerlo

var estudiantes = ["Maria", "Sergio", "Dona"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
} 

// En el ciclo for usa variable, condición, incremento o cambio.
for(var i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);
}

// Hace el Loop dentro de un array y recorre el index
for(var estudiante of estudiante) {
    saludarEstudiantes(estudiante);
}

// WHILE

while(estudiantes.length > 0) {
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}