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

/* const empleados=[];
const sueldos=[];
for(let f=0;f<4;f++){
    let nombre=prompt('Ingresar el nombre del empleado: ');
    empleados.push(nombre);
    let ingreso=parseFloat(prompt('Ingresar el sueldo del empleado: $'));
    sueldos.push(ingreso);
}
document.write(`${empleados}  <hr> ${sueldos} <hr> `);
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
    
} */

//! Problema 2: Cargar un array de N elementos, operador decide cuantos elementos se cargaran. Imprimir el menor y un mensaje si se repite dentro del array.

/* const valores= [];
let ingreso=parseInt(prompt('Cuantos números desea ingresar?'));

for(let f=0;f<ingreso;f++){
    let user=parseInt(prompt('Ingrese un numero: '));
    valores.push(user);
}
document.write(`${valores} <hr>`);

let menor=valores[0];

for(let f=1;f<valores.length;f++){
    if(valores[f]<menor){
        menor=valores[f];
    }
}
document.write(`El menor es: ${menor}<hr>`);
let repite=0;
for(let f=0;f<valores.length;f++){
    if(valores[f]==menor){
        repite++;
    }
}
if(repite > 1){
    document.write(`El menor: ${menor} se repite`);
} */

//! Problema 3: Definir un array con cinco nombres distintos. Imprimir el menor alfabéticamente.

/* const nombres=[];
for(let f=0;f<5;f++){
    let valor=prompt('Ingresar un nombre: ');
    nombres.push(valor);
}
document.write(`${nombres}`);
document.write(`<br>`);
let menorA=nombres[0];

for(let f=1;f<nombres.length;f++){
    if(nombres[f]<menorA){
        menorA=nombres[f];
    }
}
document.write(`El menor alfabéticamente es : ${menorA}`);
 */
/* let saldos=[1290,5000,10,380,780];

for(let m=0;m<saldos.length;m++){
for(let f=0;f<saldos.length;f++){
    if(saldos[f]>saldos[f + 1]){
        let aux=saldos[f];
        saldos[f]=saldos[f + 1];
        saldos[f +1]= aux;
    }
}
}
for(let f=0;f<saldos.length;f++){
    document.write(`${saldos[f]} - `)
}
 */
//todo ALGORITMO DE ORDENAMIENTO
//! Problema 1: Definir un array donde almacenar los nombres de 5 países. Confeccionar el algoritmo de ordenamiento alfabético. Mostrar antes y después de su ordenamiento.

let countriesAmerica=['Colombia','Paraguay','Uruguay','Ecuador','Argentina'];

document.write(`Antes: ${countriesAmerica} <hr>`);

let countriesAfter=[];

for(let f=0;f<countriesAmerica.length;f++){
    
for(let f=0;f<countriesAmerica.length;f++){
    if(countriesAmerica[f]>countriesAmerica[f+1]){
        let aux=countriesAmerica[f];
        countriesAmerica[f]=countriesAmerica[f+1];
        countriesAmerica[f+1]=aux;
        
    }
}
}
document.write(`Después: ${countriesAmerica}`);

//! Problema 1: Se tiene  un array con los nombres de 4 clubes de futbol y otro array paralelo con los puntos obtenidos por cada club. Ordenar de menor a mayor.
//todo ALGORITMO BURBUJA ORDENAMIENTO
/* let clubes=['River', 'Boca','Belgrano','Talleres'];
let puntos=[15,12,17,14];
for(let f=0;f<clubes.length;f++){
    document.write(`${clubes[f]} = ${puntos[f]} <br>`);
}

for(let q=0;q<clubes.length;q++){
    for(let f=0;f<clubes.length;f++){
        if(puntos[f]<puntos[f+1]){
            let auxClubes=clubes[f];
            clubes[f]=clubes[f+1];
            clubes[f+1]=auxClubes;
            let auxPuntos=puntos[f];
            puntos[f]=puntos[f+1];
            puntos[f+1]=auxPuntos;
        }
        
    }
}
document.write(`<hr>`)
for(let f=0;f<clubes.length;f++){
    document.write(`${clubes[f]} = ${puntos[f]} <br>`);
} */

//! Problema 2: Se tiene un array con componentes de tipo array. Cada componente almacena el nombre de un club y la cantidad de puntos. Ordenar de mayor a menor
//! teniendo en cuenta los puntos del club.

