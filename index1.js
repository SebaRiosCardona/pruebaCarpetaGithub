//1ER ENTREGA
console.log ("hola")
let contador = 0;

function contadorCiudadCordoba(ciu) {
    if (ciu == "cordoba") {
        contador++;
        alert("sos de " + ciu)
    } 
}

let ciudad;
for (let i = 1; i < 4; i++) {
    ciudad = prompt("ingresa tu ciudad");
    contadorCiudadCordoba(ciudad);
    console.log("la ciudad ingresada es",ciudad);
    console.log("Ingresaste Cordoba", contador, "veces");
    console.log("vas ingrsando la ciudad ", i, "veces");
}
