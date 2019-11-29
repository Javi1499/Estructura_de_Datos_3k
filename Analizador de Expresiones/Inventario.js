import PILA from "./PILA.js"
import Productos from "./Productos.js"
export default class Inventario {
    constructor() {
        this._pila = new PILA();
        this._raiz = null;
        this._nodos = "";
        this._inicio = null;
        this._final = null;
    }

    separarCaracteres(expresion) {
        let tamaño = expresion.length;

        for (let i = 0; i < tamaño; i++) {
            let variable = expresion.charAt(i);
            // console.log(variable)
            this.agregarALista(variable);
        }
        //console.log(this._inicio);
        this.obtenerValores1(this._inicio);


    }


    realizarOperacion() {
        this.preOrder();
        let tamaño = this._nodos.length;

        for (let i = 1; i < tamaño; i++) {
            //console.log('entró')
            let variable = this._nodos.charAt(i);
            this.agregarALista(variable);
        }
        //console.log(this._inicio)
        this._realizarOperacion()
        alert(this._pila.pop());
    }

    _realizarOperacion() {
        if (this._inicio != null) {
            //console.log(this._inicio)
            let temp = this._inicio;
            while (temp._siguiente != null) {
                temp = temp._siguiente;
                //console.log(temp)
            }
            if (temp._dato != "*" && temp._dato != "/" && temp._dato != "+" && temp._dato != "-") {
                this._pila.push((temp._dato));
            } else {
                let x1 = 0;
                let x2 = 0;
                //console.log('entro signo')
                x1 = this._pila.pop();
                x2 = this._pila.pop();
                console.log(x1 + "x1//////x2" + x2)
                if (temp._dato == "+") {
                    resultado = Number(x1) + Number(x2);

                    console.log(resultado);
                    this._pila.push(resultado);
                } else if (temp._dato == "-") {
                    resultado = Number(x1) - Number(x2);

                    console.log(resultado);
                    this._pila.push(resultado);
                } else if (temp._dato == "*") {
                    resultado = Number(x1) * Number(x2);

                    console.log(resultado);
                    this._pila.push(resultado);
                } else if (temp._dato == "/") {
                    resultado = Number(x1) / Number(x2);

                    console.log(resultado);
                    this._pila.push(resultado);
                }
            }
            this.eliminarP(temp._dato);
            this._realizarOperacion();
        }
    }

    obtenerValores1(dato) {
        let nuevoNodo = dato;
        while (nuevoNodo != null) {
            if (nuevoNodo._dato == "*" || nuevoNodo._dato == "/") {
                this.agregarProducto(nuevoNodo);
            }
            nuevoNodo = nuevoNodo._siguiente;
        }
        this.obtenerValores2(this._inicio)

    }
    obtenerValores2(dato) {
        let nuevoNodo = dato;
        while (nuevoNodo != null) {
            if (nuevoNodo._dato == "+" || nuevoNodo._dato == "-") {
                this.agregarProducto(nuevoNodo);
            }
            nuevoNodo = nuevoNodo._siguiente;
        }

    }

    agregarProducto(dato) {
        let nuevoNodo = (dato);
        this._agregar(nuevoNodo._anterior, nuevoNodo, nuevoNodo._siguiente);



        //  console.log(this._inicio);
    }

    _agregar(izquierda, raiz, derecha) {
        //  console.log(raiz + "1666")
        if (izquierda == null) {
            raiz._izquierda = izquierda;
            raiz._derecha = derecha

            this.eliminarP(derecha._dato)
        } else {
            raiz._izquierda = izquierda;
            this.eliminarP(izquierda._dato)
            raiz._derecha = derecha;
            this.eliminarP(derecha._dato);
        }
    }


    inOrder() {
        this._nodos = '';

        if (this._inicio != null) {
            this._inOrder(this._inicio);
        }

        return this._nodos;
    }

    _inOrder(raiz) {
        if (raiz != null) {
            this._inOrder(raiz._izquierda);
            this._nodos += raiz.toString();
            this._inOrder(raiz._derecha);

        }

    }


    preOrder() {
        this._nodos = '';

        if (this._inicio != null) {
            this._preOrder(this._inicio);
        }

        return this._nodos;
    }

    _preOrder(raiz) {
        if (raiz != null) {
            this._nodos += raiz.toString();
            this._preOrder(raiz._izquierda);
            this._preOrder(raiz._derecha);

        }

    }

    postOrder() {
        this._nodos = '';

        if (this._inicio != null) {
            this._postOrder(this._inicio);
        }

        return this._nodos;
    }

    _postOrder(raiz) {
        if (raiz != null) {
            this._postOrder(raiz._izquierda);
            this._postOrder(raiz._derecha);
            this._nodos += raiz.toString();

        }

    }

    agregarALista(caracter) {
        let nuevo = new Productos(caracter);
        if (this._inicio === null) {
            this._inicio = nuevo;
            this._final = nuevo;
        } else {
            let temp = this._inicio;
            let tempF = this._final;
            while (temp._siguiente != null) {
                temp = temp._siguiente;
            }
            temp._siguiente = nuevo;
            nuevo._anterior = temp;
            this._final = nuevo;

        }

    }

    eliminarP(codigoP) {
        if (this._inicio == null) {
            console.log("no se encontró")

        } else if (10 > 2) {
            let temp = this._inicio;
            let tempF = this._final;
            ////REALIZAR validaciones con if para el primer y ultimo termino////
            // console.log(codigoP + "//////////");
            if (codigoP == this._inicio._dato) {
                this._inicio = temp._siguiente;



            } else if (codigoP == tempF._dato) {
                tempF._anterior._siguiente = null;
                this._final = tempF._anterior;
                //console.log("se elimino");


            } else {

                while (temp._siguiente != null) {
                    if (codigoP == (temp._dato)) {
                        // console.log(codigoP + " ////" + temp._dato);
                        temp._siguiente._anterior = temp._anterior;
                        temp._anterior._siguiente = temp._siguiente

                        //  console.log(this._inicio);
                        break
                    } else {
                        temp = temp._siguiente;
                    }
                }
            }

        } else {
            alert('El producto no existe');
        }
    }


}