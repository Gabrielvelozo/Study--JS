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

/* 
* Se tiene una lista con 4 actividades. Algunas están pendientes y otras completadas. Se las diferencia mediante 2 clases.
* Cuando se presione un boton pasar a mostrar en un párrafo las tareas pendientes.
* Crear el archivo CSS y modificar los siguientes estilos para cada una de las dos clases.
*/

/* document.querySelector('#mostrar').addEventListener('click',()=>{
    const pendiente= document.querySelectorAll('.pendientes');
    let listaPendiente= '';
    pendiente.forEach(element=>listaPendiente+=element.textContent + '<br>');
    document.querySelector('#resultado').innerHTML= listaPendiente;
}) */

/* 
* Se dispone una poesía que utiliza una serie de emojis en lugar de sus palabras. 
* Crear una hoja de estilo y definir el tamaño de fuente de 24px para la clase de 'emojis'
* Por otro lado definir un boton que al ser presionado remplace todos los emojis por la palabra que representa dicho emoji.
* Se dispone un array asociado a cada palabra con su respectivo emojis: La pagina previo a presionar el boton se debe mostrar
* con la siguiente interfaz visual
*/
/* const palabrasConEmojis=[
    {emoji:'🌕', palabra:'luna'},
    {emoji:'🌷', palabra:'flores'},
    {emoji:'🍂', palabra:'hojas'},
    {emoji:'🌊', palabra:'mar'},
    {emoji:'✨', palabra:'estrella'}
]
function retornarPalabra(sticker){
    return palabrasConEmojis.find(elemento=>elemento.emoji==sticker).palabra;
}

document.querySelector('#resultado').addEventListener('click',()=>{
    const sticker= document.querySelectorAll('.emojis');
    sticker.forEach(elemento=>elemento.textContent= retornarPalabra(elemento.textContent));
}) */

/* 
* Confeccionar un formulario que permita ingresar el ancho, alto y color de fondo que se debe aplicar a un elemento div.
* Efectuar los cambios en el momento que se presiona un boton.
*/

/* document.querySelector('#actualizar').addEventListener('click',()=>{
    const figura= document.querySelector('#recuadro');
    figura.style.width= document.querySelector('#ancho').value + 'px';
    figura.style.height= document.querySelector('#alto').value + 'px';
    figura.style.backgroundColor= document.querySelector('#color').value;
}) */

/* 
* Se tiene una pagina con distintos elementos HTML. Al presionar un boton cambiar el color
* de los textos de tipo 'P' y elementos de tipo 'LI'.
* Resolverlo obteniendo la referencia de todos los elementos de la pagina y luego recorriendo el
* NodeList identificando si se trata de un elemento 'P' o 'LI'
*/

/* document.querySelector('#cambiar').addEventListener('click',()=>{
    //Ej - con selector universal.
    const elementosHTML= document.querySelectorAll('*');
    elementosHTML.forEach(elemento=>{
        if(elemento.tagName== 'LI' || elemento.tagName == 'P'){
            elemento.style.color= 'green';
        }
    }) 
    // Ej- con selector de etiquetas.
    document.querySelectorAll('li, p').forEach(elemento=>elemento.style.color='red');
}) */

/* 
* Se dispone de una lista desordenada con cuatro 'li' y dentro un hipervínculo 'a'.
* Definir 3 botones para agregar dos clases cada uno, de tal forma que se transforme en un menu de opciones horizontal.
* Ya se tiene la hoja de estilos con las clases necesarias para dar formato al menu de opciones.s
*/
/* const menu= document.querySelector('#menuopciones');
document.querySelector('#boton1').addEventListener('click',()=>{
    menu.className='';
    menu.classList.add('menu','menu-izquierda');
})
document.querySelector('#boton2').addEventListener('click',()=>{
    menu.className='';
    menu.classList.add('menu','menu-derecha');
})
document.querySelector('#boton3').addEventListener('click',()=>{
    menu.className='';
    menu.classList.add('menu','menu-espaciado');
}) */

/* 
* Se tiene 4 imágenes en una subcarpeta llamada 'imágenes', los nombres son 'avatar1.png', 'avatar2.png',
* 'avatar3.png' y 'avatar4.png'
* Se puede comenzar mostrando la imagen 'avatar1.png'
* Confeccionar una aplicación que permita mediante dos botones visualizar los 4 avatares.
* Se debe actualizar el atributo estándar 'src' del elemento 'img'
* Luego también programar para que cuando no haya mas avatares al presionar el boton 'siguiente' el mismo se deshabilite
* La misma lógica para el boton 'anterior'.
* Un boton se deshabilita asignando true al atributo 'disabled'
*/
/*
let seleccionar= 1;
actualizarBoton();
function mostrar(seleccionar){
    document.querySelector('#imagen').src=`../imagenes/avatar${seleccionar}.png`;
}
document.querySelector('#anterior').addEventListener('click',()=>{
    if(seleccionar>1){
        seleccionar--;
        mostrar(seleccionar);
        actualizarBoton();
    }
})
document.querySelector('#siguiente').addEventListener('click',()=>{
    if(seleccionar<4){
        seleccionar++;
        mostrar(seleccionar);
        actualizarBoton();
    }
})
function actualizarBoton(){
    if(seleccionar==1){
        document.querySelector('#anterior').disabled=true;
    }
    if(seleccionar==2){
        document.querySelector('#anterior').disabled=false;
    }    
    if(seleccionar==3){
        document.querySelector('#siguiente').disabled=false;
    }
    if(seleccionar==4){
        document.querySelector('#siguiente').disabled=true;
    }
} */

