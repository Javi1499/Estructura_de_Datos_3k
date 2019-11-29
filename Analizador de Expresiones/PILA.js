import Productos from "./Productos.js";

export default class PILA {
    constructor() {
        this._datos = [];
        this._tamanio = 0;
    }

    get tamanio() {
        return this._tamanio;
    }

    push(nodo) {
        let nuevo = new Productos(nodo);
        this._datos.push(nuevo)
        this._tamanio++

    }



    pop() {
        this._tamanio--
        let dato = this._datos.pop(this.tamanio)
        return dato._dato;
    }
}