/* let clubes=[['River',15],['Boca',12],['Belgrano',17],['Talleres',14]];

for(let a=0;a<clubes.length-1;a++){
    for(let f=0;f<clubes.length-1-a;f++){
        if(clubes[f][1]<clubes[f+1][1]){
            let aux=clubes[f];
            clubes[f]=clubes[f+1];
            clubes[f+1]=aux;
        }
    }
}
for(let f=0;f<clubes.length;f++){
    document.write(`${clubes[f][0]} - ${clubes[f][1]}<br>`);
} */
//! Problema 3: Crear un array por asignación. El array tiene que tener 5 elementos. Cada elemento debe ser un array el primer array tiene que tener un elemento
//! el se segundo dos elementos, asi sucesivamente. Sumar todos los valores del array.

/* let contenedor=[[1],[1,2],[1,2,3],[1,2,3,4],[1,2,3,4,5,]];
let suma=0;
for(let g=0;g<contenedor.length;g++){
   for(let f=0;f<contenedor[g].length;f++){
    suma=suma+contenedor[g][f];
    }
}

console.log(suma); */

//! Problema 4: Se tiene el siguiente array: let arr1=[[100,7,85,8],[4,8,56,25],[67,89,23,1][78,56]]; Imprimir el array. Fijar con el valor cero todos los elementos + a 50
//! del array principal. Volver a imprimir el array. Fijar con cero todos los elementos de la ultima componente del array principal.

/* let arr1=[[100,7,85,8],[4,8,56,25],[67,89,23,1],[78,56]];
// Recorrer el array
for(let f=0;f<arr1.length;f++){
    for(let e=0;e<arr1[f].length;e++){
        document.write(`${arr1[f][e]} `);
    }
    document.write(`<br>`);
}
document.write(`<hr>`);
// Cambiar mayores a 50.
for(let a=0;a<arr1[0].length;a++){
    if(arr1[0][a]>50){
        arr1[0][a]=0;
    }
}
// Recorrer el array
for(let f=0;f<arr1.length;f++){
    for(let e=0;e<arr1[f].length;e++){
        document.write(`${arr1[f][e]} `);
    }
    document.write(`<br>`);
}
document.write(`<hr>`); // separador

for(let f=0;f<arr1[3].length;f++){
    arr1[3][f]=0;
}
// Recorrer el array
for(let f=0;f<arr1.length;f++){
    for(let e=0;e<arr1[f].length;e++){
        document.write(`${arr1[f][e]} `);
    }
    document.write(`<br>`);
}
 */

//! problema : Confeccionar una aplicación para administrar los días que han faltado los 3 empleados de una empresa. Definir un array de 3 elementos de tipo string
//! para cargar los nombres y un array paralelo para cargar los días que ha faltado cada empleado. Cada elemento del segundo array representan los días que falto cada
//! empleado. Mostrar los empleados con la cantidad de inasistencias. Mostrar la cantidad de empleados que no han faltado.

/* let jobs=[];
let faults=[];

for(let f=0;f<3;f++){
    let jAux=prompt('Ingrese el nombre del empleado: ');
    jobs.push(jAux);
    let cFaults=parseInt(prompt('Ingrese la cantidad de inasistencias en el mes: '));
    faults.push([]);
    for(let r=0;r<cFaults;r++){
        let day=parseInt(prompt('Ingrese los numero de días que falto: '));
        faults[f].push(day);
    }
}
// Recorrer el array
for(let f=0;f<jobs.length;f++){
    for(let e=0;e<jobs[f].length;e++){
        document.write(`${jobs[f][e]} <br>`); 
    }
    document.write(`<br>`);
}
//Imprimir nombres y días que falto el empleado
for(let f=0;f<jobs.length;f++){
    document.write(`${jobs[f]} : `);
    for(let x=0;x<faults[f].length;x++){
        document.write(`${faults[f][x]} - `);
    }
    document.write(`<br>`);
}

console.log(jobs);
console.log(faults); */

// ! Problema : Crear y cargar por asignación un array de 4 elementos y componente también 4 elementos.
//! Imprimir el arreglo completo la diagonal principal.

/* let arrNum=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
for(let x=0;x<arrNum.length;x++){
    document.write(`${arrNum[x][x]} `);
    console.log(`${arrNum[x][x]}`);
} //Imprime la diagonal del array.
document.write(`<hr>`)
for(let f=0;f<arrNum.length;f++){
    document.write(`${arrNum[f][arrNum.length-1-f]} `);
} //Imprime la diagonal inversa.
 */
