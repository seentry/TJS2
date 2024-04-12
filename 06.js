let posicion1 = 70;
let posicion2 = 150;

let velocidad = parseFloat(prompt("velocidad: "));

let distanciaHora = velocidad;

let distanciaRelativaHora = distanciaHora * 2;

let diferenciaKm = posicion2 - posicion1;
let tiempo = diferenciaKm / distanciaRelativaHora;
let nuevoKilometro = posicion1 + (distanciaHora * tiempo);

document.getElementById("entradas").innerHTML = "van a: " + velocidad + "km";
document.getElementById("salidas").innerHTML = "se encuentran en el kilómetro " + nuevoKilometro;
