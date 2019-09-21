export default class Productos {
    constructor(codigo, nombre, precio, cantidad, descripcion, posicion) {
        this._codigo = codigo;
        this._nombre = nombre;
        this._precio = precio;
        this._cantidad = cantidad;
        this._descripcion = descripcion;
        this._posicion = posicion;

    }


    get contador() {
        return this._contador
    }


    toString() {
        return 'Cdigo: ' + this._codigo + '||||nombre: ' + this._nombre + '||||||Precio: ' + this._precio + '|||||cantidad: ' + this._cantidad + '||||||descripción: ' + this._descripcion + '|||||||';
    }

}