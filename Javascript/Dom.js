// document.querySelector(#id a trabajar) 
// .textContent = 'Solo texto'
// .innerHTML = 'Texto y etiquetas HTML'

/* 
* Generar un bolillero con los números del 1 al 50 en orden aleatorio. Mostrar los números en la pagina web accediendo al ID de un elemento
* Mostrar en otro elemento los primeros 6 números. Se cuenta con una pagina HTML básica donde se la debe modificar para mostrar los valores del bolillero
*/

/* const bolillero=[]; 

while(bolillero.length!=50){
    const aleatorio= Math.floor(Math.random()*50)+1;
    if(!bolillero.includes(aleatorio)){
        bolillero.push(aleatorio);
    }
    
};
document.querySelector('#numeros').innerHTML=bolillero.join(' - ');
document.querySelector('#numerosganadores').innerHTML=bolillero.slice(0,6).join(' - '); */


/* 
* Se tiene almacenado en un array 4 chistes. 
* 1 Mostrar en un párrafo alguno de los 4 chistes en forma aleatoria al cargar la pagina
* 2 Modificar luego el programa para que reemplace los puntos de las oraciones de los chistes por el elemento <br>
*/

/* 
function chisteRandom(){
    const chistes=[
   'Conocí a mi novia en un ascensor. Dice que soy el amor de subida.',
   'Como se llama un boomerang que no vuelve? Palo',
   'El otro dia vendí mi aspiradora. Lo único que hacia era acumular polvo.',
   'Iba a contar un chiste sobre sodio. Pero Na'
       ];
    return chistes[Math.floor(Math.random()*chistes.length)].replaceAll('.','<br>');
}
document.querySelector('#chiste').innerHTML=chisteRandom();
 */

/* 
* Se tiene un <ul> con 4 elementos de tipo list item <li> cuyos contenidos son los valores del 1 al 4. Agregar el valor al castellano seguido al numero. 
* Intentar resolverlo utilizando una estructura repetitiva.
*/
/* const numCastellano=['Uno','Dos','Tres','Cuatro'];
for(let f=1;f<=4;f++){
    document.querySelector(`#item${f}`).textContent+=(` ${numCastellano[f-1]}`);
} */

/* 
* Se tiene una lista desordenada <ul> con 3 valores numéricos cualquiera. Inmediatamente se carga la pagina, proceder a recuperar los tres contenidos de los <li> y verificar
* cual es el mayor de los mismos.
* Tener en cuenta que la propiedad 'TextContent siempre retorna un string
*/
/* const valor1=parseInt(document.querySelector('#item1').textContent);
const valor2=parseInt(document.querySelector('#item2').textContent);
const valor3=parseInt(document.querySelector('#item3').textContent);
if(valor1 > valor2 && valor1> valor3){
    document.querySelector('#mayor').textContent=valor1;
} else{
    if(valor2>valor3){
        document.querySelector('#mayor').textContent=valor2;
    }else{
        document.querySelector('#mayor').textContent=valor3;
    }
} */
/* const valores=[parseInt(document.querySelector('#item1').textContent),parseInt(document.querySelector('#item2').textContent),parseInt(document.querySelector('#item3').textContent)];
document.querySelector('#mayor').innerHTML=Math.max(...valores); */

/* 
* Mostrar una frase celebre en un párrafo. Disponer un elemento input que permita ingresar un texto. Cuando se presione un botón mostrar un párrafo si la palabra 
* ingresada se encuentra contenida en la frase.
*/

/* document.querySelector('#boton1').addEventListener('click',()=>{
  const frase= document.querySelector('#frase').textContent;
  let palabra= document.querySelector('#editor1').value;
  if(frase.includes(palabra)){
    document.querySelector('#resultado').textContent= `La palabra '${palabra}' esta incluida en la frase celebre`;
  } else{
    document.querySelector('#resultado').textContent= `La palabra '${palabra}' no esta incluida en la frase!!`;
  }
}) */

