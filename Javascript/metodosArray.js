//! Confeccionar una funcion flecha que reciba un array como parametro y le agregue un elemento al final con la suma de todos sus elementos actuales.

/* const sumaArr = arr => { // Funcion F L E C H A (expresion)
    let suma=0;
    for(let f=0;f<arr.length;f++){
        suma=suma+arr[f];
    }
    arr.push(suma);

}

const arr1=[1,2,3,4,5];
console.log(arr1);
sumaArr(arr1);
console.log(arr1); */

//! Confeccionar una funcion flecha que reciba 2 array y nos retorne true si tienen la misma cantidad de elementos o false en caso contrario.
//! Confeccionar una segunda funcion que reciba 2 array y nos retorne si tienen la misma informacion en las mismas posiciones.
/* 
const validar=(parametro1,parametro2) => arr1.length == arr2.length;

const validarInformacion=(par1,par2) => {
    if(validar(par1,par2)){
        let igual=true;
        for(let f=0;f<par1.length;f++){
            if(par1[f]!=par2[f]){
                igual=false;
                break;
            }
        }
        return igual;
    }else{
        return false;
        }
    

}

const arr1=[1,2,3,4];
const arr2=[1,2,3,4];
console.log(validar(arr1,arr2));
console.log(validarInformacion(arr1,arr2)); */

//! Confeccionar una funcion que reciba un numero y una funcion call back. El algoritmo de la funcion debe implementar un for que se repita desde el 1 hasta el valor que llega
//! como parametro. Llamar a la funcion callback con el contador del for
//! Llamar a la funcion dos veces, la 1 enviar una funcion => que muestre con un alert() el valor que recibe como parametro. La 2 => mostrar el valor mediante document.write()

/* function contarHasta (valor,callback){
    for(let f=1;f<=valor;f++){
        callback(f);
    }
}
contarHasta(2,detalle=>alert(detalle));
contarHasta(5,detalle=>document.write(`${detalle} <br>`)); // Funcion FLECHA anonima Xq no tiene asignado una variable o constante */


//todo  ------------------------------------------------------------- METODO filter() ---------------------------------------------------------------------------------------------

//!  Se tiene un array con componentes de tipo array que representan un articulo. Se almacena el nombre del producto y su precio. Cargar en otro array los articulos que tienen
//! un precio mayor o igual a 200. Primero resolverlo utilizando un for y luego con el metodo filter del array. 

/* 
const productos=[['Manzanas',120],['Naranjas',150],['Kiwis',280],['Peras',240]];
const mayorPrecio=[];

// Resuelto con For ** 
for(let f=0;f<productos.length;f++){
    for(let t=0;t<productos.length;t++){
        if(productos[f][t]>=200){
            mayorPrecio.push(productos[f]);
        }
    }
}
// Resuelto con For OF **
for(let elemento of productos){
    if(elemento[1]>=200){
        mayorPrecio.push(elemento);
    }
}
console.log(mayorPrecio);
console.log(productos);

// Resuelto con .filter() 
const mayorPrecio2=productos.filter(argumento => argumento[1]>=200);
console.log(mayorPrecio2); */

//todo  ------------------------------------------------------------- METODO map() ---------------------------------------------------------------------------------------------

//!  Se tiene un array con los nombres y claves de usuarios: - Crear un array con los nombres. - Crear otro array con nombres y clave con un string vacio. Usar el metodo .map()
/* 
const usuarios=[['Juan','sd432Xrf%'],['Carlos','$ASGFDTG$%3v'],['Ana','FDSFsdfgh42!'],['Marcos','1@$Zsda']];

//Resuelto con .map()
// - Crear un array con los nombres.
const user=usuarios.map(dato => dato[0]);
console.log(user);

// Crear otro array con nombres y clave con un string vacio.
const pass=usuarios.map(dato=>[dato[0], '']);
console.log(pass);
 */

//todo  ------------------------------------------------------------- METODO fin() & findIndex() ---------------------------------------------------------------------------------

//! Se tiene un array con los nombres y claves de usuarios:

/* const usuarios=[['Juan','sd432Xrf%'],['Carlos','$ASGFDTG$%3v'],['Ana','FDSFsdfgh42!'],['Marcos','1@$Zsda']]; */

//! Mediante el metodo findIndex recuperar el indice de la componente del array usuarios de un nombre que ingresemos por teclado. Mostrar la clave de dicho usuario.

/* let teclado= prompt('Ingrese un nombre de usuario: ');
const indice=usuarios.findIndex(posicion => posicion[0]==teclado);
console.log(indice);
if(indice!=-1){
    console.log('Clave: ' + usuarios[indice][1]);
}else{
    alert('No existe el usuario:  ' + teclado);
} */

