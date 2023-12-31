/* function chistes(){
    fetch('https://www.scratchya.com.ar/cursojs/chistealazar.php')
    .then(respuesta => respuesta.json())
    .then(chiste => document.querySelector('#ver').textContent=chiste.descripcion);
}   
chistes();
setInterval(() => chistes(), 5000); */


/* 
* Crear una aplicación que recupere la temperatura de una provincia de argentina. Mostrar una lista HTML con hipervínculos 
* a todas las provincias y al pasar el mouse sobre el enlace proceder a mostrar su temperatura en un párrafo.
*/

/* const provincias = [
    "Buenos Aires",
    "Catamarca",
    "Chaco",
    "Chubut",
    "Córdoba",
    "Corrientes",
    "Entre Ríos",
    "Formosa",
    "Jujuy",
    "La Pampa",
    "La Rioja",
    "Mendoza",
    "Misiones",
    "Neuquén",
    "Río Negro",
    "Salta",
    "San Juan",
    "San Luis",
    "Santa Cruz",
    "Santa Fe",
    "Santiago del Estero",
    "Tierra del Fuego",
    "Tucumán"
];

const lista = provincias.map(provincia => `<li><a href="http://scratchya.com.ar/cursojs/recuperartemperatura.php?provincia=${provincia}">${provincia}</a></li>`)
document.querySelector("#provincias").innerHTML = lista.join("")

const listaEnlace= document.querySelectorAll('#provincias a');
listaEnlace.forEach(enlace =>{
    enlace.addEventListener('mouseenter', evento =>{
        evento.preventDefault();
        recuperarTemperatura(evento.target.href);
    })
})
function recuperarTemperatura(prov){
    fetch(prov)
    .then(respuesta=> respuesta.json())
    .then(provincia => document.querySelector('#resultado').textContent= `Provincia: ${provincia.provincia}, Temperatura: ${provincia.temperatura}`)
} */

/* 
* Crear un formulario que permita consultar todos los artículos cuyo precio se encuentra comprendido entre un monto mínimo y el monto máximo
* Luego al presionar un boton de tipo submit proceda a enviar el formulario y retorne un arreglo JSON con todos los productos que tengan un precio
* comprendido entre los dos montos.
*/

/* const formulario= document.querySelector('#formulario');
const resultado= document.querySelector('#resultado');

formulario.addEventListener('submit', evento => {
evento.preventDefault();
const datosFormulario= new FormData(formulario);
fetch('https://www.scratchya.com.ar/cursojs/consultarpormonto.php',{
    method:'POST',
    body: datosFormulario
})
.then(respuesta => respuesta.json())
.then(articulos => {
const lista= articulos.map(articulo =>`<li>${articulo.nombre} = ${articulo.precio}`);
resultado.innerHTML= lista;
})
}) */

/* 
* Confeccionar una aplicación que nos permita validar la fortaleza de una clave. Para ello se cuenta con API publica, que se le debe
* enviar un arreglo JSON con distintas claves a analizar, luego el servidor nos retorna un arreglo JSON con cada clave y la fortaleza. 
*/
/* const clave= document.querySelector('#clave');
const listaClaves= document.querySelector('#listaclaves');
const resultado= document.querySelector('#resultado');

document.querySelector('#agregar').addEventListener('click',()=>{
    const li= document.createElement('li');
    li.textContent= clave.value;
    listaClaves.append(li);
    clave.value= '';
})

document.querySelector('#verificar').addEventListener('click', evento =>{
    fetch('https://scratchya.com.ar/cursojs/verificarfortalezaclaves.php',{
        method:'POST',
        body:retornarJSON()
    })
    .then(resultado=> resultado.json())
    .then(claves=>{
        const lista= claves.map(clave=>`<li>La clave:<strong>${clave.clave}</strong> es ${clave.fortaleza}</li>`);
        resultado.innerHTML= lista;
    })
})

function retornarJSON(){
    const arregloClaves= [...document.querySelectorAll('#listaclaves li')];
    const listaClaves= arregloClaves.map(clave=>clave.textContent);
    return JSON.stringify(listaClaves);   
} */
/* const formulario= document.querySelector('#form');

formulario.addEventListener('submit', evento =>{
    evento.preventDefault();
    const datosFormulario= new FormData(formulario);
    fetch('https://scratchya.com.ar/cursojs/generartarjeta.php',{
        method:'POST',
        body: datosFormulario
})
    .then(respuesta => respuesta.blob())
    .then(blob => {
        const urlObjeto= URL.createObjectURL(blob)
        const img= document.createElement('img')
        img.src=urlObjeto
        document.querySelector('#resultado').appendChild(img)
    })
}) */

/* 
* Confeccionar un validador de formato JSON, similar al sitio web: https://jsonlint.com
*/

const json= document.querySelector('#json');
const resultado= document.querySelector('#resultado');

document.querySelector('#validar').addEventListener('click',()=>{
    try {
        const objetoJSon= JSON.parse(json.value);
        document.querySelector('#resultado').textContent= `JSON valido`;
    } catch (error) {
        document.querySelector('#resultado').textContent=`JSON invalido`;
    }
})

