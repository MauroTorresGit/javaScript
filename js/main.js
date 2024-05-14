/*let = primeraNotaA1 = prompt("Insertar primera nota del alumno 1");
let = segundaNotaA1 = prompt("Insertar segunda nota del alumno 1");
let = primeraNotaA2 = prompt("Insertar primera nota del alumno 2");
let = segundaNotaA2 = prompt("Insertar segunda nota del alumno 2");
let = primeraNotaA3 = prompt("Insertar primera nota del alumno 3");
let = segundaNotaA3 = prompt("Insertar segunda nota del alumno 3");
*/

function calcularPromedio() {
    var totalAlumnos = 3;
    var alumnoNumero = 0

    for (var i = 0; i < totalAlumnos; i++) {
        var nota1 = parseFloat(prompt("Ingrese la primera nota del Alumno"));
        var nota2 = parseFloat(prompt("Ingrese la segunda nota del Alumno"));

        if (nota1 < 0 || nota2 < 0 || nota1 > 10 || nota2 > 10) {
            alert ("Por favor, ingrese notas validas entre 0 y 10.")
            return;
        }

        var promedio = (nota1 + nota2) / 2;

        alert ("El promedio del Alumno es : ", promedio);
    }
}

calcularPromedio();