//! Eliminar propiedades -- || delete objeto.propiedad   || --
//! Agregar propiedades -- || objeto.propiedad || --
//! Espacion en blanco -- || objeto['Espacio entre palabras'] || -- 


/* 
* Definir un objeto que represente un alumno con las propiedades> Nombre, Materia, Nota1, Nota2, Nota3.
* Iniciialozar las propiedades con distintos valores. Confeccionar una funcion que muestre todos los datos del alumno, mostrar tambien el promedido de las tres
* notas y un mensaje que promociono si su promedio es >= 7. Desarrollar otra funcion que retorne el promedio de las tres notas del alumno, llamar a la misma
* desde la primera funcion. 
*/

/* const alumno ={
    nombre: 'Noah Evan Velozo',
    materia: 'Ingles',
    nota1: 8,
    nota2: 9,
    nota3: 10,
}
function imprimir (elementosObjetos){
    document.write(`Alumno: ${alumno.nombre} <br> Materia: ${alumno.materia} <br>`);
    document.write(`Nota1: ${alumno.nota1} <br> Nota2: ${alumno.nota2} <br> Nota3: ${alumno.nota3} <br>`);
    document.write(`El promedio de las notas es :${promedio()} `);
    if(promedio() >= 7){
        document.write(` <br> Promociono las materias!!!!`);
    } else{
        document.write(`No promociono`);
    }
}

function promedio (elementos){
    let promedio=(alumno.nota1 + alumno.nota2 + alumno.nota3) /3;
    return promedio;
}
imprimir(alumno); */

/*
* Definir dos objetos que representen jugadores, agregar como propiedades para cada objeto su nombre, puntaje y nivel. Elaborar una funcion que reciba los datos
* de un jugador y los muestre por pantalla. Llamar a la funcion pasando en la primera llamada el jugador 1 y luego el jugador 2.
* Confeccionar una funcion que reciba como parametros los dos jugadores y nos muestre el nombre del que tiene mayor puntaje. 
*/

/* const jugador1={
    nombre: 'Noah Velozo',
    puntaje: 9,
    nivel: 'Profesional',
}

const jugador2={
    nombre: 'Olivia Velozo',
    puntaje: 9,
    nivel: 'Mundial',
}
function imprimir(parametro){
    document.write(`Nombre: ${parametro.nombre} <br> Puntaje: ${parametro.puntaje}<br> Nivel: ${parametro.nivel} <hr>`);

}
function comparar(parametro1,parametro2){
    if(parametro1.puntaje>parametro2.puntaje){
        document.write(`El mejor puntaje entre ambos jugadores es : ${parametro1.nombre}`);
    } else{
        if(parametro2.puntaje>parametro1.puntaje){
            document.write(`El mejor puntaje entre ambos jugadores es : ${parametro2.nombre}`);
        } else{
            document.write(`Ambos tienen el mismo puntaje.`);
        }
    }
}

imprimir(jugador1);
imprimir(jugador2);
comparar(jugador1,jugador2) */

/* 
* Crear un objeto llamado empleado1 y pensar que propiedades podemos definir del mismo. Crear otro objeto empleado2 con las mismas propiedades, pero otros valores.
* Confeccionar una funcion que le enviemos un empleado y lo muestre.
 */

/* const empleado1={
    nombre: 'El Quique',
    sector: 'Analista',
    antiguedad: 3,
    hijos: true,
}

const empleado2={
    nombre: 'El Jacabo',
    sector: 'Limpieza',
    antiguedad: 1,
    hijos: false,
}

function imprimir(params) {
    document.write(`Nombre: ${params.nombre}<br> Sector: ${params.sector} <br> Antieguedad: ${params.antiguedad}<br> Hijos: ${params.hijos} <hr>`) ;
}

imprimir(empleado1);
imprimir(empleado2);
console.log(empleado1); */

/*  
* Definir un objeto llamado 'computadora1' con dos propiedades, una llamada 'cpu' con el valor 'i7' y 'memoria ram' con el valor '16gb'.
* Llamar seguidamente a una funcion que le pasemos el objeto y nos imprima los nombres de las propiedades y sus valores mediante un for in. Agregar por asignacion
* una tercer propiedad llamada 'disco duro' con el valor de '1tb'. Cada modificacion del objeto llamar a la funcion imprimir y su valor, agregar al objeto computadora.
* Ingresar el nombre de una propiedad y mostrar su valor si existe o un mensaje si no existe. Ingresar nuevamente un nombre de propiedad y eliminarla del objeto. 
 */

