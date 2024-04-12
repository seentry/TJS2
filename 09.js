let numTrabajadores = parseInt(prompt("número de trabajadores:"));

let sueldoSemanalTotal = 0;
let totalPagado = 0;

for (let i = 1; i <= numTrabajadores; i++) {
    let horasSemanales = parseFloat(prompt("horas trabajadas del trabajador " + i + " en la semana: "));
    let tarifaHora = parseFloat(prompt("tarifa por hora del trabajador " + i + ":"));

    let sueldoSemanal = horasSemanales * tarifaHora;
    sueldoSemanalTotal += sueldoSemanal;
    totalPagado += sueldoSemanal;
}

document.getElementById("salidas").innerHTML = `
    El sueldo semanal total de los ${numTrabajadores} trabajadores es: ${sueldoSemanalTotal}€ <br>
    La empresa pagó un total de: ${totalPagado}€ por los ${numTrabajadores} empleados.
`;
