import Ruta from "./Ruta.js";

var ruta = new Ruta();


document.querySelector('#botonAgregar').addEventListener('click', () => {
    var nombre = (document.querySelector("#nombreBase")).value;
    var minutos = (document.querySelector("#minutos")).value;

    ruta.agregarBase(nombre, minutos);

});

document.querySelector('#botonBuscar').addEventListener('click', () => {
    let base = ruta.buscarBase(document.querySelector('#buscarBase').value);
    document.querySelector('#baseEncontrada').innerHTML = base;
});

