// Es la forma de representar un objeto del mundo real a JS

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function() {
        console.log(`Auto ${this.modelo} ${this.annio} ${this.marca}`);
    }
};