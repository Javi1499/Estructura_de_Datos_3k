import Nodo from "./Nodo.js"

class Lista {
    constructor() {
        this._inicio = null;

    }


    agregarOrdenadoD(numero) {
        let nuevo = new Nodo(numero);
        if (this._inicio === null) {
            this._inicio = nuevo;
        } else {
            let temp = this._inicio;
            if (nuevo._numero > this._inicio._numero) {
                nuevo._siguiente = temp;
                this._inicio = nuevo;
            } else {
                while (temp._siguiente != null) {
                    console.log(temp._numero + "|||" + nuevo._numero + "\\\\" + temp._siguiente._numero)
                    if (nuevo._numero > temp._numero) {
                        console.log('si entro');
                        break
                    } else {
                        temp = temp._siguiente;
                    }
                }
                nuevo._siguiente = temp._siguiente;
                temp._siguiente = nuevo;
            }
        }
        console.log(this._inicio);
    }
}

let prueba = new Lista();
prueba.agregarOrdenadoD(6);
prueba.agregarOrdenadoD(7);
prueba.agregarOrdenadoD(4);
prueba.agregarOrdenadoD(10);