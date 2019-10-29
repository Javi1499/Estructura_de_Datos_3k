import Productos from "./Productos.js"
export default class Inventario {
    constructor() {
        this._inicio = null;
        this._final = null;
        this._contador = 1;
    }
    get contador() {
        return this._contador;
    }



    agregarProducto(posicion, nombre, precio, cantidad, descripcion) {
        let nuevo = new Productos(this.contador, nombre, precio, cantidad, descripcion, posicion);
        if (posicion === '' || posicion === (this.contador).toString()) {

            if (this._inicio === null) {
                this._inicio = nuevo;
                this._final = nuevo;
                console.log(this._inicio);
            } else {
                let temp = this._inicio;
                let tempF = this._final;
                while (temp._siguiente != null) {
                    temp = temp._siguiente;
                }
                temp._siguiente = nuevo;
                nuevo._anterior = temp;
                tempF = nuevo;

                console.log(this._inicio);
            }
            this._contador += 1;
            alert('El producto se ha agregado');
        } else if (posicion <= this.contador) {
            let temp = this._inicio;
            //  let tempF =this._final;
            let temp2 = null;
            while (temp._siguiente != null) {
                if (temp._codigo === posicion - 1) {
                    temp2 = temp._siguiente;
                    temp._siguiente = nuevo;
                    nuevo._anterior = temp;
                    nuevo._siguiente = temp2;
                    temp2._anterior = nuevo
                    console.log(this._inicio);
                    break
                } else {
                    temp = temp._siguiente;
                }
            }
            alert('El producto se ha agregado');
            this._contador += 1;
        } else {
            alert('No se pudo agregar');
        }
    }



    buscarP(codigoP) {
        codigoP = Number(codigoP);
        let buscarP = '';
        let temp = this._inicio;
        if (this._estaCodigo(codigoP)) {
            while (temp._siguiente != null) {
                if (temp._codigo === codigoP) {
                    alert(temp.toString())
                    buscarP = temp.toString()
                    break
                } else {
                    temp = temp._siguiente;
                }
            }
        } else {
            alert('No se encontro el producto');
        }

        return buscarP;
    }

    eliminarP(codigoP) {
        codigoP = Number(codigoP);
        if (this._estaCodigo(codigoP)) {
            let temp = this._inicio;
            let tempF = this._final;
            ////REALIZAR validaciones con if para el primer y ultimo termino////
console.log(codigoP)
            if (codigoP === temp._codigo) {
                this._inicio = temp._siguiente

            } else if (codigoP === tempF._codigo) {
                this._final = temp2._anterior;
            } else {
                while (temp._siguiente != null) {
                    (console.log(temp._codigo));
                    if (Number(temp._codigo) === codigoP - 1) {
                        temp._siguiente = temp._siguiente._siguiente;
                        temp._siguiente._anterior = temp;
                        break
                    } else {
                        temp = temp._siguiente;
                    }
                }
            }
            alert("El producto se elimino")
            console.log(this._inicio);
        } else {
            alert('El producto no existe');
        }

    }

    _estaCodigo(codigoP) {
        let seEncuentra = false;
        let temp = this._inicio;
        while (temp._siguiente != null) {

            if (temp._codigo === codigoP) {
                seEncuentra = true;
                break
            } else {
                temp = temp._siguiente;
            }
        }

        return seEncuentra;
    }

    listado() {
        let productosLista = '';
        let temp = this._inicio;
        while (temp != null) {
            productosLista += (temp.toString() + "<br>")
            temp = temp._siguiente;
        }
        return productosLista

    }
}