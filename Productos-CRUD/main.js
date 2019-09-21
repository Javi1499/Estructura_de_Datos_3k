import Inventario from "./Inventario.js";

var inventario1 = new Inventario(new Array(), document.querySelector('#articleReport'));

document.querySelector('#botonAgregar').addEventListener('click', () => {
    var posicion = (document.querySelector("#posicion")).value;
    var nombre = (document.querySelector("#nombre")).value;
    var precio = (document.querySelector("#precio")).value;
    var cantidad = (document.querySelector("#cantidad")).value;
    var descripcion = (document.querySelector("#descripcion")).value;

    inventario1.agregarProducto(posicion, nombre, precio, cantidad, descripcion);
    document.querySelector('#codigo').value = inventario1.contador;
});

document.querySelector('#botonEliminar').addEventListener('click', () => {
    inventario1.elimarP(document.querySelector('#eliminarC').value);
    document.querySelector('#codigo').value = inventario1.contador;
});

document.querySelector('#botonBuscar').addEventListener('click', () => {
    let producto = inventario1.buscarP(document.querySelector('#buscaC').value);
    document.querySelector('#buscarProductos').innerHTML = producto;
});