/* const computadora1= {
    cpu: 'I7',
    'memoria ram': '16gb',
}

function imprimirObjeto(objeto){
    for(let propiedad in  objeto){
        console.log(` ${propiedad} = ${objeto[propiedad]}`);
    }
}
computadora1["disco duro"]= '1tb'; // Agregar propiedad con espacio en blanco
const nuevaPropiedad= prompt('Ingrese una nueva propiedad: ');
const valor=prompt('Ingrese el valor de la propiedad: ')
computadora1[nuevaPropiedad]=valor; // Agregar propiedad y valor
imprimirObjeto(computadora1);

let propiedad=prompt('Ingrese una propiedad cpu/ memoria ram/ disco duro / sistema  : ');

if(propiedad in computadora1){
    console.log(`El valor de la propiedad ${propiedad} es ${computadora1[propiedad]}`);
}else{
    console.log(`No existe la propiedad.`);
}

delete computadora1.cpu; // Eliminar propiedad
imprimirObjeto(computadora1) */

/*  
*Cargar por teclaco el codigo de cliente, nombre y mail. Confeccionar una funcion que le enviemos los tres datos cargados por teclado y nos retorne un objeto cuyos 
*atributos se llamen codigo, nombre, y email. Implementar una segunda funcion que nos imprima los datos del objeto cliente. Cambiar los valores, pero ahora por 
*asignacion, volver a imprimir. 
*/

/* const codigoCliente=prompt('Ingrese el codigo del cliente: ');
const nombre=prompt('Ingrese el nombre del cliente: ');
const email=prompt('Ingrese el email: ');

function objetoCliente(codigo,nombre,email){
    const cliente={
        codigo,
        nombre,
        email
    }
    return cliente;
}
console.log(objetoCliente(codigoCliente,nombre,email));

objetoCliente.codigo='#Sacoa';
objetoCliente.nombre='El Kevin';
objetoCliente.email='sacoa@gmail.com';

function imprimir(params) {
    document.write(`Nombre: ${params.nombre}<br> Codigo: ${params.codigo} <br> Email: ${params.email} <hr>`) ;
}
imprimir(objetoCliente); */

// *?  SINTAXIS Metodos abreviados 
/* const oepracion={
    valor1:10,
    valor2:7,
    sumar(){
        return this.valor1 + this.valor2;
    },
    restar(){
        return this.valor1 - this.valor2;
    }
} */

/* 
* Definir un objero llamado 'tablaMultiplicacion'. Sus atributos son el numero (la tabla de multiplicar 2, 3, etc.), terminos y un metodo que muestre la tabla en pantalla. 
* Luego mostrar la tabla de multiplicacion del 2, 3 y 5.
*/
/* const tablaMultiplicacion={
    numero:2,
    termino:10,
    pantalla(num){
        document.write(`<h2>Tabla de multiplicar del ${this.numero}</h2>`);
        for(let f=1;f<=this.termino;f++){
            document.write(`${this.numero} X ${[f]} = ${this.numero * [f]}<br>` );
        }
    }
}
tablaMultiplicacion.pantalla();
tablaMultiplicacion.numero=3;
tablaMultiplicacion.pantalla();
tablaMultiplicacion.numero=5;
tablaMultiplicacion.pantalla(); */

/* 
* Definir un objeto llamado Alumno1. Definir como propiedades: Nombre, Nota1, Nota2 y Nota3 (Almacenar valores de prueba en cada propiedad). Definir un metodo que muestre el 
* nombre y el promedio de notas y un segundo metodo que informe la cantidad de aplazos (notas menores a 4).
*/

/* const alumno1={
    nombre:'Noah',
    nota1: 10,
    nota2:5,
    nota3:4,
    informacion(){
        document.write(`El nombre: ${this.nombre}<br> Promedio: ${(this.nota1 + this.nota2 + this.nota3) / 3}`)
    },
    aplazos(){
        let aplazo=0;
        if(this.nota1 <= 4){
            aplazo++;
        }
        if(this.nota2 <= 4){
            aplazo++;
        }
        if(this.nota3 <=4){
            aplazo++;
        }
        document.write(`<br>Aplazos: ${aplazo}`);
    }
}

alumno1.informacion();
alumno1.aplazos(); */

/* 
* Se tiene la definicion de un objeto que representa un curso. 
* Confecionar un metodo que muestre el nombre del curso, su duracion, el nombre del instructor y los prerequisitos
* - Aregar como prerequisitos 'CSS' al curso1. 
* - Modificar los años de experiencia a 4. 
* - Eliminar del objeto la descripcion del instructor.
*/
                                             // Todo Propiedades de tipo array y Objeto
