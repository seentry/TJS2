let materiaPrima = parseFloat(prompt('Precio materia prima:'));
let claveArticulo = parseInt(prompt('Clave 1, 2, 3, 4, 5 o 6:'));

let manoObra;
let costoFabricacion;

switch (claveArticulo) {
    case 3:
    case 4:
        manoObra = 0.75 * materiaPrima;
        break;
    case 1:
    case 5:
        manoObra = 0.80 * materiaPrima;
        break;
    case 2:
    case 6:
        manoObra = 0.85 * materiaPrima;
        break;
    default:
        manoObra = 0;
        break;
}

if (claveArticulo == 2 || claveArticulo == 5) {
    costoFabricacion = 0.30 * materiaPrima;
} else if (claveArticulo == 3 || claveArticulo == 6) {
    costoFabricacion = 0.35 * materiaPrima;
} else if (claveArticulo == 1 || claveArticulo == 4) {
    costoFabricacion = 0.28 * materiaPrima;
} else {
    costoFabricacion = 0;
}

let costoProduccion = materiaPrima + manoObra + costoFabricacion;

let precioVenta = costoProduccion + 0.45 * costoProduccion;

document.getElementById("entradas").innerHTML = 'Costo de la materia prima: ' + materiaPrima + '€';
document.getElementById("salidas").innerHTML = 'Precio clave ' + claveArticulo + ': ' + precioVenta + '€';
