// TODO                Estructuras Secuenciales  

/* let num1 = parseInt(prompt("Ingrese un número: "));
let num2 = parseInt(prompt("Ingrese un número: "));
let num3 = parseInt(prompt("Ingrese un número: "));
let num4 = parseInt(prompt("Ingrese un número: "));
let suma = num1 + num2;
let producto = num3 * num4;
document.write("La suma de los dos primeros números es: " + suma);
document.write("  El producto entre el tercer y cuarto número es: " + producto); */

/* let producto = parseFloat(prompt("Ingrese el precio del producto: "));
let cantidad = parseInt(prompt("Ingrese la cantidad de productos: "));
let totalPagar = producto * cantidad;
document.write("El total a pagar es: $ " + totalPagar); */

/* let hora = 1;
let horaPorDia = hora * 24;
let minutos = horaPorDia * 60;
let segundos = minutos * 60;
document.write(
  `La cantidad de horas que tiene un día son: ${horaPorDia}, la cantidad de minutos por día son: ${minutos} y la cantidad de segundos por día son: ${segundos}`
); */

/* let fechaNacimiento = parseInt(prompt("Ingrese el año de nacimiento: "));
let añoActual = parseInt(prompt("Ingrese el año actual: "));
let edadPersona = añoActual - fechaNacimiento;
document.write("Tu edad aproximada es: " + edadPersona); */

/* let valor1 = parseInt(prompt("Ingresar el primer valor: "));
let valor2 = parseInt(prompt("Ingresar el segundo valor: "));
let valor3 = parseInt(prompt("Ingresar el tercer valor: "));
let valor4 = parseInt(prompt("Ingresar el cuarto valor: "));
let suma = valor1 + valor2 + valor3 + valor4;
let promedio = suma / 4;
document.write(`La suma de los cuatro valores es ${suma} y el promedio es ${promedio}`); */

//TODO                     Estructuras condicionales 

// !Problema 1 : Ingresar por teclado 3 notas de un alumno. Calcular el promedio. Mostrar un mensaje por pantalla que diga "Promocionado"
// !en caso que el promedio sea mayor o igual a 7.

/* let nota1 = parseInt(prompt("Ingrese la nota del primer alumno: "));
let nota2 = parseInt(prompt("Ingrese la nota del segundo alumno: "));
let nota3 = parseInt(prompt("Ingrese la nota del tercer alumno: "));
let promedio = (nota1 + nota2 + nota3) / 3;
if (promedio >= 7) {
  document.write("Felicitaciones estas promocionado, tu notas es: " + promedio);
} */

// !Problema 2 : Realizar un programa que solicite la carga por teclado dos números enteros, si el primero es mayor que el segundo informar
// !su suma y diferencia, en caso contrario informar el producto y la división del primero con el segundo.

/* let number1 = parseInt(prompt("Ingrese el primer numero: "));
let number2 = parseInt(prompt("Ingrese el segundo numero: "));

if (number1 > number2) {
  let sumar = number1 + number2;
  let diferencia = number1 - number2;
  document.write(`La suma entre el primer y segundo numero es: ${sumar} y la diferencia entre ambos es: ${diferencia}`);
} else {
  let producto = number2 * number1;
  let división = number2 / number1;
  document.write(`El producto entre el segundo y el primer número es: ${producto} y la división  entre ambos es: ${división}`);
} */

// !Problema 3 : Realizar un programa que solicite la carga del nombre de una persona y su edad. Si la edad es mayor o igual a 18 años
// !mostrar un mensaje que puede ingresar al local, en caso que sea menor de 18 mostrar otro mensaje.

/* let nombre = prompt("Ingrese un nombre: ");
let edad = parseInt(prompt("Ingrese su edad: "));
if (edad >= 18) {
  document.write("Puede ingresar al local.");
} else {
  document.write("Lo siento no puede ingresar XD");
} */

// !Problema 4 : Ingresar dos valores enteros por teclado. Efectuar y mostrar la división del primero respecto al segundo.
// !Mostrar un mensaje que no se puede efectuar la división en caso que el segundo valor ingresado sea igual al cero.

/* let valor1 = parseInt(prompt("Ingrese un número: "));
let valor2 = parseInt(prompt("ingrese un segundo número: "));
if (valor2 == 0) {
  document.write("No se puede dividir por 0");
} else {
  let division = valor1 / valor2;

  document.write("La división entre el primero y el segundo es: " + division);
} */
// !Problema 5: Ingresar el precio de un producto, si tiene un valor mayor o igual a 250 aplicarle un descuento del 10% en caso de tener
// !un valor menor aplicar solo descuento del 5%. Mostrar cuanto debe pagar el cliente con el descuento efectuado.

