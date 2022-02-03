/*let carro = {
    llantas: 4,
    color: rojo,
    puertas:5,
};

console.log(carro.color);
console.log(carro.puertas);

console.log(carro['puertas']);*/

/*let perro =
{
    nombre: 'Canelo', color: 'Cafe', edad: 3, raza: 'Doberman',
    ladrar: function(){
        return (`${this.nombre} puede ladrar wau wau`)
    },
    comer: function(){
        console.log('yomi yomi')
    }
};

console.log(perro.ladrar());
console.log(perro.comer());

console.log(perro);

//modificar valores
perro.edad = 5;

//eliminar un valor
delete perro.raza;

//destructuracion */

const animales = ['conejo', 'gato', 'perro', 'rana',];
const [animal1, animal2, animal3, animal4,] = animales;

console.log(`Mi primer mascota fue: ${animal1} y ahora tengo un ${animal2} un ${animal3} y una ${animal4}`);

//----destructura lo que necesites ----

const nombres = ["Zanahoria", "Mei","Taco", "Rene"];

const [nombre0, , nombre2] = nombres;
console.log(`Mis mascotas son: ${nombre0} y ${nombre2}`);