//todo  ------------------------------------------------------------- METODO some() & every() ---------------------------------------------------------------------------------
// some() --> Si al menos una condicional se cumple devuelve verdadero [true] - Devuelve un boolean.
// every() --> si todos cumplen la condicion devuelve verdadero - Devuelve un boolean.
//! Crear un array con 10 elementos con valores aletorios compendidos entre 0 y 50. Verificar si al menos se genero un valor 15. Verificar luego si todos los valores generados
//! son menores a 45.

/* const num10=[];
for(let f=0;f<10;f++){
    num10.push(Math.floor(Math.random()*51));
}
console.log(num10);
const num15=num10.some(valor => valor == 15);
const menor45=num10.every(valor => valor < 45);
console.log(num15);
console.log(menor45); */

//todo  ------------------------------------------------------------------ METODO forEach() ---------------------------------------------------------------------------------

// forEach() -->  Recorre  el array de una manera mas simple que for clasico o forOf.

//! Se tiene un array con los nombres y claves de usuarios: Fijar con string vacios las claves de los usuarios.

/* const usuarios=[['Juan','sd432Xrf%'],['Carlos','$ASGFDTG$%3v'],['Ana','FDSFsdfgh42!'],['Marcos','1@$Zsda']];

usuarios.forEach(valor => valor[1]='');

console.log(usuarios); */

//todo  ------------------------------------------------------------------ METODO sort() ------------------------------------------------------------------------------------

// sort() --> Ordena de menor a mayor los string. Para los numeros ej= MenorAMayor[sort((a,b)=> a-b);] - MayorAMenor[sort((a,b)=> b-a);]. MODIFICA EL ARRAY

//! Se tiene un array con componentes de tipo array que representan cada componenete un articulo. Ordenar el arreglo por el precio de menor a mayor.

/* const productos=[['Manzanas',320],['Naranjas',150],['Kiwis',280],['Peras',240]];
//Menor a mayor
productos.sort((a,b)=>a[1]-b[1]);
console.log(productos);  

// Mayor a menor.
 productos.sort((a,b)=>b[1]-a[1]);
console.log(productos); */


//todo  ------------------------------------------------------------------ METODO reduce() & reduceRight() ---------------------------------------------------------------

//reduce() --> Acumula todos los elementos de un array en caso Numerber SUMA - en String CONCATENA

//! Se tiene un array con un conjunto de nombres. Ordenar el arreglo en forma alfabetica useguidamente generar un string con todos los nombres ordenados y separarlos por una ,

/* const nombres=['Juan','Ana','Luis','Carlos','Marcos'];
nombres.sort();
console.log(nombres);
const cadenaNueva=nombres.reduce((acumulador,valor) => acumulador +','+valor);
console.log(cadenaNueva); */

//todo  ------------------------------------------------------- push()| usshift()| pop()| shift()| includes() ----------------------------------------------------------------

//! Crear un array de 50 elementos que respresente un bolillero de loteria entre 1 y 50. La logica a emplear es generar un valor aleatorio comprendido entre 1 y 50. 
//! Verificar si dicho numero se encuentra contenido en el array, en caso negativo agregarlo con el metodo push(). Repetir el proceso hasta que el bolillero tenga 50 elementos.
//!Imprimir el bolillero: - Extraer e imprimir las dos primeras bolillas que coinciden con las posiciones 0 y 1. Controlar que el bolillero haya quedado con 48 bolillas.

/* const bolillero=[];
while(bolillero.length!=50){
    let random=Math.floor(Math.random()*50)+1;
    if(bolillero.includes(random==false){
        bolillero.push(random);
    }
}

document.write(bolillero + '<br>');
bolillero.shift();
bolillero.shift();
document.write(bolillero); */


//todo  ------------------------------------------------------------------ Array() & fill() ---------------------------------------------------------------

//! Confeccionar una funcion que le pasemos dos valores enteros y nos retorne un array que represente una matriz de N filas y N columnas. Se deben inicializar
//! todos los elementos de la matriz con cero.

/* function retornarMatriz (filas,columnas){
    let matriz=new Array(filas);
    for(let f=0;f<filas;f++){
        matriz[f]=new Array(columnas);
        matriz[f].fill(0);
    }
    return matriz;
}
console.log(retornarMatriz(4,10)); */

//todo  --------------------------------------------------------------------------- slice() ----------------------------------------------------------------------------

// Realiza una copia del array
//! Confeccionar una funcion que le pasemos un array con componentes de tipo array y nos retorne una copia de un array anidado de una determinada posicion.
/* function copiarElemento(arreglo,posicion){
   return arreglo[posicion].slice();
}

const arr=[[1,2,3],[4,5,6],[7,8,9]];
const copiaArr=copiarElemento(arr,2);
arr[2][0]='Spike';
console.log(arr);
console.log(copiaArr);
 */