/* let producto = parseFloat(prompt("Ingrese el precio: "));
if (producto >= 250) {
  let descuento1 = producto - producto * 0.1;
  document.write(`El monto abonar es $: ${descuento1}`);
} else {
  let descuento2 = producto - producto * 0.05;
  document.write(`El monto abonar es $: ${descuento2}`);
} */

// TODO                      ESTRUCTURAS CONDICIONAL ANIDADA...

// !Problema 1 : Confeccionar un programa que permita cargar un número entero positivo de hasta tres cifras y muestre un mensaje indicando si
// !tiene 1, 2 o 3 cifras. Mostrar un mensaje de error si el numero de cifras es mayor a 3 o se ingresa un valor negativo.
/* 
let ingresar = parseInt(prompt("Ingresar un numero: "));

if (ingresar > 0) {
  if (ingresar <= 9) {
    document.write("1 Cifra");
  } else {
    if (ingresar <= 99) {
      document.write("2 Cifras.");
    } else {
      if (ingresar <= 999) {
        document.write("3 Cifras.");
      } else {
        document.write("Error.");
      }
    }
  }
} else {
  document.write("Negativo.");
} */

// !Problema 2: Un postulante a un empleo, realiza un test de capacitación y se obtiene la siguiente información: cantidad total de
// !preguntas que contesto correctamente. Se pide confeccionar un programa que ingrese los dos datos del teclado e informe el nivel del mismo
// !según el porcentaje de respuestas correctas que ha obtenido, y sabiendo que:
// !Nivel máximo : >=90% -- Medio: >= 75% y <90% -- Regular: >=50% y <75% -- Fuera: <50%

/*  let cantidadPreguntas = parseInt(prompt("Ingrese la cantidad preguntas:"));
let preguntasCorrectas = parseInt(prompt("Cantidad preguntas correctas:"));
let porcentaje = (cantidadPreguntas * preguntasCorrectas) / 100;

if (porcentaje >= 90) {
  document.write("Nivel Máximo");
} else {
  if (porcentaje >= 75) {
    document.write("Nivel Medio");
  } else {
    if (porcentaje >= 50) {
      document.write("Nivel Regular");
    } else {
      document.write("Fuera de nivel");
    }
  }
} */

// !Problema 3 : Confeccionar un programa que pida usuario ingresar por teclado alguna de las siguiente palabras claves de Javascript: 'Let',
//!'if' o 'else'. Mostrar un mensaje que se trata de una palabra clave de Javascript, o en su defecto indicar que no es una palabra clave.

/* let palabra = prompt("Ingresar una palabra clave de Javascript:");
if (palabra == "let") {
  document.write("Palabra clave de JavaScript");
} else {
  if (palabra == "if") {
    document.write("Palabra clave de JavaScript");
  } else {
    if (palabra == "else") {
      document.write("Palabra clave JavaScript");
    } else {
      document.write("No es una palabra clave.");
    }
  }
} */

// !Problema 4 : Ingresar la altura de una persona en cm. Mostrar alguno de los siguientes mensajes dependiendo de la altura ingresada:
// !Alta: si tiene mas de 190cm -- Normal: si tiene entre 160 y 190 cm.-- Baja: si tiene menos de 160cm. (Mostrar el mensaje tanto en la
// !consola y mediante la llamada  a la función alert.) La función alert muestra un cuadro de dialogo.

/* let altura = parseInt(prompt("Ingresa cuanto centímetros medís: "));
if (altura >= 190) {
  alert("Alta");
} else {
  if (altura >= 160) {
    alert("Normal");
  } else {
    alert("Baja");
  }
} */

// TODO                 Estructura Condicionales compuestas con operador lógicos.

// !Problema 1: Realizar un programa que pida cargar una fecha cualquiera, dia - mes -año, luego verificar si corresponde a navidad.
/* let dia = parseInt(prompt("Ingresar un numero de día:"));
let mes = parseInt(prompt("Ingresar un numero de mes: "));
let año = parseInt(prompt("Ingresar un año:"));

if (dia == 25 && mes == 12) {
  alert("Esta  fecha es NAVIDAD");
} else {
  alert("Un día X");
} */

