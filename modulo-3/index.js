import { recuperarArticulos } from "./articulos.js";
import {agregarCarrito } from "./carrito.js"

recuperarArticulos(articulos=>{
    const listaArticulos= document.querySelector('#articulos');
    articulos.forEach(articulo=>{
        const li= document.createElement('li');
        li.innerText=`${articulo.descripcion} - $${articulo.precio}`;
        const bttn= document.createElement('button');
        bttn.innerText= '+';
        bttn.addEventListener('click',()=>{
            agregarCarrito(articulo);
        })
        li.appendChild(bttn);
        listaArticulos.appendChild(li)
    })
})