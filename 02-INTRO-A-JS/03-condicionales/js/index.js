//variables
var nombre_completo, año_nacimiento, año_actual, edad. ;

nombre_completo = prompt('Ingresa tu nombre')
año_nacimiento = Number(prompt('Ingresa tu año de nacimiento '))
año_actual = Number(prompt('Ingresa el año'))

//proceso logico
if(nombre_completo === ""  || año_actual === 0 || año_nacimiento === 0)
{
    msg = "Te faltaron datos por favor ingresalos completos"
}
else if(año_nacimiento>año_actual)
{
    msg = "el año de nacimiento no puede ser mayor al actual"
}
else 
{
    edad = año_actual - año_nacimiento;

if(edad <= 12)
{
    msg = 'Hola' + nombre_completo + 'tu eres un niño aun';
}
else if (edad > 12 && edad <18) 
{
    msg = 'Hola' + nombre_completo + 'tu eres un adolescente';
}
else if (edad >= 18 && edad < 65)
{
    msg = 'Hola' + nombre_completo + 'tu eres un adulto';
}
else
{
    msg = 'Hola' + nombre_completo + 'tu eres un adulto mayor';
}
}


//salida de datos
alert(msg);