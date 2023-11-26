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
const valores=[parseInt(document.querySelector('#item1').textContent),parseInt(document.querySelector('#item2').textContent),parseInt(document.querySelector('#item3').textContent)];
document.querySelector('#mayor').innerHTML=Math.max(...valores);