/* const curso1={
    nombre:'React',
    duracion: 40,
    deescripcion: 'Introduccion a la biblioteca React para el desarollo de interfaces visuales',
    instructor:{
        nombre: 'Ana Martinez',
        experiencia: 2,
        descripcion: 'Instructora con mas de 5 años de experiencia en desarrollo web',
    },
    prerequisitos:['Html','Javascript'],
    mostrar(){
        document.write(`Bienvenidos al curso: ${curso1.nombre} <br> Duracion: ${curso1.duracion} horas <br> Instructor: ${curso1.instructor.nombre} <br>`);
        document.write(`Requisitos Deseables: ${curso1.prerrequisitos} <hr>`);
    }
}
curso1.mostrar();
curso1.prerequisitos.push('CSS');
curso1.mostrar();
curso1.instructor.experiencia=4;
console.log(curso1);
delete curso1.instructor.descripcion; */

/* 
* Se tiene la definicion de un objeto que representa una pelicula.
* - Imprimir el titulo de la pelicula, la cantidad de actores principales y sus nombres en un metodo que se debe agregar al objeto pelicula.
* - Agregar el genero de 'Fantasia' a la pelicula.
* - Cambiar la calificacion por el valor 9.
* - Mostrar la cantidad de peliculas famosas del director 'George Lucas' (en otro metodo).
*/

/* const pelicula= {
    titulo: 'La guerra de las galaxias',
    duracion: 121,
    descripcion: ' Una pelicula de ciencia ficcion epica que sigue a un grupo de heroes en su lucha contra el imperio galactico',
    actores:['Mark Hamill','Harrison Ford','Carrie Fisher'],
    calificacion: 8.7,
    generos:['Ciencia Ficcion','Aventura'],
    director:{
        nombre:'George Lucas',
        peliculasFamosas: ['La guerra de las galaxias','Indiana jones'],
    },
    impirmir(){
        document.write(`Titulo: ${pelicula.titulo} <br> Actores Principales: ${pelicula.actores.length} <br> Nombres Actores: ${pelicula.actores}`);
    },
}
pelicula.generos.push('Fantasia');
pelicula.impirmir();
pelicula.calificacion=9;
console.log(pelicula); */


/* 
* Se cuenta con array con cuatro objetos que almacenan datos de distintos paises: Confeccionar las siguientes funciones
* 1 Imprimir todos los datos paises
* 2 Pais con mayor poblacion
* 3 Confeccionar una funcion que se le envie un idioma y luego imprima la cantidad de paises que hablan dicho idioma 'Español', 'Portugues'
* 4 Imprimir paises que siembran 'Soja'
* 5 Promedio de vida de las mujeres teniendo en cuenta los 4 paises.
*/
/* const paises = [
    {
        nombre: "Argentina",
        capital: "Buenos Aires",
        poblacion: 46_000_000,
        moneda: "Peso Argentino",
        idioma: "Español",
        agricultura: ["trigo", "maiz", "soja"],
        expectativaVida: {
            hombres: 75,
            mujeres: 79
        }
    },
    {
        nombre: "Brasil",
        capital: "Brasilia",
        poblacion: 200_000_000,
        moneda: "Real",
        idioma: "Portugues",
        agricultura: ["trigo", "cebada"],
        expectativaVida: {
            hombres: 74,
            mujeres: 78
        }
    },
    {
        nombre: "Uruguay",
        capital: "Montevideo",
        poblacion: 3_000_000,
        moneda: "Peso Uruguayo",
        idioma: "Español",
        agricultura: ["soja"],
        expectativaVida: {
            hombres: 81,
            mujeres: 84
        }
    },
    {
        nombre: "Chile",
        capital: "Santiago",
        poblacion: 19_000_000,
        moneda: "Peso Chileno",
        idioma: "Español",
        agricultura: ["maiz", "cebada"],
        expectativaVida: {
            hombres: 80,
            mujeres: 82
        }
    }
];
// 1 -
function imprimir(pais){
   for(let dato of pais){
    document.write(`${dato.nombre} <br> ${dato.capital} <br> ${dato.poblacion} <br> ${dato.moneda}<br>${dato.idioma}<br>${dato.expectativaVida.hombres}<br>${dato.expectativaVida.mujeres}<br>`);
    for(let agro of dato.agricultura){
        document.write(agro + '<br>');
    }
    document.write(`<br><br>`);
   }   
}

// 2 - 
function paisMayorPoblacion(paises){
    let mayorPoblacion=paises[0];
    for(let pais of paises){
        if(pais.poblacion > mayorPoblacion.poblacion){
            mayorPoblacion=pais;
        }
    }
    document.write(`El pais con mayor poblacion es, ${mayorPoblacion.nombre} con ${mayorPoblacion.poblacion} habitantes <hr>`);
}

// 3 - 
function cantidadIdiomas(paises,idioma){
    let cantidadP=0;
    for(let pais of paises){
        if(pais.idioma == idioma){
            cantidadP++;
        }
    }
    document.write(`La cantidad de paises de idioma ${idioma} son: ${cantidadP}<br>`);
}

// 4 - 
function paisesSoja(paises){
  for(let pais of paises){
    if(pais.agricultura.includes('soja')){
        document.write(`${pais.nombre} <br>`);
    }
  }
}

// 5 - 
function promedioVida(paises){
    let pVida=0;
    for(let promedio of paises){
        pVida+=promedio.expectativaVida.mujeres;
    }
    document.write(`El promedio de vida de las mujeres es : ${pVida/paises.length}`);
}


imprimir(paises);
paisMayorPoblacion(paises);
cantidadIdiomas(paises,'Español');
cantidadIdiomas(paises,'Portugues');
paisesSoja(paises);
promedioVida(paises); */

