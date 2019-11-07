import Ruta from "./Ruta.js";

var ruta = new Ruta();


document.querySelector('#botonAgregar').addEventListener('click', () => {
    var nombre = (document.querySelector("#nombreBase")).value;
    var minutos = (document.querySelector("#minutos")).value;

    ruta.agregarBase(nombre, minutos);
    let bases = ruta.listado();
    document.querySelector('#bases').innerHTML = bases;



});

document.querySelector('#botonBuscar').addEventListener('click', () => {
    let base = ruta.buscarBase(document.querySelector('#buscarBase').value);
    document.querySelector('#baseEncontrada').innerHTML = base;
});

document.querySelector('#botonEliminar').addEventListener('click', () => {
    ruta.eliminarBase(document.querySelector('#eliminarBase').value);
    let bases = ruta.listado();
    document.querySelector('#bases').innerHTML = bases;
});

document.querySelector('#btnMostrarBases').addEventListener('click', () => {
    let bases = ruta.listado();
    document.querySelector('#bases').innerHTML = bases;
});

document.querySelector('#btnCrearRecorrido').addEventListener('click', () => {
    var baseInicio = (document.querySelector("#baseInicio")).value;
    var horaInicio= (document.querySelector("#horaInicio")).value;
    var horaFinal= (document.querySelector("#horaFinal")).value;
    let crearRecorrido = ruta.crearRecorrido(baseInicio,horaInicio,horaFinal);
    document.querySelector('#recorrido').innerHTML = crearRecorrido;
});

