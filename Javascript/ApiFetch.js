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

const provincias = [
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
}
