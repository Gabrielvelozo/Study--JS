fetch('https://www.scratchya.com.ar/cursojs/chistealazar.php')
    .then(respuesta => respuesta.json())
    .then(chistes => contarChiste(chistes));
    
function contarChiste(chistes){
    console.log(chistes);
}
