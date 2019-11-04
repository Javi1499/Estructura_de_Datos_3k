export default class Base {
    constructor(nombre, minutos) {
        this._nombre = nombre;
        this._minutos = minutos;
        this._siguiente = null;
    }

    get nombre() {
        return this._nombre;
    }

    get siguiente() {
        return this._siguiente;
    }

    toString() {
        return 'Nombre Base: ' + this._nombre +  ' Minutos: ' + this._minutos;
    }
}