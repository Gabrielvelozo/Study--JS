//! Definir un objeto que represente un alumno con las propiedades> Nombre, Materia, Nota1, Nota2, Nota3.
//! Iniciialozar las propiedades con distintos valores. Confeccionar una funcion que muestre todos los datos del alumno, mostrar tambien el promedido de las tres
//! notas y un mensaje que promociono si su promedio es >= 7. Desarrollar otra funcion que retorne el promedio de las tres notas del alumno, llamar a la misma
//! desde la primera funcion.

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

//! Definir dos objetos que representen jugadores, agregar como propiedades para cada objeto su nombre, puntaje y nivel. Elaborar una funcion que reciba los datos
//! de un jugador y los muestre por pantalla. Llamar a la funcion pasando en la primera llamada el jugador 1 y luego el jugador 2.
//! Confeccionar una funcion que reciba como parametros los dos jugadores y nos muestre el nombre del que tiene mayor puntaje.

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

//! Crear un objeto llamado empleado1 y pensar que propiedades podemos definir del mismo. Crear otro objeto empleado2 con las mismas propiedades, pero otros valores.
//! Confeccionar una funcion que le enviemos un empleado y lo muestre.

const empleado1={
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
console.log(empleado1);

// 186