//! Problema: Crear y cargar por asignación un array de 2 elementos y cada componente un array de 4 elementos. Imprimir el arreglo completo.
//! Intercambiar la primera componente del array principal con el segundo elemento, de tal forma que el array quede con la estructura:

/* const arrNum=[[1,2,3,4],[5,6,7,8]];
//Recorrer el array 
for(let f=0;f<arrNum.length;f++){
    for(let e=0;e<arrNum[f].length;e++){
        document.write(`${arrNum[f][e]}`); 
    }
    document.write(`<br>`);
}
document.write(`<hr>`);
// Invertir los indices del array
let aux=arrNum[0];
arrNum[0]=arrNum[1];
arrNum[1]=aux;
// Recorrer el array
for(let f=0;f<arrNum.length;f++){
    for(let e=0;e<arrNum[f].length;e++){
        document.write(`${arrNum[f][e]}`); 
    }
    document.write(`<br>`);
} */

//! Problema : Crear un array que tenga entre 3 y 10 elementos. Luego cada elemento entre 1 y 10 elementos.
//! Cargar valores aleatorios comprendidos entre 1 y 100 en cada componente. Imprimir todo el array. Imprimir los posiciones vertices.

/* let randomArr=[];
let rFila=Math.floor(Math.random()*8) + 3;
for(let x=0;x<rFila;x++){
    randomArr.push([]);
    let num=Math.floor(Math.random()*10)+1;
    for(let f=0;f<num;f++){
        let valor=Math.floor(Math.random()*100) +1;
        randomArr[x].push(valor);  
    }
}
console.log(randomArr);
// Recorrer el array
for(let f=0;f<randomArr.length;f++){
    for(let e=0;e<randomArr[f].length;e++){
        document.write(`${randomArr[f][e]}  `); 
    }
    document.write(`<br>`);
} 

document.write(`<hr>`);
//Imprimir los vertices.
document.write(`${randomArr[0][0]}`);
document.write(`<br>`);
document.write(`${randomArr[0][randomArr[0].length-1]}`);
document.write(`<br>`);
document.write(`${randomArr[randomArr.length-1][0]}`)
document.write(`<br>`);
document.write(`${randomArr[randomArr.length-1][randomArr[randomArr.length-1].length-1]}`)
 */
//! Problema : Crear un array por asignación con valores enteros, todos distintos. Identificar el mayor elemento del array e indicar en que posición se encuentra
//! respecto al array principal y su posición del array anidado.

/* const array1= [[1,2,3,5,90],[12,20,30,51,96],[100,200],[34,13]];
let mayor=array1[0][0];
let arrayP=0
let arrayH=0;

// Recorrer el array
for(let f=0;f<array1.length;f++){
    for(let e=0;e<array1[f].length;e++){
        if(array1[f][e]>mayor) { // Ubicar el mayor en un array anidado.
            mayor=array1[f][e];
            arrayP=f; // Ubicar dentro de array anidado
            arrayH=e; // Ubicar fila array anidado
        }
    }
    document.write(`<br>`);
} 
document.write(mayor);
document.write(`<hr> ${arrayP}${arrayH}` )
 */

// Todo      -----  FOR OF -----

//! Problema : Crear un array en el cual cada componente represente una carta de un mazo de naipes.
const cartas=[[2,'Diamantes'],[3,'Trébol'],[4,'Picas'],[5,'Corazones'],[5,'Picas']];
//! Imprimir las 5 cartas. Contar cuantas cartas hay de cada tipo
//Recorrer el array
for(cartaArray of cartas){
    for(carta of cartaArray){
        document.write(carta);
    }
    document.write('<br>')
}
// Contar cuantas hay de cada tipo.
let diamante=0;
let corazones=0;
let trébol=0;
let picas=0;
for(tiposArray of cartas){
    for(tipos of tiposArray){
        if(tipos=='Diamantes'){
            diamante++;
        }else{
            if(tipos=='Trébol'){
                trébol++;
            } else{
                if(tipos=='Picas'){
                    picas++;
                } else{
                    if(tipos=='Corazones'){
                        corazones++;
                    }
                }
            }
        }
    }
}
document.write(`<hr>Diamantes: ${diamante}<hr>`);
document.write(`Corazones: ${corazones}<hr>`);
document.write(`Trébol: ${trébol} <hr>`);
document.write(`Picas: ${picas}`);