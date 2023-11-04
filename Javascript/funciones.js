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
function menor(){
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
menor();

// todo         ------ Función con parámetros ------
//121
