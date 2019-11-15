import Productos from "./Productos.js"
export default class Inventario {
    constructor() {
        this._raiz = null;
        this._nodos = "";
    }



    agregarProducto(codigo, nombre, precio, cantidad, descripcion) {
        let nuevoNodo = new Productos(codigo, nombre, precio, cantidad, descripcion);
        if (this._raiz == null) {
            this._raiz = nuevoNodo;
        } else {
            this._agregar(this._raiz, nuevoNodo)
        }
        console.log(this._raiz);
        alert('El producto se ha agregado');
    }

    _agregar(raiz, nodoN) {
        console.log(nodoN._codigo + "//////" + raiz._codigo)
        if (Number(nodoN._codigo) > Number(raiz._codigo)) {
            if (raiz._derecha != null) {
                this._agregar(raiz._derecha, nodoN);
            } else {
                raiz._derecha = nodoN;
            }
        } else if (Number(nodoN._codigo) < Number(raiz._codigo)) {
            if (raiz._izquierda != null) {
                this._agregar(raiz._izquierda, nodoN);
            } else {
                raiz._izquierda = nodoN;
            }
        }
    }



    buscarP(codigoP) {
        codigoP = Number(codigoP);
        let buscarP = '';
        if (codigoP == this._raiz._codigo) {
            buscarP = this._raiz;
        } else {
            buscarP = this._busqueda(codigoP, this._raiz);

        }

        return buscarP;
    }

    _busqueda(codigo, raiz) {
        if (codigo < raiz._codigo) {
            if (raiz._izquierda != null) {

                raiz = raiz._izquierda
                if (codigo == raiz._codigo) {
                    return raiz;
                } else {
                    this._busqueda(codigo, raiz);
                }

            } else {
                return "No se encontró"
            }
        } else if ((codigo > raiz._codigo)) {
            if (raiz._derecha != null) {

                raiz = raiz._derecha
                if (codigo == raiz._codigo) {
                    return raiz;
                } else {
                    this._busqueda(codigo, raiz);
                }

            } else {
                return "No se encontró"
            }
        }

    }

    inOrder() {
        this._nodos = '';

        if (this._raiz != null) {
            this._inOrder(this._raiz);
        }

        return this._nodos;
    }

    _inOrder(raiz) {
        if (raiz != null) {
            this._inOrder(raiz._izquierda);
            this._nodos += raiz.toString() + "<br>";
            this._inOrder(raiz._derecha);

        }

    }

    
    preOrder() {
        this._nodos = '';

        if (this._raiz != null) {
            this._preOrder(this._raiz);
        }

        return this._nodos;
    }

    _preOrder(raiz) {
        if (raiz != null) {
            this._nodos += raiz.toString() + "<br>";
            this._preOrder(raiz._izquierda);
            this._preOrder(raiz._derecha);

        }

    }

    postOrder() {
        this._nodos = '';

        if (this._raiz != null) {
            this._postOrder(this._raiz);
        }

        return this._nodos;
    }

    _postOrder(raiz) {
        if (raiz != null) {
            this._postOrder(raiz._izquierda);
            this._postOrder(raiz._derecha);
            this._nodos += raiz.toString() + "<br>";

        }

    }



}