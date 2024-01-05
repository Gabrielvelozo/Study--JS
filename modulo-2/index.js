import paisesAmerica from "./paises.js";

document.querySelector('#pais').innerHTML= paisesAmerica.map(pais => `<option>${pais}</option>`).join('');

