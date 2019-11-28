import Productos from "./Productos.js";

export default class PILA {
    constructor() {
        this._datos = null;
        this._ultimo = null;
        this._tamanio = 0;
    }

    get tamanio() {
        return this._tamanio;
    }

    push(nodo) {
        let nuevo = new Productos(nodo);
        if (this._datos == null) {
            this._datos = nuevo;
            this._ultimo = nuevo;
        } else {
            let temp = this._datos;
            while (temp._siguiente != null) {
                temp = temp._siguiente;
            }
            temp._siguiente = nuevo;
            nuevo._anterior = temp;
            this._ultimo = nuevo
        }
        this._tamanio++;
        console.log(this._datos)
    }



    pop() {
        let temp = this._datos;
        let tempF = this._ultimo;
        while (temp._siguiente != null) {
            temp = temp._siguiente;
        }
        tempF._anterior._siguiente = null;
        this._ultimo = tempF._anterior;
        this._tamanio--;
        return tempF;
    }
}