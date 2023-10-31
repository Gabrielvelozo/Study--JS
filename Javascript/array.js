// todo            ARRAYS
//! Problema 1:  Desarrollar un programa que permita ingresar un arreglo de 8 elementos enteros por teclado, luego calcular e informar:
//! El valor acumulado de los elementos.
//! El valor acumulado de los elementos del arreglo que sean mayores a 36.
//! Cantidad de valores mayores a 50.

/* let practica = [];
let acumulado=0;

for(let i = 0; i<8;i++){
    let valor=parseInt(prompt('Ingresar un valor'));
    practica.push(valor);
    acumulado=acumulado+valor;
}
document.write(`${practica} <hr> `);
let mayor=0;
let mayor50=0;
for(let i =0; i<practica.length; i ++) {
    if(practica[i]>36){
        mayor=mayor+practica[i];
    }
    if(practica[i]>50){
        mayor50++;
    }
    }

document.write(`El valor acumulado de los elementos del arreglo es: ${acumulado} <hr>`);
document.write(`El valor acumulado de los elementos mayores a 36 es: ${mayor} <hr>`);
document.write(`El valor acumulado de los elementos mayores a 50 es: ${mayor50}`); */

//! Problema 2: Realizar un programa que cree dos arreglos numéricos enteros de 4 elementos (por asignación) Sumar los componentes de cada arreglo, dicho 
//! resultado guardarlo en un tercer arreglo del mismo tamaño. Sumar componente a componente.

/* const arr1=[10,20,30,40];
const arr2=[40,30,20,10];
let suma=[];
for(let f=0; f<arr1.length; f++){
    let Sumar=arr1[f] + arr2[f];
    suma.push(Sumar);
}
document.write(`${suma}`);
 */
//! Problema 3: Se tienen las notas del primer parcial de los alumnos de dos cursos, el curso A y B. El curso A tiene 5 alumnos y el B tiene 8 alumnos. 
//! Realizar un programa que muestre el curso que obtuvo el mayor promedio general. Cargar por asignación las notas.
const cursoA=[1,1,1,1,5];
const cursoB=[1,1,1,1,1,1,1,1];
let qCursoA=0;
for(let f=0; f<cursoA.length; f++){
    qCursoA= qCursoA + cursoA[f];
}
let promedioA= qCursoA /cursoA.length;

let qCursoB=0;
for(let f=0; f<cursoB.length; f++) {
    qCursoB= qCursoB + cursoB[f];
}
let promedioB= qCursoB / cursoB.length;

if(promedioA > promedioB){
    document.write(`El mayor promedio es el curso A : ${promedioA}`);
} else{
   if(promedioB>promedioA){
    document.write(`El mayor promedio es el curso B:" ${promedioB}`);
   }else{
    document.write(`Ambos promedios son iguales: ${promedioA} | ${promedioB}`);
   }
} // 88