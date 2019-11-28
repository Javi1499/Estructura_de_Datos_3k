import Inventario from "./Inventario.js";

var inventario1 = new Inventario();


document.querySelector('#btnAceptar').addEventListener('click', () => {
    var expresion = (document.querySelector("#expresion")).value;

    inventario1.separarCaracteres(expresion);

});

document.querySelector('#btnRealizar').addEventListener('click', () => {


    inventario1.realizarO();

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