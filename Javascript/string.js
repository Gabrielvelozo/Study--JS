
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
/* const personas =[
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
function mostrarPersona (personas, parte){
    // for clásico
     for(let i=0;i<personas.length;i++){
        if(personas[i].nombre.toLowerCase().startsWith(parte.toLowerCase())){
            console.log(personas[i]);
        }
    } 
    //for of
     for(let persona of personas){
        if(persona.nombre.toLowerCase().startsWith(parte.toLowerCase())){
            console.log(persona);
        }
    } 
    //filter()
     const nombrePe=personas.filter(argumento=>argumento.nombre.toLowerCase().startsWith(parte.toLowerCase()));
    console.log(nombrePe); 
}

mostrarPersona(personas,'pe'); */


/* 
* Se tienen dos string con una lista de comidas y postres separados por coma. Crear dos array que almacenen las comidas en uno y los postres en otro
* Seguidamente llamar a una función que le enviemos los dos array y nos retorne otro array con elementos de tipo objeto que surjan de la combinación con cada postre
*/


const listaComidas= 'pizza,hamburguesa,empanada,churrasco,chuleta';
const listaPostre= 'helado,pastel,tarta,flan';
const comidas=listaComidas.split(',');
const postres=listaPostre.split(',');


function generarMenus(comidas,postres){
    const menus=[];
    //for clásico
   /* for(let f=0;f<comidas.length;f++){
    for(let x=0;x<postres.length;x++){
        menus.push(
            {
                comida:comidas[f],
                postre:postres[x],
            }
        )
    }

   } */
   // for of
/*    for(let comida of comidas){
    for(let postre of postres){
        menus.push(
            {
                comida,
                postre
            }
        )
    }
   } */
   // forEach()
   comidas.forEach(comida=>postres.forEach(postre=>menus.push({comida,postre})))
   return menus;
}
const menus= generarMenus(comidas,postres);
console.log(menus);

//214