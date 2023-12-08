//! Problema: Desarrollar un programa con dos funciones. La primera solicita el ingreso de un numero y muestra con un alert si es positivo, negativo o nulo.
//! La segunda solicita la carga de dos valores y muestra el producto de los mismos. Llamar a ambas funciones para que se ejecuten.
/* 
function cargaNumero() {
    let user=parseInt(prompt('Ingrese un numero: '));
    if(user==0){
        alert(`Es NULO`);
    } else{
        if(user>0){
            alert(`Es POSITIVO.`);
        }else{
            alert(`Es NEGATIVO`);
        }
    }
}

function dosValores(){
    let user=parseInt(prompt('Ingrese un valor: '));
    let user2=parseInt(prompt('Ingrese el segundo valor: '));
    let producto= user*user2;
    document.write(`El producto de ambos valores es: ${producto}`);
}

cargaNumero();
dosValores(); */

//! Problema 2: Desarrollar una función que solicite la carga de tres valores y muestre el menor. Luego llamar 2 veces a la función.
/* function menor(){
    let numUno=parseInt(prompt('Ingrese el primer numero: '));
    let numDos=parseInt(prompt('Ingrese el segundo valor: '));
    let numTres=parseInt(prompt('Ingrese el tercer valor: '));

    if(numDos<=numDos&&numUno<=numTres){
        document.write(`El menor es: ${numUno}<hr>`);
    } else{
        if(numDos<=numUno&&numDos<=numTres){
            document.write(`El menor es ${numDos}<hr>`);
        } else{
            document.write(`el menor es ${numTres}<hr>`);
        }
    }
}
menor(); */

// todo         ------ Función con parámetros ------

//! Problema: Desarrollar una función que reciba una palabra en minúsculas como parámetro y nos muestre la cantidad de vocales. Llamarla a la función 3 veces con 
//! distintos string.

/* function minusculas(palabra){
    let vocales=0;
    for( elemento of palabra){
        if(elemento=='a'||elemento=='e'||elemento=='i'||elemento=='o'||elemento=='u'){
            vocales++;
        }
    }
    document.write(`La cantidad de vocales de la palabra: <strong>${palabra}</strong> es: ${vocales} <hr>`);
}

minusculas('hola');
minusculas('olivia');
minusculas('culo negro');
minusculas('brenda desiree velardez'); */

//! Problema : Confeccionar una función que reciba tres enteros y los muestre ordenados de menor a mayor. En otra función solicitar la carga de tres enteros por
//! teclado y proceder a llamar a la primer función definida.

/* function menorMayor(a,b,c){
    if(a<b&&a<c){
        document.write(`${a} - `);
        if(b<c){
            document.write(` ${b} - ${c} `);
        } else{
            document.write(`${c} - ${b}`);
        }
    } else{
        if(b<a&&b<c){
            document.write(`${b} - `);
            if(a<c){
                document.write(`${a} - ${c}`);
            }else{
                document.write(`${c} - ${a}`);
            }
        }else{
            if(c<b&&c<a){
                document.write(`${c} - `);
                if(a<b){
                    document.write(`${a} - ${b} `);
                }else{
                    document.write(`${b} - ${a}`);
                }
            }
        }
        
    }
}
function enteros(){
    let carga=parseInt(prompt('Ingrese un valor: '));
    let carga2=parseInt(prompt('Ingrese un segundo valor: '));
    let carga3=parseInt(prompt('Ingrese un tercer valor: '));
    menorMayor(carga,carga2,carga3);
}

enteros(); */

//! Confeccionar una función que muestre la tabla de multiplicar de un numero que le enviemos por parámetro. Luego llamar a dicha función para mostrar las tablas
//! de multiplicar del 2 al 10.
/* function ingresarNumero(){
    let user=parseInt(prompt('Ingrese un numero para saber la tabla de multiplicar: '));
    multiplicar(user);
}
function multiplicar(valor){
    for(let f=1;f<=10;f++){
    document.write(`<strong>${valor} x ${f} =</strong> ${valor*f}<br>`);
    }
}
ingresarNumero(); */

//! Problema: Definir un array vació. Elaborar tres funciones, la primera recibe la referencia del array y se procede a cargar por teclado 5 valores, la segunda
//! recibe el array e imprime el mayor valor y la ultima recibe el array e imprime su suma.

/* function cargar(arreglo){
    for(let f=0;f<5;f++){
        let carga=parseInt(prompt('Ingrese un valor: '));
        arreglo.push(carga);
    }
}
function mayor(arreglo){
    let mayorValor=arreglo[0];
    for(let f=0;f<arreglo.length;f++){
        if(arreglo[f]>mayorValor){
            mayorValor=arreglo[f];
        }
    }
    document.write(`El valor mayor es: <strong>${mayorValor}</strong> <hr>`);
}

function sumar(arreglo){
    let suma=0;
    for(let f=0;f<arreglo.length;f++){
        suma=suma+arreglo[f];
    }
    document.write(` La suma de lo elementos del array es: <strong>${suma}</strong>`);
}
let arrVacio=[];
cargar(arrVacio);
mayor(arrVacio);
sumar(arrVacio); */

//! Problema: Definir dos array vacíos. Elaborar una única función que cargue un vector con 5 enteros. Llamarla a la función dos veces pasando en forma sucesiva
//! el primer y segundo array Vacio. Imprimir los dos array haciendo una única función llamándola dos veces.

