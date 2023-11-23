
/* 
* Confeccionar una función que retorne la cantidad de letras 'a' o 'A' tiene una palabra.
*/

/* let palabra=prompt('Ingresar una palabra:');

function letrasA (parametro){
    let contadorA=0;
    for(let letra of parametro){
        if(letra == 'a' || letra == 'A'){
            contadorA++;
        }
    }
   document.write(`Contador= ${contadorA}`);
}
letrasA(palabra); */

/* 
* Se tiene un array con un conjunto de objetos que representan personas.
* Confeccionar una función qeu reciba el array 'personas' y parte del inicio del nombre a buscar.
* Buscar e imprimir todas las personas que comienzan con dicha cadena (mostrar indistintamente si es mayúscula o minúscula), resolver el problema de tres formas:
* - Accediendo al array por medio de subindices.
* - Recorriendo el array mediante el for of.
* - Filtrando el array mediante el método filter().
*/
const personas =[
    {
        nombre: 'Juan Perez',
        edad: 30,
    },
    {
        nombre: 'Maria Lopez',
        edad: 25,
    },
    {
        nombre: 'Pedro Martinez',
        edad: 35,
    },
    {
        nombre: 'Peña Lara',
        edad: 28,
    }
]
function persona (text){
    // filter()
    //personas.filter(argumento => argumento.nombre == parámetro);

    // for of
    for( let parte of personas){
        if(parte.nombre == text){
            console.log(`${parte.nombre}`);
        }
    }
}

console.log(persona('pe'));

//212