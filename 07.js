let numVentas = parseInt(prompt("número de ventas: "));

let ventasMayor1000 = 0;
let ventasMayor500 = 0;
let ventasMenor500 = 0;
let montoTotalMayor1000 = 0;
let montoTotalMayor500 = 0;
let montoTotalMenor500 = 0;

for (let i = 0; i < numVentas; i++) {
    let montoVenta = parseFloat(prompt("monto de la venta " + (i + 1)));

    if (montoVenta > 1000) {
        ventasMayor1000++;
        montoTotalMayor1000 += montoVenta;
    } else if (montoVenta > 500) {
        ventasMayor500++;
        montoTotalMayor500 += montoVenta;
    } else {
        ventasMenor500++;
        montoTotalMenor500 += montoVenta;
    }
}

let montoTotalGlobal = montoTotalMayor1000 + montoTotalMayor500 + montoTotalMenor500;

document.getElementById("salidas").innerHTML = `
    Ventas mayores a 1000€: ${ventasMayor1000}, Monto total: ${montoTotalMayor1000}€ <br>
    Ventas mayores a 500€ pero menores o iguales a 1000€: ${ventasMayor500}, Monto total: ${montoTotalMayor500}€ <br>
    Ventas menores o iguales a 500€: ${ventasMenor500}, Monto total: ${montoTotalMenor500}€ <br>
    Monto total vendido en todas las categorías: ${montoTotalGlobal}€ `;
