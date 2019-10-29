import Base from "./Base.js"
export default class Ruta {
    constructor() {
        this._inicio = null;
        this._final = null;
    }

    agregarBase(nombre, minutos) {
        let nuevo = new Base(nombre, minutos);

        if (this._inicio === null) {
            this._inicio = nuevo;
            this._inicio._siguiente = nuevo
            console.log(this._inicio);
        } else {
            let temp = this._inicio;
            while (temp._siguiente != this._inicio) {
                temp = temp._siguiente;
            }
            temp._siguiente = nuevo;
            temp._siguiente._siguiente = this._inicio;

            console.log(this._inicio);
        }
        this._contador += 1;
        alert('El producto se ha agregado');
    }

    buscarBase(nombreB) {
       // let buscarB = '';
        let temp = this._inicio;
        if (10>2) {
            while (temp._siguiente != this._inicio) {
                if (temp._nombre === nombreB) {
                    alert(temp.toString())
                    break
                } else {
                    temp = temp._siguiente;
                }
            }
        } else {
            alert('No se encontro el producto');
        }

       // return buscarB;
    }

    _estaBase(nombreB) {
        let seEncuentra = false;
        let temp = this._inicio;
        while (temp._siguiente != this._inicio) {
            console.log(temp._nombre + '\\\\' + nombreB)
            if (temp._nombre === nombreB) {
                seEncuentra = true;
                break
            } else {
                temp = temp._siguiente;
            }
        }
    }
}