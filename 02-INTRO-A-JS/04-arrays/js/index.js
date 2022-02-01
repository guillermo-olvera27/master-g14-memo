//variables y entradas
var nombre, apellido_1, apellido_2, nombre_completo, nombres_miembros;
var array_nombre = []; //inicia arreglo vacio
var array_familiares = [];
var array_combinado = [];

nombre = prompt('Ingresa tu nombre');
apellido_1 = prompt('Ingresa tu primer apellido');
apellido_2 = prompt('Ingresa tu segundo apellido');
nombres_miembros = prompt('Ingresa los nombres de tus familiares separados por una coma (,)')

if(nombre === '' || apellido_1 === '' || apellido_2 === '' || nombres_miembros === '');
{
    alert('Por favor rellena todos los datos solicitados')
}

if (condition) {
    
} else {
    
}(nombres_miembros.includes(',') === false);

{
    alert('Olvidaste ingresar los nombres separados con una coma (,)');

}

else
{
//logica
array_nombre.push(nombre);
array_nombre.push(apellido_1);
array_nombre.push(apellido_2);
array_familiares = nombres_miembros.split(',');
array_combinado = array_nombre.concat(array_familiares);

nombre_completo = `Tu nombre es: ${array_nombre[0]} ${array_nombre[1]} ${array_nombre[2]}`;

//salidas
console.log(array_nombre);
console.log(array_familiares);
alert(nombre_completo);
alert(array_combinado.reverse());
}
