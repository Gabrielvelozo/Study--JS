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
const curso1={
    nombre:'React',
    duracion: 40,
    deescripcion: 'Introduccion a la biblioteca React para el desarollo de interfaces visuales',
    instructor:{
        nombre: 'Ana Martinez',
        experiencia: 2,
        descripcion: 'Instructora con mas de 5 años de experiencia en desarrollo web',
    },
    prerrequisitos:['Html','Javascript'],
    mostrar(){
        document.write(`Bienvenidos al curso: ${curso1.nombre} <br> Duracion es ${curso1.duracion} '<br> Instructor: ${curso1.instructor.nombre} <br>`);
        document.write(`Requisitos Deseables: ${curso1.prerrequisitos} <hr>`);
    }
}
curso1.mostrar();
curso1.prerrequisitos.push('CSS');
curso1.mostrar();
curso1.instructor.experiencia=4;
console.log(curso1);
delete curso1.instructor.descripcion;