// !Problema 2: Ingresar 3 valores enteros por teclado. Mostrar posteriormente si los 3 valores ingresados son iguales o no.

/* let valor1 = parseInt(prompt("Ingrese el primer valor: "));
let valor2 = parseInt(prompt("Ingrese el segundo valor:"));
let valor3 = parseInt(prompt("Ingrese el tercer valor:"));
if (valor1 == valor2 && valor1 == valor3) {
  alert("Los tres números son iguales");
} else {
  alert("Los tres números son diferentes. ");
} */
// !Problema 3:  Se ingresan por teclado tres números enteros, si todos los valores ingresados son menores a 10, imprimir en pantalla la leyenda 
// !"todos los números son menores a 10"

/* let numero1 = parseInt(prompt("Ingresar un numero:"));
let numero2 = parseInt(prompt("Ingresar un segundo numero:"));
let numero3 = parseInt(prompt("Ingresar un tercer numero:"));

 */
/* if(numero1 <= 10 && numero2 <= 10 && numero3 <=10) {
  alert("Todos los números son menores a 10");
} else {
  alert("Hasta luego;")
} */

/* if(numero1 <=10 || numero2 <=10 || numero3 <=10) {
  alert ("Alguno de los números en menor a Diez!")
} */

// ! Problema 4 : Codificar un programa en el cual dad una lista de tres valores numéricos enteros se calcule e informe su rango de variación 
// ! (debe mostrar el menor y el mayor de ellos)

/* let valor1 = parseInt(prompt("Ingrese un valor"));
let valor2 = parseInt(prompt("Ingrese un segundo valor"));
let valor3 = parseInt(prompt("Ingrese un tercer valor"));

if(valor1 < valor2 && valor1 < valor3) {
  alert ("El menor es: " + valor1);
} else{
  if(valor2<valor3) {
    alert("El menor es: " + valor2);
  } else{
    alert("El menor es: "+ valor3);
  }
}
if(valor1> valor2 && valor1 > valor3) {
  alert("El mayor es : "+ valor1);
} else{
  if(valor2 > valor3){
    alert("El mayor es: "+ valor2);
  } else{
    alert("El mayor es : " + valor3);
  }
}
 */

// ! Problema 5: Codificar un programa en el cual el operador ingrese una letra en minúscula del alfabeto y nos muestre si es una vocal.

/* let letra = prompt("Ingrese una letra: ");
if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u" ) {
  alert("Ingresaste una vocal!")
} else{
  alert("Es una consonante!");
} */

// ! Problema 8: Ingresar un número de mes por teclado y luego un mensaje si dicho mes tiene 31 días, 30 días o si se trata de febrero que tiene 28 o 29 días 
//! dependiendo del año.
/* let numero = parseInt(prompt("Ingrese un número de mes: "));

if(numero == 1 || numero == 3 || numero == 5 || numero == 7 || numero == 8 ||numero == 10 || numero == 12){
  alert("El mes tiene 31 días ");
} else {
  if(numero == 4 || numero == 6 || numero == 9 || numero == 11){
    alert('El mes tiene 30 días');
  } else{
    alert('El mes tiene 28 o 29 días depende del año');
  }
}  */
// ! Problema 9 : Ingresar por teclado alguna de estas dos comidas (pollo o tallarines) y seguidamente en otra variable ingresar un postre (helado o flan)
// ! Se sabe qei el precio de dichos alimentos es: Pollo $7 -- Tallarines $4 -- Helado $3 -- Flan $2. Mostrar por pantalla cuánto debe pagar.

/* let comida = prompt('Que desea pedir Pollo o Tallarines:');
let postre = prompt('Que desea pedir Helado o Flan: ');
let pollo = 7;
let tallarines = 4;
let helado = 3;
let flan = 2;
if(comida == "pollo" && postre == "helado"){
  let plato1 = pollo + helado;
  alert(`La cuenta a pagar es: $ ${plato1}`);
} else {
  if(comida == "pollo" && postre == "flan") {
    let  plato2 = pollo + flan;
    alert(`La cuenta a pagar es: $ ${plato2}`);
  } else{
    if(comida == "tallarines" && postre == "helado"){
      let plato3 = tallarines + helado;
      alert(`La cuenta a pagar es: $ ${plato3}`);
    } else{
      if(comida == "tallarines" && postre == "flan"){
        let plato4 = tallarines + flan;
        alert(`La cuenta a pagar es: $ ${plato4}`);
      }
    }
  }
} */