/* 
* Se dispone un array con las calorías de distintas frutas: 
* Solicitar en un formulario que el usuario ingrese el nombre de una fruta y luego muestre la cantidad de calorías de la misma o un mensaje que no se tiene dicha información.
*/
/* const frutas=[
    {nombre:'manzana',calorias:52},
    {nombre:'banana', calorias:89},
    {nombre:'naranja',calorias:47},
    {nombre:'uva',calorias:67},
    {nombre:'kiwi',calorias:61},
    {nombre:'pera',calorias:57},
    {nombre:'mango',calorias:99},
    {nombre:'piña',calorias:50},
    {nombre:'sandia',calorias:30},
    {nombre:'melon',calorias:34}
];

function verFrutas(frutas){
    const nombreFrutas= frutas.map(fruta=>fruta.nombre);
   document.querySelector('#nombre').textContent= nombreFrutas.join(' -  ');
}
verFrutas(frutas);


document.querySelector('#calorias').addEventListener('click',()=>{
    const nombreFruta= document.querySelector('#fruta').value;
    const calorias= retornarCalorias(fruta);
    if(calorias!=null){
        document.querySelector('#detalle').textContent= `La cantidad de calorias de ${nombreFruta} es ${calorias}`;
    }else{
        document.querySelector('#detalle').textContent= `No tenemos registro de la fruta`;
    }
})

function retornarCalorias(fruta){
    const frutaBuscada= frutas.find(frutaActual=>frutaActual.nombre==fruta);
    if(frutaBuscada!=null){
        return frutaBuscada.calorias;
    }
    return null;
} // No esta terminado!!! */

/* 
* Se dispone un array con las calorias de distintas frutas. Crear un formulario con dos controles de tipo radio para permitir seleccionar las frutas con altas calorias
* (>=50) o bajas calorias (<50). Al presionar un boton mostrar las frutas que pertenecen a dicha categoría.
*/

/* const frutas=[
    {nombre:'manzana',calorias:52},
    {nombre:'banana', calorias:89},
    {nombre:'naranja',calorias:47},
    {nombre:'uva',calorias:67},
    {nombre:'kiwi',calorias:61},
    {nombre:'pera',calorias:57},
    {nombre:'mango',calorias:99},
    {nombre:'piña',calorias:50},
    {nombre:'sandia',calorias:30},
    {nombre:'melon',calorias:34}
];
function frutasNombre(){
    const nombresFrutas= frutas.map(fruta=>fruta.nombre);
    document.querySelector('#nombre').textContent=nombresFrutas.join('-');
}
 frutasNombre(frutas); 

document.querySelector('#validar').addEventListener('click',()=>{
    const altas=document.querySelector('#altascalorias');
    const bajas=document.querySelector('#bajascalorias'); */
    
    /* // Métodos de Array = Filter() & Map()
    const datosCalorias=frutas.filter( fruta => (
        (altas.checked && fruta.calorias >=50) ||
        (bajas.checked && fruta.calorias <50)))
        .map(fruta=> `${fruta.nombre} = ${fruta.calorias}`);
        document.querySelector('#resultado').innerHTML=datosCalorias.join('<br>') */
    
    // Estructura condicional if
   /*  if(document.querySelector('#altascalorias').checked){
        const altas=frutas.filter(fruta=>fruta.calorias >=50);
        let mostrar=altas.map(fruta=> `${fruta.nombre} = ${fruta.calorias} `);
        document.querySelector('#resultado').innerHTML=mostrar.join('<br>');
        }
    if(document.querySelector('#bajascalorias').checked){
        const bajas=frutas.filter(fruta=>fruta.calorias <50);
        let mostrar=bajas.map(fruta=> `${fruta.nombre} = ${fruta.calorias} `);
        document.querySelector('#resultado').innerHTML=mostrar.join('<br>');
            } */
    
  /*   // For of
    const datosCalorias=[];
    for(fru of frutas){
        if(altas.checked && fru.calorias >=50){
            datosCalorias.push(`${fru.nombre} = ${fru.calorias}`);
        }
        if(bajas.checked && fru.calorias <50){
            datosCalorias.push(`${fru.nombre} = ${fru.calorias}`);
        }
    }
    document.querySelector('#resultado').innerHTML=datosCalorias.join('<br>'); 

    });
*/

