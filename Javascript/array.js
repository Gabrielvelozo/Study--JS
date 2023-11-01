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
/* const cursoA=[1,1,1,1,5];
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
}  */
//! Problema 4: Cargar un arreglo con 6 elementos enteros. Verificar posteriormente si el mismo esta ordenado de menor a mayor.

/* const arreglo = [];

for(let f=0;f<6;f++){
    let valor=parseInt(prompt('Ingrese un numero'));
    arreglo.push(valor);
}

document.write(`${arreglo} <hr>`);
let menor=true;
for(let f=1;f<arreglo.length;f++){
    if(arreglo[f-1]>arreglo[f]){
        menor=false;
        
    } 
}
if(menor){
    document.write(`Esta ordenado de menor a mayor`);
}else{
    document.write(`No esta ordenado de menor a mayor`);
} */
//! Problema 5: Se desea almacenar los sueldos de un conjunto de operarios. Cuando se ejecuta el programa se debe pedir la cantidad de sueldos a ingresar. Luego
//! almacenar en un arreglo los N sueldos ingresados. Mostrar el contenido del arreglo, la suma de todos sus elementos y el promedio.

/* const sueldos=[];
let ingresar=parseInt(prompt('Ingrese la cantidad de sueldos que desea cargar al sistema:'));
for(let f=0;f<ingresar;f++){
    let elemento=parseInt(prompt('Ingresar el sueldo:'));
    sueldos.push(elemento);
}

document.write(`${sueldos} <hr>`);
let sumaSueldo=0;
for(let f=0;f<sueldos.length;f++){
    sumaSueldo=sumaSueldo+sueldos[f];
}
const promedio=sumaSueldo/sueldos.length;
document.write(`La suma de todos los sueldos es: ${sumaSueldo} <hr>`);
document.write(`El promedio de todos los sueldos es: ${promedio}`);
 */

//! Problema 1: Desarrollar una aplicación que permita ingresar el nombre de un empleado y su sueldo actual (Cargar los datos de 4 empleados). Almacenar cada dato en un 
//! arreglo en las mismas posiciones con el objeto de trabajar con arreglos paralelos. Ingresar posteriormente el nombre de un empleado y en el caso que exista en el
//! arreglo de nombres proceder a mostrar su sueldo. Mostrar un mensaje si no se encuentra cargado dicho nombre.

const empleados=[];
const sueldos=[];
for(let f=0;f<4;f++){
    let nombre=prompt('Ingresar el nombre del empleado: ');
    empleados.push(nombre);
    let ingreso=parseFloat(prompt('Ingresar el sueldo del empleado: $'));
    sueldos.push(ingreso);
}
/* document.write(`${empleados}  <hr> ${sueldos} <hr> `); */
let consulta=prompt('Consulta por un empleado:');
let bandera=false;

for(let f=0;f<empleados.length;f++){
    if(consulta==empleados[f]){
        document.write(`El sueldo del empleado ${empleados[f]} es: $ ${sueldos[f]}`);
        bandera=true;
        break;
    } 
}
if(!bandera){
    document.write(`El empleado no esta ingresado.`);
    
}

//! Problema 2: Cargar un array de N elementos, operador decide cuantos elementos se cargaran en el array. Imprimir el menor y un mensaje si se repite dentro del array.