/* 
* Se tiene una pagina web, que tiene una serie de enances a distintos motores de búsqueda. Algunos tienen la propiedad target y otros no, aquellos que no lo tengan
* agregar la propiedad targed con el valor _blank.
*/

/* const enlaces= document.querySelectorAll('a');
enlaces.forEach(elemento=>{
    if(!elemento.hasAttribute('target')){
        // elemento.target= '_blank';   -- Notación punto . --
        //elemento.setAttribute('target','_blank')  -- Con Método  --
    }
}) */


/* 
* Se dispone de una lista de actividades. Cada actividad tiene un atributo no estándar llamado 'data-estado' donde puede almacenar el valor 'completada' o 'pendiente'
* Al presionar un boton mostrar la cantidad de actividades completadas consultando el atributo no estándar en un alert.
* Resolverlo utilizando: 
* 1. For of de la clase NodeList
* 2. ForEach de la clase NodeList
* 3. reduce() de  la clase Array.
*/

/* document.querySelector('#boton').addEventListener('click',()=>{
    const datos= [...document.querySelectorAll('#actividades li')];
    let cant= 0;
    // For of
     for(let elemento of datos){
        if(elemento.dataset.estado=='completada'){
            //alert(elemento.textContent);
            cant++
        }
    } 
    
    // ForEach()
    datos.forEach(elemento=>{
        if(elemento.dataset.estado=='completada'){
            //alert(elemento.textContent);
            cant++
        }
    }) 
    
    let cantidad= datos.reduce((acumulador, dato)=> dato.dataset.estado=='completada'?acumulador+1:acumulador,0);
    alert(cantidad);
}) */

/* 
* Se dispone de una lista HTML, con valores numéricos. Agregar la clase 'negativo' a los elementos que tienen un valor negativo.
* Obtener la referencia de la lista por su 'id' y posteriormente acceder a todos sus hijos.
* Resolverlo: 
* 1. Acceder a los hijos mediante la propiedad children.
* 2. También resolverlo obteniendo la referencia del primer hijo y recorrerlo con un while obteniendo la referencia de los hermanos.
*/

/* const lista= document.querySelector('#listavalores');
 for(let hijo of lista.children){
    const valor= parseInt(hijo.textContent);
    if(valor<0){
        hijo.className='negativo';
    }
} 
let hijo= lista.firstElementChild;
while(hijo!=null){
    const valor= parseInt(hijo.textContent);
    if(valor<0){
        hijo.className='negativo';
    }
    hijo=hijo.nextElementSibling;
} */

/* const nombre= document.querySelector('#nombre');
const email= document.querySelector('#email');
const clave= document.querySelector('#clave');
const usuarios= document.querySelector('#usuarios');
document.querySelector('#confirmar').addEventListener('click',()=>{
    const filaTabla= document.createElement('tr');
    filaTabla.innerHTML=`<td>${nombre.value}</td><td>${email.value}</td><td>${clave.value}</td>`
    usuarios.append(filaTabla);
}) */

/* let random= Math.floor(Math.random()*100)+1;
const numero= document.querySelector('#num');
const resultado= document.querySelector('#resultados');
console.log(random);
document.querySelector('#validar').addEventListener('click',()=>{
    const lista= document.createElement('li');
    const numeroIngresado= parseInt(numero.value);
    if(numeroIngresado==random){
        lista.textContent=`El numero ingresado ${numeroIngresado} es el correcto, Felicidades!`;
    }
    if(random < numeroIngresado){
        lista.textContent= `El numero que pense es menor a ${numeroIngresado}`;
    }
    if(random > numeroIngresado){
        lista.textContent=`El numero que pense es mayor a ${numeroIngresado}`;
    }
    resultado.append(lista);
}) */

/* document.querySelector('#validar').addEventListener('click',()=>{
 const frases= document.querySelectorAll('#frases li');
 frases.forEach(frase=>{
    if(frase.textContent.toUpperCase().includes('GUERRA')){
        frase.remove();
    }
 })
}) */
/* 
* Disponer un control input de tipo number. Cuando se presione la tecla 'Enter' proceder a mostrar en un párrafo
* los valores de 1 hasta el valor ingresado (no disponer un boton)
* Para identificar si se presiono la tecla enter debemos preguntar por el atributo 'key' si almacena el string 'Enter'
*/
/* document.querySelector('#numero').addEventListener('keyup',evento=>{
   if(evento.key=='Enter'){
    mostrarHasta(parseInt(document.querySelector('#numero').value));
   }
   function mostrarHasta(num){
    let mostrar= '';
    for(let i=0;i<=num;i++){
        mostrar+= i +' - '
    }
    document.querySelector('#ver').textContent=mostrar;
   }
}) */

/* 
* Disponer de un control textarea y en la parte inferior actualizar un párrafo que imprima la cantidad de caracteres
* ingresados. Permitir ingresar solo 50 caracteres.
 */
/* const texto= document.querySelector('#texto');
const ver= document.querySelector('#ver');
texto.addEventListener('keydown',()=>{
    ver.textContent= `Caracteres: ${texto.value.length}`;
}) */

/* 
* Disponer tres cuadrados con los colores rojo, verde y azul, al igual al problema anterior.
* Cuando hacemos doble click sobre el recuadro cambiamos el color de fondo de la pagina.
*/
/* const color= document.querySelectorAll('#recuadros div');
color.forEach(recuadro =>{
   recuadro.addEventListener('dblclick',evento=>{
    document.body.classList.add(evento.target.dataset.color);
   }) 
   color.forEach(recuadro=>{
    recuadro.addEventListener('mouseleave',evento=>{
        document.body.classList.remove(evento.target.dataset.color);
    })
   })

}) */

//269
