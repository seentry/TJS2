let cont = localStorage.getItem('citas');


let cita = prompt('¿Desea pedir una cita? (si o no)');
let precio;
let total;

if (cita === 'si') {
    cont++;

    if (cont <= 3) {
        precio = 200;
    } else if (cont <= 5) {
        precio = 150;
    } else if (cont <= 7) {
        precio = 100;
    } else {
        precio = 50;
    }

    total = precio * cont;
    localStorage.setItem('citas', cont);
    document.getElementById("salidas").innerHTML = 'Tienes ' + cont + ' citas. Esta cita cuesta ' + precio + '€ y en total ' + total + '€';
} else if (cita === 'no') {
    document.getElementById("entradas").innerHTML = 'Tienes ' + cont + ' citas';
} else {
    document.getElementById("salidas").innerHTML = 'Introduzca únicamente Si o No';
}
