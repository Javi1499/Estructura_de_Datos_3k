export default class Productos {
    constructor(codigo, nombre, precio, cantidad, descripcion) {
        this._codigo = codigo;
        this._nombre = nombre;
        this._precio = precio;
        this._cantidad = cantidad;
        this._descripcion = descripcion;
        this._izquierda = null;
        this._derecha = null;

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
        return 'Codigo: ' + this._codigo + '||||nombre: ' + this._nombre + '||||||Precio: ' + this._precio + '|||||cantidad: ' + this._cantidad + '||||||descripción: ' + this._descripcion + '|||||||';
    }

}