import { paisMayorInflacion, retornarPaisesInflacion, ordenarPorInflacion } from "./paisesinflacion.js";

document.querySelector('#pais').innerHTML= retornarPaisesInflacion();
document.querySelector('#mayor').innerHTML= paisMayorInflacion();
document.querySelector('#menoramayor').innerHTML= ordenarPorInflacion();