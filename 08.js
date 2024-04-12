let totalPagado = 0;
let pagoMensual = 10;
let meses = 20;

for (let i = 1; i <= meses; i++) {
    totalPagado += pagoMensual;
    pagoMensual *= 2; 
}

document.getElementById("salidas").innerHTML = `
    El pago mensual es de: ${totalPagado / meses}€ <br>
    total pagado después de los ${meses} meses es: ${totalPagado}€
`;
