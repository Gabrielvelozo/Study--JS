function chistes(){
    fetch('https://www.scratchya.com.ar/cursojs/chistealazar.php')
    .then(respuesta => respuesta.json())
    .then(chiste => document.querySelector('#ver').textContent=chiste.descripcion);
}   
chistes();
setInterval(() => chistes(), 5000);