/* 
* Se cuenta con un array con datos de varios deportistas: Confeccionar las siguientes funciones.
* 1 - Imprimir todos los datos de los deportistas
* 2 - Imprimir los deportistas que han obtenido medallas de oro.
* 3 - Ordenar los deportistas por edades de menor a mayor, luego volver a imprimir los datos.
* 4 - imprimir la cantidad total de medallas de cada participante.
*/
const deportistas = [
    {
        nombre: "Juan",
        apellido: "Perez",
        edad: 20,
        deporte: "Pesas",
        medallas: [
            {
                tipo: "oro",
                cantidad: 2
            },
            {
                tipo: "bronce",
                cantidad: 1
            }
        ]
    },
    {
        nombre: "Pedro",
        apellido: "Gonzalez",
        edad: 25,
        deporte: "Futbol",
        medallas: [
            {
                tipo: "oro",
                cantidad: 1
            },
            {
                tipo: "plata",
                cantidad: 3
            },
            {
                tipo: "bronce",
                cantidad: 3
            }
        ]
    },
    {
        nombre: "Maria",
        apellido: "Lopez",
        edad: 22,
        deporte: "Tenis",
        medallas: []
    },
    {
        nombre: "Ana",
        apellido: "Martinez",
        edad: 21,
        deporte: "Natacion",
        medallas: [
            {
                tipo: "plata",
                cantidad: 1
            }
        ]
    },
    {
        nombre: "Marta",
        apellido: "Gomez",
        edad: 20,
        deporte: "Natacion",
        medallas: [
            {
                tipo: "plata",
                cantidad: 1
            },
            {
                tipo: "bronce",
                cantidad: 1
            }
        ]
    }
]
// 1 - Imprimir todos los datos de los deportistas
function imprimir(deportistas){
    //? forEach()
   //deportistas.forEach(deportista=>console.log(deportista));
   //? for of
   /* for(let deportista of deportistas){
    console.log(deportista);
   } */
   //? for in
   /* for(deportista in deportistas){
    console.log(deportistas[deportista]);
   } */
   //? for clasico
   /* for(let i=0;i<deportistas.length;i++){
    console.log(deportistas[i]);
   } */
   //? map()
   /* const imprimirDeportista=deportistas.map(deportista=>deportista);
   console.log(imprimirDeportista); */
}

imprimir(deportistas);

// 2 - Imprimir los deportistas que han obtenido medallas de oro.
function medallaOro(deportistas){
    //?filter()
    /* const deportistaOro=deportistas.filter(deporista=>deporista.medallas.filter(medalla=>medalla.tipo == 'oro').length)
    console.log(deportistaOro); */
    //? for of
    /* for(let deporista of deportistas){
        for(let medalla of deporista.medallas){
            if(medalla.tipo == 'oro'){
                console.log(deporista.nombre);
            }
        }
    } */
    
}
medallaOro(deportistas);












//! ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* // 1 - 
function imprimir(deportistas){
    //? deportistas.forEach(deportista => console.log(deportista)); // forEach()
    for(let deporte of deportistas){   // for of()
        console.log(deporte);
    }
}
//imprimir(deportistas);

// 2 - 
function medallaOro(deportistas){
    //? for of
    for(let deportista of deportistas){
       for(let medalla of deportista.medallas){
        if(medalla.tipo == 'oro'){
            console.log(`${deportista.nombre}`);
        }
       }
    } 

    //? Filter()
   const deportistaOro=deportistas.filter(deportista=>deportista.medallas.filter(medalla => medalla.tipo == 'oro').length ==  1);
   console.log(deportistaOro);
}
//medallaOro(deportistas);