// ! Problema 10 : Solidar al operador el ingreso por teclado de dos colores primarios (Rojo- Amarillo - Azul), un color en cada variable. 
// ! Por ejemplo podemos llamar a las variables color1 y color2. Luego mostrar el color que se genera con su combinación tener en cuenta que si se ingresa:
// ! Rojo-Amarillo= Naranja. / Azul-Rojo = Violeta. / Amarillo-Azul = Verde.

/* let color1 = prompt('Ingrese un color Rojo - Amarillo - Azul');
let color2 = prompt('Ingrese un segundo color primario');

if(color1 == "rojo" && color2 == "amarillo" || color1 == "amarillo" && color2 == "rojo" ){
  let primario = "Naranja";
  alert(`El color que se genera es ${primario}`);
} else{
  if(color1 == "azul" && color2 == "rojo" || color1 == "rojo" && color2 == "azul") {
    let primario = "Violeta";
    alert(`El color que se genera es ${primario}`);
  } else{
    if(color1 == "amarillo" && color2 == "azul" || color1 == "azul" && color2 == "amarillo"){
      let primario = "Verde";
      alert(`El color que se genera es ${primario}`);
      
    }
  }
} */

 // todo                            Ciclos WHILE
 // ! Problema 1: Escribir un programa que solicite ingresar 10 notas de alumnos y nos informe cuantos tienen notas mayores a 7 y cuantos menores.

/*  let x = 1;
 let mayor = 0;
 let menor = 0;
 while(x <= 10) {
  let nota = parseInt(prompt('Ingresar una nota: '));
  if(nota >= 7){
    mayor ++;
 } else {
  menor ++;
 }
 x ++;
}
document.write(`La cantidad de notas mayores a 7 son: ${mayor} y la cantidad menores a 6 son: ${menor}`);
 */
// ! Problema 4: Mostrar los múltiplos de 8 hasta el  valor 500. Debe aparecer en pantalla 8 - 16 - 24. etc.

/* let x = 1;
while(x <= 100) {
  let tabla = 8 * x;
  if(tabla <=500){
    document.write(" - " + tabla);
  }
    x++;
} */

// ! Problema 5: Desarrollar un programa que permita cargar números y luego nos informen cuantos valores fueron pares y cuantos impares. 
// ! Emplear el operador % en la condición de la estructura condicional.


/* let x = 1;
let par = 0;
let impar = 0;
while(x <= 10) {
  let  carga = parseInt(prompt('Ingrese un numero: '));
  if(carga % 2 == 0 ){
    par++;
  } else{
    impar++;
  }
  x++;
}
document.write(`Contador de números Pares: ${par} / Impares: ${impar}`);
 */
// ! Problema 6: Confeccionar un algoritmo que solicite el ingreso de dos números. Mostrar todos los números enteros comprendidos entre dichos valores. 
// ! Cuando inicie el program pedir primero el numero menor y luego el mayor. Si no carga en dicho orden el operador, mostrar un mensaje de error. 


/* let menor = parseInt(prompt('Ingrese un numero:'));
let mayor = parseInt(prompt('Ingrese un numero: '));

if(mayor > menor){
  while(menor <= mayor){
    
    document.write(`- ${menor}`);
    menor ++;
  }
} else{
  alert('Error!');
} */

// ! Problema 1: Confeccionar un programa que lea n pares de datos, cada par de datos corresponde a la medida de la base  y la altura de un triangulo. 
// ! El program deberá informar: A - La superficie de cada triangulo. / B - La cantidad de triángulos cuya superficie es mayor a 12.

/* let mayor12 = 0;

let n = parseInt(prompt('Ingrese cuantos pares de datos quiere ingresar:'));
for(let f=1; f<=n; f++) {
  let base = parseInt(prompt('Ingrese la base:'));
  let altura = parseInt(prompt('Ingrese la altura:'));
  let superficie = base*altura / 2;
  document.write(`Superficie:  ${superficie}`);
  if(superficie > 12) {
    mayor12++;
  } 

}
document.write(`superficie mayor a 12: ${mayor12}`); */

//! Problema 2 : Desarrollar un programa que solicite la carga de 10 números e imprima la suma de los últimos 5 valores ingresados.

/* let suma = 0;

for(let f = 1; f<=10; f++) {
  let carga = parseInt(prompt('Ingrese un valor:'));
  if(f>5){
    suma = suma + carga;
  }
}
alert(`La suma de los últimos 5 números es : ${suma}`);
 */
