// Un array es un manera de estructura de datos y es de tipo objeto.
var frutas = ["Manzana", "Naranjas", "Plátano", "Peras", "Fresas"];

//Manda la fruta al final del array sin cambiar el orden.
var masFrutas = frutas.push("Uvas");

//Borra el ultimo elemento del array.
var ultimo = furtas.pop("Uvas");

// Pone la nueva fruta el inicio del array, es decir en el index 0
var nuevaFruta = frutas.unshift("Mango");

//Borra la fruta del index 0
var borrarFruta = frutas.shift("Mango");

//Muestra la posicion del index de ese objeto, en este caso platano esta en index 2
var posicion = frutas.indexOf("Plátano");

console.log(frutas);

// ---------------------------------------------------------------
//Recorridos de Arrayas

var articulos = [
    { nombre: "Bici", costo: 3500 }, { nombre:"TV", costo: 2500 }, {nombre: "Libro", costo: 150 }, { nombre: "Laptop", costo: 1500 }, { nombre: "Audifonos", costo: 1700 }, 
];
//Busca por costo
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
});

//Busca por map.
var nombreArticulo = articulos.map(function(articulo) {
    return articulo.nombre;
});

// Metodo find
var encuentraArticulo = articulos.find(function(articulo) {
    return articulo.nombre === "Laptop";
});

//Metodo forEach() solo regresa un paramétro es decir en este caso solo muestra los nombres de los articulos.
articulos.forEach(function(articulo) {
    console.log(articulo.nombre);
});

//Método some(); Regresa verdadero o falso a los articulos que cumplan la función. Verifica si hay artículos con ese precio y regresa un true o false sino existe.

var articulosBaratos = articulos.some(function(articulo) {
return articulo.costo <= 700;
});