// 3 - 
function menorAMayor(deportistas){
    //? algoritmo de ordenamiento
     for(let k=1; k<deportistas.length;k++){
        for(let f=0;f<deportistas.length - k;f++){
            if(deportistas[f].edad>deportistas[f+1].edad){
                let aux=deportistas[f];
                deportistas[f]=deportistas[f+1];
                deportistas[f+1]=aux;
            }
        }
    } 
    //? metodo sort()
    deportistas.sort((a,b)=> a.edad -b.edad);
    
    console.log(deportistas);
}
//menorAMayor(deportistas);

// 4 -
function participanteMedalla(deportistas){
    //? for of
    for(let deportista of deportistas){
        let cantidad=0;
        for(let medalla of deportista.medallas){
            cantidad+=medalla.cantidad;
        }
        console.log(`${deportista.nombre} ${cantidad}`);
    } 
    //? map() & reduce()
    const deportistaMedalla=deportistas.map(deportista=>deportista.nombre + ' = ' + deportista.medallas.reduce((acumulador, medalla)=> acumulador+medalla.cantidad,0)) ;
    console.log(deportistaMedalla);
}
participanteMedalla(deportistas); */

/* 
* Una inmobiliaria tiene una serie de inmuebles para el alquiler almacenados en un array con elementos de tipo objeto.
* 1 - Imprimir todos los datos del inmuble. forEach()
* 2 - Imprimir los inmubles con 4 o mas cuartos y garaje.
* 3 - Confeccionar una funcion que imprima todas las viviendas de un cierto tipo que llega como parametro.
*/

/* const inmuebles = [
    {
        id: 1,
        tipo: "Casa",
        precio: 10000,
        caracteristicas: {
            cuartos: 4,
            baños: 2,
            garage: true
        },
        ubicacion: {
            ciudad: "Córdoba",
            calle: "Colon 112"
        }
    },
    {
        id: 2,
        tipo: "Departamento",
        precio: 20000,
        caracteristicas: {
            cuartos: 3,
            baños: 1,
            garage: false
        },
        ubicacion: {
            ciudad: "Córdoba",
            calle: "Lima 234"
        }
    },
    {
        id: 3,
        tipo: "Departamento",
        precio: 30000,
        caracteristicas: {
            cuartos: 5,
            baños: 2,
            garage: true
        },
        ubicacion: {
            ciudad: "Córdoba",
            calle: "Urquiza 765"
        }
    },
    {
        id: 4,
        tipo: "Casa",
        precio: 12000,
        caracteristicas: {
            cuartos: 3,
            baños: 1,
            garage: false
        },
        ubicacion: {
            ciudad: "Carlos Paz",
            calle: "San Martin 765"
        }
    }
] */

// 1 - Imprimir todos los datos del inmuble. 
// ?forEach()
//inmuebles.forEach(alquiler=>console.log(alquiler)); 
//? for in
/* for(alquiler in inmuebles){ 
    console.log(inmuebles[alquiler]);
} */
//? for of
/* for(let alquiler of inmuebles){
    console.log(alquiler);
} */
//? for clasico
/* for(let i=0;i<inmuebles.length;i++){
    console.log(inmuebles[i]);
} */

// 2 - Imprimir los inmubles con 4 o mas cuartos y garaje.
/* 
//?filter()\
const cuatroCuartos=inmuebles.filter(alquiler=>alquiler.caracteristicas.cuartos >= 4 && alquiler.caracteristicas.cuartos);
console.log(cuatroCuartos); */
/* 
//?for of
for(let inmueble of inmuebles){
   if(inmueble.caracteristicas.cuartos>=4 && inmueble.caracteristicas.garage){
    console.log(inmueble);
   }
} */
/* 
//? for clasico
for(let i=0;i<inmuebles.length;i++){
    if(inmuebles[i].caracteristicas.cuartos>=4 && inmuebles[i].caracteristicas.garage){
        console.log(inmuebles[i]);
    }
} */

// 3 - Confeccionar una funcion que imprima todas las viviendas de un cierto tipo que llega como parametro.

/* function inmuebleTipo(inmubles,parametro){
//? filter()
    const tipoInmueble=inmubles.filter(inmueble=>inmueble.tipo == parametro);
    console.log(tipoInmueble);
}
inmuebleTipo(inmuebles,'Casa');
inmuebleTipo(inmuebles,'Departamento'); */