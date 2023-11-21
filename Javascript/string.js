/* 
*  Confeccionar una función que retorne si un string es capicua, es decir si se lee igual de izquierda a derecha o derecha a izquierda
*/

function esCapicua(parametro){
    
}





/* 
* Confeccionar una función que retorne la cantidad de letras 'a' o 'A' tiene una palabra.
*/

let palabra=prompt('Ingresar una palabra:');

function letrasA (parametro){
    let contadorA=0;
    for(let letra of parametro){
        if(letra == 'a' || letra == 'A'){
            contadorA++;
        }
    }
   document.write(`Contador= ${contadorA}`);
}
letrasA(palabra);