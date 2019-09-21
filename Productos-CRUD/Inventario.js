import Productos from "./Productos.js"
export default class Inventario {
    constructor(producto) {

        this._inventarios = new Array();
        this._producto = producto;
        this._contador = 1;
    }
    get contador() {
        return this._contador;
    }

    get inventario() {
        return this._inventarios;
    }



    agregarProducto(nombre, precio, cantidad, descripcion, posicion) {
        if (posicion === '' || posicion === (this._inventarios.length + 1).toString()) {
            this._inventarios.push(new Productos(this._contador, nombre, precio, cantidad, descripcion));
            this._contador += 1;
            alert('El producto se ha agregado');
        } else if (Number(posicion) > 0 && Number(posicion) < this._inventarios.length) {
            if (this._inventarios.length >= Number(posicion)) {
                this._inventarios[Number(posicion) - 1] = new Productos(this._contador, nombre, precio, cantidad, descripcion);
                this._contador++;
                alert('El producto se ha agregado');
            } else {
                alert('No se pudo agregar');
            }
        }
    }


    buscarP(codigoP) {
        codigoP = Number(codigoP);
        let buscarP = '';
        if (this._estaCodigo(codigoP)) {
            this._inventarios.forEach(articulo => {
                if (articulo.codigoP === codigoP) {
                    buscarP = articulo;
                    return;
                }
            });
        } else {
            alert('No se encontro el producto');
        }

        return buscarP;
    }

    eliminarP(codigoP) {
        codigoP = Number(codigoP);
        if (this._estaCodigo(codigoP)) {
            if (codigoP != this.struture.length) {
                if ((codigoP - 1 < this._inventarios.length - 1)) {
                    this._inventarios[i] = this._inventarios[i + 1];
                    this._inventarios.pop();
                }

            } else
                this._inventarios.pop();
            alert('Se elimino el producto');
        } else {
            alert('El codigo no existe');
        }
    }

    _estaCodigo(codigoP) {
        let seEncuentra = false;
        for (let i = 0; i < this._inventarios.length; i++) {
            if (this._inventarios[i].codigoP === codigoP) {
                seEncuentra = true;
                break;
            }
        }

        return seEncuentra;
    }
}