/* function cargar(arreglo){
    for(let f=0;f<5;f++){
        let user=parseInt(prompt('Ingrese un valor: '));
        arreglo.push(user);
    }
}
function impresion(texto,arreglo){
    document.write(texto);
    for(let f=0;f<arreglo.length;f++){
        document.write(` ${arreglo[f]}  `);
    }
    document.write(`<hr>`);
}

let arr1=[];
let arr2=[];
cargar(arr1);
cargar(arr2);
impresion("ARRAY 1 :",arr1);
impresion("ARRAY 2 :",arr2);
 */
//! Problema: Definir un array Vacio. Implementar las siguientes funciones: - Una función que reciba un array Vacio y almacene 50 valores aleatorios entre 0 y 1000
//! - Otra función que reciba el array y los ordene de menor a mayor. - La ultima función que imprima el contenido del array.

/* function random(arreglo){
    for(let f=0;f<50;f++){
        let numRandom=Math.floor(Math.random()*1001);
        arreglo.push(numRandom);
    }
}
//**** Función ordenar de menor a mayor ****  (ALGORITMO BURBUJA)
function menorMayor(arreglo){
    let menor=arreglo[0];
   for(let e=0;e<arreglo.length;e++){
    for(let f=0;f<arreglo.length;f++){
        if(arreglo[f]>arreglo[f+1]){
            let aux=arreglo[f];
            arreglo[f]=arreglo[f+1];
            arreglo[f+1]=aux;
        }
    }
   }
}
function imprimir(texto,arreglo){
    document.write(`${texto}<br>`);
    for(let f=0;f<arreglo.length;f++){
        document.write(`${arreglo[f]} - `);
    }
    document.write(`<hr>`);
}
let arr1=[];
random(arr1);
imprimir('Array sin ordenar: ',arr1);
menorMayor(arr1);
imprimir('Array ordenado: ',arr1); */

//! Problema: Elaborar dos funciones: la 1. debe recibir tres números y retornar el valor promedio, la 2 debe recibir un numero y retornar su cuadrado.

/* function promedio(a,b,c){
    return (a+b+c)/3;
}
function cuadrado(a){
    return a**2;
}

document.write(`El promedio es: ${promedio(2,2,2)} y el cuadrado es: ${cuadrado(9)}`);
 */
//! Confeccionar una función que calcule la superficie de un rectángulo y la retorne, la función recibe como parámetro los valores de su base y su altura:
//! cargar por teclado los lados de dos rectángulos y luego mostrar un mensaje cual de ellos tiene superficie mayor.

/* function superficieRectangulo(base,altura){
    return base*altura;
}
let base1=parseInt(prompt('Ingrese la base del Rectangulo: '));
let altura1=parseInt(prompt('Ingrese la altura del Rectangulo: '));
let base2=parseInt(prompt('Ingrese la base del Rectangulo: '));
let altura2=parseInt(prompt('Ingrese la altura del Rectangulo: '));

let superficie1=superficieRectangulo(base1,altura1);
let superficie2=superficieRectangulo(base2,altura2);

if(superficie1>superficie2){
    document.write(`El Rectangulo mayor es: ${superficie1}`);
}else{
    document.write(`El Rectangulo mayor es: ${superficie2}`);
} */

//! Plantear una función que reciba una palabra y retorne la cantidad de letras 'a' o 'A' que contiene.
/* function letraA(valor){
    let aA=0;
    for(elemento of valor){
        if(elemento=='a'||elemento=='A'){
            aA++;
        }
    }
    return aA;
}

document.write(`${letraA('Argentina')}`); */

//! Confeccionar una función que nos retorne el factorial de un numero. El factorial resulta de multiplicar todos los números anteriores e igual a dicho numero.
//! Luego invocar la función para calcular el factorial de los números desde el 2 hasta el 10.

/* function calcularFactorial(valor){   // Algoritmo Factorial // 
    let factorial=1;
    for(let f=1;f<=valor;f++){
        factorial=factorial*f;
    }
    return factorial;
}
document.write(`${calcularFactorial(5)}<hr>`);
for(let f=2;f<=10;f++){
   document.write(`${calcularFactorial(f)}<br>`) ;
}
 */

//! Confeccionar una función que le enviemos un entero y nos retorne true si es par y false si es impar.Llamar a la función esPar 100 veces pasando los valores
//! del 1 al 100.
/* function esPar(valor){
    if(valor%2==0){
        return true;
    }else{
        return false;
    }
}
for(let f=1;f<100;f++){
    let num=Math.floor(Math.random()*101);
    document.write(`${esPar(num)} <br>`);
} */

//! Confeccionar una funcion que reciba un array y retorne por defecto la suma de todos sus elementos.  Con un segundo parametro predeterminado debemos poder indicar
//! a partir de que elemento iniciar su suma. Finalmente un tercer parametro predeterminado indicar hasta que valor afectuar.

/* function sumar(arr, desde = 0, hasta = arr.length){ // Parametro predeterminado  ----
    let suma=0;
    for(let f=desde;f<hasta;f++){
        suma=suma+arr[f];
    }
    return suma;
}

console.log(sumar([1,2,3,4,5]));
console.log(sumar([1,2,3,4,5],3));
console.log(sumar([1,2,3,4,5],2,4)); */

//! Elaborar una funcion que reciba y muestre los datos de una familia. Mostrar el nombre del padre, madre y en el caso de tener hijos con el parametro rest.

/* function family(padre,madre,...hijo){  // Atributo REST //
    document.write(`Padre: <b>${padre}</b> <hr>`);
    document.write(`Madre: <b>${madre}</b> <hr>`);
    if(hijo.length>0){
        document.write(`Hijo: <b>${hijo }</b> `)
    }
}

family('El Osky',' La Brendi del bajo','Olivia',' Noah',' Spike'); */

// 