// ! Problema 3: Desarrollar un programa que muestre la tabla de multiplicar del 5.
/* let tabla =0;
for(let f =1; f<=10; f++){
  tabla = f*5;
  document.write (` ${tabla}`);
} */

// ! Problema 4: Confeccionar un programa que permita ingresar un valor del 1 al 10 y nos muestre la tabla de multiplicar del mismo (Los primeros 13 términos).

/* let input= parseInt(prompt('Ingrese un numero del 1 al 10: '));

for( let f=1; f<=13; f++) {
  let tabla = input * f;
  document.write(`${input} * ${f} : ${tabla} <hr>`);
} */

// ! Problema 5 : Realizar un programa que lea los lados de n triángulos : A- De cada uno de ellos, que tipo de triangulo es: 
// !EQUILÁTEROS (TRES LADOS IGUALES), ISOSCELES (DOS LADOS IGUALES), O ESCALENO (NINGÚN LADO IGUAL) B- Cantidad de triángulos de cada tipo.

/* let q= parseInt(prompt('ingrese la cantidad de triángulos'));
let equilatero =0;
let isosceles = 0;
let escaleno = 0;

for(let f=1; f<=q; f++){
  let lado1 = parseInt(prompt('Ingrese un lado'));
  let lado2 = parseInt(prompt('Ingrese el segundo lado'));
  let lado3 = parseInt(prompt('Ingrese el tercer lado'));
  if(lado1 == lado2 && lado1 == lado3){
    equilatero++;
  } else{
    if(lado1 == lado2  || lado2 == lado3 || lado1 == lado3) {
      isosceles++;
    } else{
      escaleno++;
    }
  }
}
document.write(`Equiláteros: ${equilatero} <hr> Isosceles: ${isosceles} <hr> Escaleno: ${escaleno}`);
 */
// ! Problema 6 : Escribir un programa que pida ingresar coordenadas (X,Y) que representan puntos en el plano. Informar cuantos puntos se han ingresado en el primer,
// ! segundo, tercer y cuarto cuadrante. Al comenzar el programa se pide ingrese la cantidad de puntos a procesar.

/* let cuadrante1 = 0;
let cuadrante2 =0;
let cuadrante3 = 0;
let cuadrante4 = 0;

let coordenadas = parseInt(prompt('Ingresar cantidad de coordenadas en el plano cartesiano: '));
for( let f =1; f<= coordenadas; f++) {
  let x = parseInt(prompt('Ingrese el valor de X'));
  let y = parseInt(prompt('Ingrese el valor de Y'));
  if(y>=0){
    if(x>=0){
      cuadrante1++;
    }else{
      cuadrante2++;
    }
  } else{
    if(y<0){
      if(x<0){
        cuadrante3++;
      } else{
        cuadrante4++;
      }
    }
  }

  }
document.write(`Cuadrante I :${cuadrante1} <hr> Cuadrante II : ${cuadrante2} <hr> Cuadrante III: ${cuadrante3} <hr> Cuadrante IV: ${cuadrante4}`);
 */
// ! Problema 7: Se realiza la carga de 10 valores enteros por teclado. Se desea conocer: A) Cantidad de negativos - B) Cantidad de positivos. 
//! - C) Cantidad múltiplos de 15. - D) La suma de los números pares.
/*  let par = 0;
let spar = 0;
let m15 = 0;
let negativo = 0;
let positivo = 0;
for(let f=1; f<=10;f++){
  let valor = parseInt(prompt('Ingrese un numero: '));
  if(valor <0){
    negativo++;
  } else{
    positivo++;
  }
  if(valor % 2 == 0) {
      spar = spar + valor;
      par++;
  }
  if(valor % 15 == 0 ){
      m15++;
    }
  } 


document.write(`N-Par : ${par} <hr> Cantidad N-Par: ${spar} <hr> Cantidad Múltiplo 15: ${m15} <hr> Cantidad N-Negativos: ${negativo} <hr> Cantidad N-Positivos: ${positivo}`); */

// todo                  Estructura repetitiva do/while

// ! Problema 1: Codificar un programa que solicite la carga de valores enteros y muestre si dicho valor es par o impar. finalizar el programa al ingresar 
// ! el numero 0 (No mostrar un mensaje si es par o impar al ingresar 0). Utilizar la llamada a la función alert para mostrar si es par o impar.

/* let valor;
do{
  valor = parseInt(prompt('Ingresar un numero y 0 para finalizar.'));
  if(valor != 0) {
    if(valor % 2 == 0) {
      alert('PAR');
    } else{
      alert('IMPAR');
    }
  }

} while(valor != 0);
 */
