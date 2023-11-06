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
function ingresarNumero(){
    let user=parseInt(prompt('Ingrese un numero para saber la tabla de multiplicar: '));
    multiplicar(user);
}
function multiplicar(valor){
    for(let f=1;f<=10;f++){
    document.write(`<strong>${valor} x ${f} =</strong> ${valor*f}<br>`);
    }
}
ingresarNumero();

//! Problema: 