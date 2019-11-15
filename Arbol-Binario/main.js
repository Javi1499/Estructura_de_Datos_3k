import Inventario from "./Inventario.js";

var inventario1 = new Inventario();


document.querySelector('#botonAgregar').addEventListener('click', () => {
    var codigo = (document.querySelector("#codigo")).value;
    var nombre = (document.querySelector("#nombre")).value;
    var precio = (document.querySelector("#precio")).value;
    var cantidad = (document.querySelector("#cantidad")).value;
    var descripcion = (document.querySelector("#descripcion")).value;


    inventario1.agregarProducto(codigo, nombre, precio, cantidad, descripcion);
    document.querySelector('#codigo').value = inventario1.contador;
    
});


document.querySelector('#botonBuscar').addEventListener('click', () => {
    let producto = inventario1.buscarP(document.querySelector('#buscarC').value);
    document.querySelector('#buscarProductos').innerHTML = producto;
});

document.querySelector('#rInOrder').addEventListener('click', () => {
    let productos=inventario1.inOrder();
    document.querySelector('#recorridos').innerHTML = productos;
});

document.querySelector('#rPreOrder').addEventListener('click', () => {
    let productos=inventario1.preOrder();
    document.querySelector('#recorridos').innerHTML = productos;
});

document.querySelector('#rPostOrder').addEventListener('click', () => {
    let productos=inventario1.postOrder();
    document.querySelector('#recorridos').innerHTML = productos;
});


