// JSON- método stringify

/* 
* Codificar una pequeña aplicación que permita ingresar tareas en un control input y al presionar se agreguen en forma dinámica a un elemento
* html de tipo ul. Luego agregar un segundo boton que muestre en cuadro de alert el contenido de todos los 'li' en un arreglo con formato JSON
*/
/* const tarea= document.querySelector('#tarea');
const tareas= document.querySelector('#tareas');
document.querySelector('#agregar').addEventListener('click',()=>{
    const li= document.createElement('li');
    li.textContent= tarea.value;
    tareas.appendChild(li);
    tarea.value= '';
})
document.querySelector('#generar').addEventListener('click',()=>{
    const lis= document.querySelectorAll('#tareas li');
    const arreglo= [];
    lis.forEach(elemento => {arreglo.push({tarea:elemento.textContent})
    })
    const formatoJson= JSON.stringify(arreglo);
    alert(formatoJson);
}) */


// JSON- método parse

/* 
* Se tiene  un string con formato JSON que  almacena información de 4 libros en una biblioteca.
* Cada libro tiene los siguientes atributos: titulo, autor, genero y año de publicación.
* Se debe generar en forma dinámica la tabla HTML a partir de los datos de la cadena con formato JSON que debemos
* transformar a un arreglo de Javascript.
*/

/* const cadena = `[{"titulo": "Cien años de soledad", "autor": "Gabriel García Márquez",
    "genero": "Realismo mágico", "añopublicacion": 1967},
    {"titulo": "1984", "autor": "George Orwell", "genero": "Ciencia ficción",
    "añopublicacion": 1949},
    {"titulo": "El señor de los anillos", "autor": "J.R.R. Tolkien",
    "genero": "Fantasía épica", "añopublicacion": 1954},
    {"titulo": "El código Da Vinci", "autor": "Dan Brown",
    "genero": "Ficción de suspense", "añopublicacion": 2003}]`;


const cadenaArreglo= JSON.parse(cadena);
const libros= cadenaArreglo.map(elemento => `<tr><td>${elemento.titulo}</td> <td>${elemento.autor}</td> <td>${elemento.genero}</td> <td>${elemento.añopublicacion}</td> </tr>`)
document.querySelector('#tabla').innerHTML= libros.join(''); */

