let hamburguesa = prompt('Selecciona el tipo: simple, doble o triple');
let pago = prompt('efectivo o tarjeta');

function precio() {
    let precio;

    if (hamburguesa === 'simple') {
        precio = 20;
    } else if (hamburguesa === 'doble') {
        precio = 25;
    } else {
        precio = 28;
    }

    if (pago == 'tarjeta') {
        precio = precio * 1.5; 
    }

    return precio;
}

let precioFinal = precio();
document.getElementById("entradas").innerHTML = 'Hamburguesa ' + hamburguesa + ' pagada en ' + pago;
document.getElementById("salidas").innerHTML = 'El precio es: ' + precioFinal;


