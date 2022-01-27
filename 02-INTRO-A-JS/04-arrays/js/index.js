//variables y entradas
var nombre, apellido_1, apellido_2, nombre_completo;
var array_nombre = []; //inicia arreglo vacio

nombre = prompt('Ingresa tu nombre');
apellido_1 = prompt('Ingresa tu primer apellido');
apellido_2 = prompt('Ingresa tu segundo apellido');

//logica
array_nombre.push(nombre);
array_nombre.push(apellido_1);
array_nombre.push(apellido_2);

nombre_completo = `Tu nombre es: ${array_nombre[0]} ${array_nombre[1]} ${array_nombre[2]}`;

//salidas
console.log(array_nombre);
alert(nombre_completo);