// ! Problema 2: Generar valores aleatorios enteros comprendidos entre 0 y 100. Mientras no se genere el valor 0 proceder a contar la cantidad de pares e impares.
// ! Luego cuando se genere el 0 mostrar la cantidad de pares e impares.

/* let random;
let par = 0;
let impar = 0 ;

do{
  random = Math.floor(Math.random()*101);
  document.write(`  ${random}`)
  if(random != 0 ){
    if(random % 2 == 0) {
      par++;
    } else{
      impar++;
    }
  }

} while(random != 0);
document.write(` <hr> Cantidad de PAR: ${par} <hr> Cantidad de IMPAR: ${impar}`); */

// ! Problema 3:  Crear un aplicación que nos permita adivinar un numero que genera la computadora en forma aleatoria. Primero debemos  generar un valor aleatorio
// ! comprendido entre 1 y 50. Pedir al operador que adivine el numero, solicitando que ingrese el valor por teclado. Si el numero que ingresa por teclado es mayor
// ! al aleatorio informar "Piense uno menor" y al revés si es menor "Piense uno mayor". Felicitar al ingresar el mismo numero.

/* let random = Math.floor(Math.random()*50) + 1;
document.write(random);
let user;
do{
  user = parseInt(prompt("Ingreso un numero entre el 1 y 50"));
  if(user > random){
    alert('Piense uno menor');
  } else{
    if(user < random){
      alert('Piense uno mayor');
    }
    
  }
} while(random != user );

alert('Felicidades ingreso el mismo numero');
 */
// ! Problema 4: Solicitar el ingreso de dos números enteros y mostrar su suma, mediante ALERT. Luego preguntar al usuario si quiere realizar la suma de otros
// ! dos números, si ingresa la cadena SI o si continuar dentro del do/while para la carga de otros dos números, con cualquier otra respuesta finaliza el ciclo.
// ! Cuando termina el bucle mostrar la cantidad de operaciones afectadas.

/* let ask;
let operation = 0;
do{
  let num1 = parseInt(prompt("Ingrese un numero"));
  let num2 = parseInt(prompt("Ingrese un numero"));
  alert(`La suma de ambos números es: ${num1 + num2}`);
  operation++;
  ask = prompt('Desea realizar la suma de mas números?');
  
} while(ask == "si" || ask == "SI");

document.write(`La cantidad de operaciones: ${operation}`);
 */
// todo                  ESTRUCTURA CONDICIONAL SWITCH.

//! Problema 1: Cargar un valor entero que represente un dia de la semana. Suponer que 0 corresponde a domingo, 1 a lunes etc. , se debe mostrar el nombre
//! del dia que le corresponde.

/* let diaSemana = parseInt(prompt('Ingresar un numero de dia'));
switch(diaSemana) {
  case 0 : alert('Domingo');
  break;
  case 1 : alert('Lunes');
  break;
  case 2 : alert('Martes');
  break;
  case 3 : alert('Miércoles');
  break;
  case 4 : alert('Jueves');
  break;
  case 5 : alert('Viernes');
  break;
  case 6 : alert('Sábado');
  break;
  default : alert('No corresponde a un dia de la semana.');
} */

//! Problema 2: Ingresar por teclado tres números que representan el dia, el mes y el año. Si se ingresan por teclado dia: 25, mes: 12, año: 2023. 
//! Posteriormente mostrar en la pagina con el siguiente formato: Hoy es 25 de diciembre de 2023.

let dia = parseInt(prompt('Ingrese el numero de dia:'));
let mes = parseInt(prompt('Ingrese el numero de mes: '));
let año = parseInt(prompt('Ingrese el numero de año:'));
document.write(`Hoy es ${dia} de `);
switch(mes){
  case 1:document.write('Enero');
  break;
  case 2:document.write('Febrero');
  break;
  case 3:document.write('Marzo');
  break;
  case 4: document.write('Abril');
  break;
  case 5: document.write('Mayo');
  break;
  case 6:document.write('Junio');
  break;
  case 7:document.write('Julio');
  break;
  case 9:document.write('Agosto');
  break;
  case 9:document.write('Septiembre');
  break;
  case 9:document.write('Octubre');
  break;
  case 9:document.write('Noviembre');
  break;
  case 9:document.write('Diciembre');
  break;
}
document.write(` de ${año}`) // 80