//todo  --------------------------------------------------------------------------- splice() ----------------------------------------------------------------------------

// splice() --> Permite borrar elementos de un array puede utilizar dos parametros y tambien nos permite borrar y agregar elementos.

//! Generar un array con 50 numeros enteros que respresente un bolillero. Cargar valores aleatorios comprendidos entre 1 y 50, no permitir que se repitan.
//! Luego buscar en el array el numero 25 y apartir de dicho valor inclusive, eliminar toodos los elemntos restantes hasta el final del array.
//! Imprimir la cantidad de numeros que quedaron en el bolillero y dichos numeros.

/* let bolillero=[];
while(bolillero.length!=50){
    let random=Math.floor(Math.random()*50)+1;
    if(bolillero.includes(random)==false){
        bolillero.push(random);
    }
}
console.log(bolillero);

let numero25=bolillero.findIndex(parametro => parametro == 25);
console.log(numero25);
let bolillasElminadas=bolillero.splice(numero25);
console.log(bolillasElminadas); */

//todo  --------------------------------------------------------------------------- concat() ----------------------------------------------------------------------------
// concat() --> Retorna un nuevo array al usar el metodo, no modifica los arreglos que utilizan el metodo.

//! Se tiene el siguiente array: Empleando el medotodo concat(), procedert a generar una copia sin array anidados, debe quedar con la sigueinte estructura:
//! [1,2,3,4,5,6,7,8,9] - Este proceso se llama aplanar array.

/* const problema=[[1,2,3],[4,5,6],[7,8,9]];
console.log(problema);
let aplanar=problema[0].concat(problema[1],problema[2]); // Aplanar array.
console.log(aplanar);
 */
//todo  --------------------------------------------------------------------------- join() ----------------------------------------------------------------------------
// join() --> retorna un string con un elemento que se le indique en el parametro.

//! En este problema no deben utilizar el metodo join() sino implementar un algoritmo que remplace en algunas situaciones el metodo join()
//! La funcion UNIR solo debe funcionar para arrays planos. Debe retornoar un string con todos los elementos del array separados por el valor del segundo parametro.

/* function unir(arreglo, parametro = ','){
   let cadena='';
   for(let f=0;f<arreglo.length;f++){
    if(f < arreglo.length - 1){
        cadena= cadena + arreglo[f] + parametro;
    }else{
        cadena=cadena + arreglo[f];
    }
   }
   return cadena;
}
const ejemplo=['Hola','Mundo','Soy el Leon','CastaFuera'];
console.log(ejemplo);
const ejemploUnir=unir(ejemplo,'-');
console.log(ejemploUnir); */

//todo  --------------------------------------------------------------------------- entries() ----------------------------------------------------------------------------
// entries() --> nos devuelvo posicion y valor.

//! Se tiene un array con valores numericos, obtener el mayor elemento del array y su posicion.
/* const practica=[10,45,120,34,16,700];
let mayor=practica[0];
let posicion=0;
for(let elemento of practica.entries()){
    if(elemento[1]>mayor){
        mayor=elemento[1];
        posicion=elemento[0];
    }
}
console.log(`El mayor valor del array es ${mayor} en su posicion ${posicion}`);
 */
//todo  --------------------------------------------------------------------------- spread() ----------------------------------------------------------------------------
// spread() --> la sintaxis que se lo utiliza es ...
//! Se tiene un array con 10 numeros . 1 Mediante el metodo slice() de la clase array extraer los primeros 5 elementos del array y luego llamar al metodo 'max'
//! para obtener el mayor elemento.
//! 2 - Hacer el mismo proceso con los 5 elementos siguientes, pero obtener el menor elemento empleando el metodo 'min' de la clase Math.
//! 3 - Crear otro array que contenga los primeros tres elementos y los ultimos tres elementos del arreglo1. Emplear el metodo slice() y el operador spread()

/* const arreglo=[10,45,3,50,33,16,67,2,1,12];
console.log(arreglo);
console.log(Math.max(...arreglo.slice(0,5)));
console.log(Math.min(...arreglo.slice(5)));
const arreglo2=[...arreglo.slice(0,3), ...arreglo.slice(-3)];
console.log(arreglo2);
 */

 //                                                                   Desestructuracion de Array
 
 //! Confeccionar una funcion que reciba un array con numeros y nos retorne un array con el mayor y menor elemento. - Cuando llamemos a la funcion proceder a
 //! desestructurar el array devuelto en dos tipos de datos primitivos.
 
 function mayorMenor(arreglo){
    let mayor=Math.max(...arreglo);
    let menor=Math.min(...arreglo);
    return [menor,mayor];
 }

const number=[10,56,2,788,12,45];
console.log(number);
const [men, may]=mayorMenor(number);
console.log(`El menor numero del array es: ${men} y el mayor: ${may}`);
