let tipoTarjeta = parseInt(prompt("tipo de tarjeta 1, 2, 3, otro:"));

let suma;

if (tipoTarjeta == 1) {
    suma = 0.25;
} else if (tipoTarjeta == 2) {
    suma = 0.35;
} else if (tipoTarjeta == 3) {
    suma = 0.40;
} else {
    suma = 0.50; 
}

let limiteCreditoActual = parseFloat(prompt("el límite de crédito actual:"));

let nuevoLimiteCredito = limiteCreditoActual * (1 + suma);

document.getElementById("entradas").innerHTML = suma ;
document.getElementById("salidas").innerHTML = "límite de crédito es: " + nuevoLimiteCredito + "€";
