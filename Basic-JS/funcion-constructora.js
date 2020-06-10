function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("Honda", "HRV", 2020);

var autoNuevo2 = new auto ("Tesla", "Model s", 2020);

var autoAleman = new auto ("Audi", "R8", 2019);

//Reto automatizar la creación de los autos con una función

var autos =  [];

function numeroDeAutos (numero) {
    for( i = 0; i < numero; i++) {
        autos[i] = new auto("Tesla", "Modelo S", 2020);
        console.log(autos[i]);
        console.log("Numero total de autos" + autos.length);
    }
}