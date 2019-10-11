import Productos from "./Productos.js"
export default class Inventario {
    constructor(productosLista) {
        this._inicio = null;
        this._productosLista = productosLista;
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
                console.log(this._inicio);
            } else {
                let temp = this._inicio;
                while (temp._siguiente != null) {
                    temp = temp._siguiente;

                }
                temp._siguiente = nuevo;
                console.log(this._inicio);
            }
            this._contador += 1;
            alert('El producto se ha agregado');
        } else if (posicion <= this.contador) {
            let temp = this._inicio;
            while (temp._siguiente != null) {
                if (temp._codigo === posicion - 1) {
                    let temp2=temp._siguiente;
                    temp._siguiente = nuevo;
                    nuevo._siguiente=temp2;
                   
                    break
                } 
                else {
                    temp = temp._siguiente;
                }
            }
            alert('El producto se ha agregado'); 
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
        console.log(this._inicio);
        if (this._estaCodigo(codigoP)) {
            let temp = this._inicio;
            while (temp._siguiente != null) {
                (console.log(temp._codigo));
                if (Number(temp._codigo) === codigoP - 1) {
                    temp._siguiente = temp._siguiente._siguiente;
                    break
                } else {
                    temp = temp._siguiente;
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