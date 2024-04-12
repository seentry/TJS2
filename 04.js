
let peso = parseFloat(prompt("Peso del paquete:"));
let zona = parseInt(prompt("Zona; 1 = América, 2 = África, 3 = Oceanía, 4 = Europa, 5 = Asia:"));

let costoPorGramo;


if (zona == 1) {
    costoPorGramo = 0.011;
} else if (zona == 2) {
    costoPorGramo = 0.010;
} else if (zona == 3) {
    costoPorGramo = 0.012;
} else if (zona == 4) {
    costoPorGramo = 0.024;
} else if (zona == 5) {
    costoPorGramo = 0.027;
} else {
    document.getElementById("salidas").innerHTML = "No está";
}

if (peso > 5) {
    document.getElementById("entradas").innerHTML = "Pesa: " + peso + "kg";
    document.getElementById("salidas").innerHTML = "Te has pasado de peso pixa";
} else {
    let costoTotal = peso * 1000 * costoPorGramo;

    document.getElementById("entradas").innerHTML = "Pesa: " + peso + "kg y lo envias a la zona " + zona;
    document.getElementById("salidas").innerHTML = "El coste es: " + costoTotal + "€";
}
