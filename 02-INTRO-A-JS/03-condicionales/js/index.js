//variables
var nombre_completo, año_nacimiento, año_actual;

nombre_completo = prompt('Ingresa tu nombre')
año_nacimiento = Number(prompt('Ingresa tu año de nacimiento '))
año_actual = Number(prompt('Ingresa el año'))

//proceso logico
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

//salida de datos
alert(msg);