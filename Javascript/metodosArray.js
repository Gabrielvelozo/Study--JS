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

const usuarios=[['Juan','sd432Xrf%'],['Carlos','$ASGFDTG$%3v'],['Ana','FDSFsdfgh42!'],['Marcos','1@$Zsda']];

//! Mediante el metodo findIndex recuperar el indice de la componente del array usuarios de un nombre que ingresemos por teclado. Mostrar la clave de dicho usuario.

let teclado= prompt('Ingrese un nombre de usuario: ');
const indice=usuarios.findIndex(posicion => posicion[0]==teclado);
console.log(indice);
if(indice!=-1){
    console.log('Clave: ' + usuarios[indice][1]);
}else{
    alert('No existe el usuario:  ' + teclado);
}

//todo  ------------------------------------------------------------- METODO some() & every() ---------------------------------------------------------------------------------