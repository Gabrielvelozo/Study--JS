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
console.log(validarInformacion(arr1,arr2));