/* 
* Declarar una funcion constructora para crear objetos que representen una persona. Definir como atributos el nombre, apellido y edad.
* Crear un arreglo con 5 personas.
* Imprimir el nombre de la persona con mayor edad (Se sabe que las personas tiene una edad distinta.)
*/
/* function Persona(nombre,apellido,edad){
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
    this.imprimir= function(){
        document.write(`Nombre: ${this.nombre}, Apellido: ${this.apellido}, Edad: ${this.edad} <br><hr>`);
    }
}
const personas =[];
personas.push(new Persona('spike','play',5));
personas.push(new Persona('Noah','Velozo',3));
personas.push(new Persona('Olivia','Velozo',11));
personas.push(new Persona('Brenda','Velardez',32));
personas.push(new Persona('Gabriel','Velozo',34));
//console.log(personas);
for(let persona of personas){persona.imprimir()};
let mayorEdad=personas[0];
//? for of
/* for(let persona of personas){
    if(persona.edad>mayorEdad.edad){
        mayorEdad=persona
    }
} */
//? for clasico
/* for(let f=0;f<personas.length;f++){
    if(personas[f].edad>mayorEdad.edad){
        mayorEdad=personas[f];
    }
} */
//console.log(mayorEdad); 

/* 
* Implementar una funcion constructora que cree objetos de tipo naipe español (los palos de esta baraja pueden ser oro, copa, espada y basto).
* Un naipe tiene como atributos el numero y su palo.
* Crear un objeto llamdado mazoCartas que tenga un atributo de tipo array vacio.
* En un metodo llmado crear, proceder a cargar en el arreglo mazo objetos de tipo naipe con las 48 cartas de la baraja española.
* Ademas definir los siguientes metodos: 
* - Imprimir (mostrar todas las cartas del mazo)
* - Extraer (debe retornar la carta ubicada en la posicion cero del mazo)
* - Cantidad (debe retornar la cantidad de cartas del mazo)
* - Mezclar (debe intercambiar los elementos del array en forma aleatoria)
*/

/* function Naipe(numero, palo){
    this.numero=numero;
    this.palo=palo;
    this.imprimir = function(){
        console.log(`${this.numero} -  ${this.palo}`);
    }
}
const mazoCartas={
    mazo:[],
    crear(){
        for(let f=1;f<=12;f++){
            this.mazo.push(new Naipe(f,'Oro'));
            this.mazo.push(new Naipe(f,'Basto'));
            this.mazo.push(new Naipe(f,'Espada'));
            this.mazo.push(new Naipe(f,'Palo'));
        }
    },
    imprimir(){
        this.mazo.forEach((naipe)=>naipe.imprimir());
    },
    extraer(){
       return this.mazo.shift();
    },
    cantidad(){
        return this.mazo.length;
    },
    mezclar(){
        return this.mazo.sort(()=>0.5 - Math.random());
    }
}
mazoCartas.crear();
mazoCartas.imprimir();
console.log(mazoCartas.cantidad());
console.log(mazoCartas.extraer());
console.log(mazoCartas.cantidad());
mazoCartas.mezclar();
mazoCartas.imprimir();
 */
/* 
* Declarar una funcion constructora que reprensente un usuario (nombre, clave);
* Almacenar en un array los datos de 3 usuarios. Ingresar por teclado el nombre del usuario, validadr que dicho nombre no se encuentre almacenado en el array de objetos.
* En el caso que no se encuentre almacenado, pedir el ingreso de la clave y posteoriormente proceder a crear un objeto de tipo usuario e insertarlo en el array.
* Repetir el proceso hasta que se carguen 3 usuarios. Mostrar finalmente por pantalla los nombres y claves de los 3 usuarios llamando a un metodo que imprima los
* datos del usuario definido en la funcion constructora.
*/

function User(nombre,clave){
    this.nombre=nombre;
    this.clave=clave;
    this.imprimir=function(){
        document.write(`User: ${this.nombre} | Password: ${this.clave}<br>`);
    }
}

const usuarios=[];
while(usuarios.length!=3){
    let ingresarUser=prompt('ingresar el nombre del usuario: ');
    if(usuarios.includes(ingresarUser==false)){
       let userPassword=prompt('Ingrese la clave: ');
        usuarios.push( new User(ingresarUser,userPassword));
    }
}


console.log(usuarios);