/* 
* Mostrar 4 checkbox con materias de una carrera informática. Cuando se presione un boton validar que 
* solo se hayan seleccionado un máximo de 2.
*/

/* document.querySelector('#verificar').addEventListener('click',()=>{
    const sistema=document.querySelector('#sistemas');
    const inteligencia=document.querySelector('#inteligencia');
    const ciencia=document.querySelector('#ciencia');
    const programar=document.querySelector('#programacion');
    let contador=0;
    if(sistema.checked){
        contador++;
    }
    if(inteligencia.checked){
        contador++;
    }
    if(ciencia.checked){
        contador++;
    }
    if(programar.checked){
        contador++;
    }
    if(contador>2){
        document.querySelector('#dato').innerHTML=`Debe solo tildar dos opciones.`;
    }else{
        document.querySelector('#dato').innerHTML=`Selecciono un numero correcto.`
    }
    
}) */

/* 
* Mostrar en un control select una serie de emojis. Pedir al usuario que escriba en castellano que palabra
* representa. Al presionar un boton informar si el dato ingresado es correcto o no.
*/
/* document.querySelector('#verificar').addEventListener('click', ()=>{
    const palabra=document.querySelector('#palabra').value;
    const seleccion=document.querySelector('#emojis').value;
    if(palabra == seleccion){
        document.querySelector('#texto').textContent=`Adivinaste la palabra.`;
    }else{
        document.querySelector('#texto').textContent=`La palabra correcta es ${seleccion.toUpperCase()}`;
    }
}) */

/* 
* Confeccionar un formulario que permita ingresar un comentario en un textarea.
* Al presionar un boton mostrar un mensaje si el usuario ha ingresado alguna palabra censurada.
* Las palabras censuradas se encuentran almacenadas en un array.
*/
/* const palabrasCensuradas=['inútil','tonto','bobo'];

document.querySelector('#mostrar').addEventListener('click',()=>{
    const comentario= document.querySelector('#comentario').value; //.split('opcional');
    console.log(comentario);
    let censura= false;
    for(let censurada of palabrasCensuradas){
        if(comentario.includes(censurada)){
            censura= true;
            break;
        }
    }
    if(censura){
        document.querySelector('#texto').textContent= `El texto ingresado contiene palabras ofensivas.`;
    }else{
        document.querySelector('#texto').textContent= `El texto ingresado no contiene palabras ofensivas.`;
    }
    
}) */

/* 
* Confeccionar un formulario que solicite el ingreso de una clave de al menos 8 caracteres.
* En un segundo control input de tipo password se debe repetir el ingreso de la clave.
* Cuando se presione un boton validar que las dos claves sean iguales y tengan al menos 8 caracteres.
* Agregar un segundo boton que al ser presionado se muestre un alert() con las dos claves visibles para
* que el operador pueda corroborar los textos ingresados.
*/

/* document.querySelector('#verificar').addEventListener('click',()=>{
    const clave= document.querySelector('#clave').value;
    const clave1= document.querySelector('#clave1').value;
    if(clave != clave1){
        document.querySelector('#resultado').textContent= `Las contraseñas son incorrectas.`;
        return;
    }
    if(clave.length <8){
        document.querySelector('#resultado').textContent= 'Debe cumplir con 8 caracteres como mínimo.';
        return;
    }
    document.querySelector('#resultado').textContent= `Clave valida.`;
})

document.querySelector('#ver').addEventListener('click',()=>{
    const clave= document.querySelector('#clave').value;
    const clave1= document.querySelector('#clave1').value;
    alert(`Primera: ${clave}\nSegunda: ${clave1}`);
}) */




