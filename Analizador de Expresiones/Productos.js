export default class Productos {
    constructor(dato) {
        this._dato=dato
        this._izquierda = null;
        this._derecha = null;
        this._siguiente=null;
        this._anterior=null;

    }

    get nombre() {
        return this._nombre;
    }
    get contador() {
        return this._contador
    }
    get siguiente() {
        return this._siguiente;
    }


    toString() {
        return this._dato;
    }

}