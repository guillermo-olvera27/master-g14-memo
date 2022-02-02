/*
Crear una aplicacion que permita a un profesor generar las notas definitivas de alumnos.

Debemos permitir al profesor que nos indique cuantos alumnos va a calificar.
Debemos permitir al profesor ingresar la cantidad de notas que va a promediar en general.
Con esas notas vamos a obtener el promedio de cada estudiante.
Mostrar al profesor al final una lista de estudiantes con su nombre y su definitiva.
*/

// variables y datos

var cantidad_alumnos, cantidad_notas, nombre, nota, promedio;
var alumno = [];
var resultados = [];


cantidad_alumnos = Number(prompt('Ingresa la cantidad de alumnos'));
cantidad_notas = Number(prompt('Ingresa la cantidad de notas'));

//proceso logico
for(i = 1; i <= cantidad_alumnos; i++){
    var sumatoria = 0;
    nombre = prompt('Ingresa el nombre del alumno' + i);

    for(j = 1; j <= cantidad_notas; j++){
        nota = Number(prompt('Ingresa la nota' + j))
        sumatoria = sumatoria + nota;
    }
    promedio = sumatoria / cantidad_notas;

    alumno = "Alumno: " + nombre + " - Calificacion: " + promedio.toFixed(2);

    resultados.push(alumno);
}

function imprime_resultados(resultados)
{
    var lista = "";
    for(i = 0; i < resultados.length; i++)
    {
        lista += resultados[i] + "<br>"; 

    }

    return lista;

}


//impresion de resultado
var imprimir = imprime_resultados(resultados);
document.write(imprimir);