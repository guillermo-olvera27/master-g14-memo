//function una_funcion(){
    //console.log(1);
    //console.log(2);
    //console.log(3);

    //return 'Hola mundo';
//}

//una_funcion();

//var mensaje = una_funcion();
//console.log(mensaje);

//----------------------
//function tabla_del_dos(){
  //  for (i = 0; i <=10; i++){
    //    console.log('2 x ', i, '=', 2 * i);
  //  }
//}

//tabla_del_dos();

//function sumatoria(num1, num2){
  //  var total = num1 + num2;

    //return 'La sumatoria es: ' + total;
//}

//var valor_total =sumatoria(9,8);
//console.log(valor_total);

//function     saludo (nombre, edad){

  //  this.nombre = nombre;
    //this .edad = edad;
    //console.log('Hola yo soy:' + "" + this.nombre +  ''  +  "mi edad es:"  + '' + this.edad);
//}
//saludo('jesus', 25);
//function dia_actual(){
   // var fecha = new Date();
    //alert('Hoy es:' + fecha.getDate());

//}
//dia_actual();

// funcion palindromo
function palindromo(str){
    const str_reverso = str.split('').reverse().join('');
    
    return str_reverso === str ? 'es palindromo' : 'no es palindromo';
}
console.log(palindromo("rey"));
console.log(palindromo("ana"));

// funcion par o impar

function imparPar(numero){
    numero = prompt('ingresa el numero por favor')
    if (numero %2 ==0){
        alert("tu numero " + numero + " es par")
    }
    else {
        alert("tu numero " + numero + " es non")

    }
}
imparPar();

