let numCiudades = parseInt(prompt("número de ciudades: "));
let totalRecaudado = 0;
let resultadosHTML = "";

for (let ciudad = 1; ciudad <= numCiudades; ciudad++) {
    let numTiendas = parseInt(prompt("número de tiendas en la ciudad " + ciudad + ":"));
    let totalVendidoCiudad = 0;


    for (let tienda = 1; tienda <= numTiendas; tienda++) {
        let numEmpleados = parseInt(prompt("número de empleados en la tienda " + tienda + " de la ciudad " + ciudad + ":"));
        let totalVendidoTienda = 0;

        resultadosHTML += "<p>En la tienda " + tienda + " se vendió: ";

        for (let empleado = 1; empleado <= numEmpleados; empleado++) {
            let montoVendido = parseFloat(prompt("Monto vendido por el empleado " + empleado + " de la tienda " + tienda + " en la ciudad " + ciudad + ":"));
            totalVendidoTienda += montoVendido;
            totalRecaudado += montoVendido;
        }

        resultadosHTML += totalVendidoTienda + "€</p>";
        
        totalVendidoCiudad += totalVendidoTienda;
    }

    resultadosHTML += "<p>Total vendido en la ciudad " + ciudad + ": " + totalVendidoCiudad + "€</p>";
}

resultadosHTML += "<p>Total recaudado por la cadena: " + totalRecaudado + "€</p>";

document.getElementById("salidas").innerHTML = resultadosHTML;
