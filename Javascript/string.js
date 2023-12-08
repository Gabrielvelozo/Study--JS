
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


/* 
const listaComidas= 'pizza,hamburguesa,empanada,churrasco,chuleta';
const listaPostre= 'helado,pastel,tarta,flan';
const comidas=listaComidas.split(',');
const postres=listaPostre.split(',');


function generarMenus(comidas,postres){
    const menus=[];
    //for clásico
   for(let f=0;f<comidas.length;f++){
    for(let x=0;x<postres.length;x++){
        menus.push(
            {
                comida:comidas[f],
                postre:postres[x],
            }
        )
    }

   } 
   // for of
   for(let comida of comidas){
    for(let postre of postres){
        menus.push(
            {
                comida,
                postre
            }
        )
    }
   } 
   // forEach()
   comidas.forEach(comida=>postres.forEach(postre=>menus.push({comida,postre})))
   return menus;
}
const menus= generarMenus(comidas,postres);
console.log(menus); */

/* 
* Elaborar una función que reciba como primer parámetro una oración y como segundo una palabra.
* Generar otra oración remplazando la aparición de la palabra por asteriscos (Hay que cargar tantos asteriscos como el largo de la palabra)
*/
/* 
const remplazar = (párrafo, palabra)=> párrafo.replaceAll(palabra, '*'.repeat(palabra.length)); 
function remplazar(parrafo, palabra){
    return parrafo.replaceAll(palabra,'*'.repeat(palabra.length));
}

const textos = 'La Argentina se encuentra en Sudamérica. Argentina tiene una población de 45000000 de habitantes.';

const nuevoTexto= remplazar(textos,'Argentina');
console.log(nuevoTexto); 
*/

/* 
* Se tiene un array con elementos de tipo objeto donde se almacenan 10 frases celebres y sus autores.
* Confeccionar una función que reciba el array y una palabra. Retornar un nuevo array con todas las frases que contienen dicha palabra
*/
/* 
const frasesCelebres=[
    { frase: 'La vida es 10% lo que te sucede y 90% como reaccionas a ello.', autor: 'Charles R. Swindoll' },
    { frase:` El amor es una fuerza mas formidable que cualquier otra. Es invisible, no puede ser visto ni medido, pero es lo suficientemente poderoso para transformarte
     en un momento y ofrecerte mas alegría que cualquier passion material podría hacerlo.`, autor:'Barbara De Angelis'},
    {frase: 'No esperes a que las oportunidades te encuentren, créalas tu mismo.', autor: 'Chris Grosser'},
    {frase: 'El éxito no es la clave de la felicidad. La felicidad es la clave del éxito.', autor: 'Albert Schweitzer'},
    {frase: 'El amor es la alegría de los buenos, la reflexión de los sabios, el asombro de los incrédulos.', autor: 'Platón'},
    {frase: 'No hay nada imposible, porque los sueños de ayer son las esperanzas de hoy y pueden convertirse en realidad mañana.', autor: 'Walt Disney'},
    {frase: 'La educación es el arma mas poderosa que puedes usar para cambiar el mundo.', autor: 'Nelson Mandela'},
    {frase: 'La mejor manera de predecir el futuro es crearlo.', autor: 'Peter Drucker'},
    {frase: 'El fracaso es una gran oportunidad para empezar de nuevo con mas inteligencia.', autor: 'Henry Ford'},
    {frase: 'El amor es la fuerza mas humilde, pero la mas poderosa de que dispone el ser humano.', autor: 'Mahatma Gandhi'}
];

function frasesIncludes(frases,palabra){
    return frases.filter(buscar=>buscar.frase.includes(palabra));
    
     let nuevaFrase=[];
    for(let buscar of frases){
        if(buscar.frase.includes(palabra)){
            nuevaFrase.push(buscar.frase);
        }
    } 
    //return nuevaFrase;
}
const frasePalabra = frasesIncludes(frasesCelebres,'educación');
console.log(frasePalabra); */

// 216