import Productos from "./Productos.js"
export default class Inventario {
    constructor(inventario=[], productosLista) {

        this._inventarios = inventario;
        this._productosLista = productosLista;
        this._contador = 1;
    }
    get contador() {
        return this._contador;
    }

    get inventario() {
        return this._inventarios;
    }



    agregarProducto(nombre, precio, cantidad, descripcion) {
        if (this._inventarios.length<=19) {
            this._inventarios.push(new Productos(this._contador, nombre, precio, cantidad, descripcion));
            this._contador += 1;
            alert('El producto se ha agregado');
        } else {
                alert('No se pudo agregar, alcanzo el maximo de productos');
            }
        }

    buscarP(numero) {
        let limiteI = 0;
        let limiteS = this._inventarios.length;
        let mitad = 0;
        let buscarP = '';
        while (limiteI + 1 < limiteS) {
            mitad = Math.trunc((limiteS + limiteI) / 2);
            if (this._inventarios[mitad] === numero) {
                console.log("El  numero " + numero + "se encuentra en la posicion " + mitad)
                this._inventarios[mitad] = buscarP;
                return
            } else if (numero > Number(this._inventarios[mitad])) {
                console.log(numero + "|||||||" + Number(this._inventarios[mitad]))
                limiteI = mitad
                console.log(mitad + " Mayor");
            } else if (numero < this._inventarios[mitad]) {
                console.log(numero + "|||||||" + Number(this._inventarios[mitad]))

                limiteS = mitad;
                console.log(mitad + " Menor");
            }
        }
        alert('no se encontro')
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
    listado() {
        this._productosLista.innerHTML = '';
        let lista= [];
        for (let i = 0; i < this._inventarios.length; i++) {
            lista[i] = document.createElement('p');
        }

        for (let i = 0; i < this._inventarios.length; i++) {
            lista[i].innerHTML = this._inventarios[i].toString();
            this._productosLista.appendChild(lista[i]);
        }
    }
}
