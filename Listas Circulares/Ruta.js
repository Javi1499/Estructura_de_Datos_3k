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
        let temp = this._inicio;
        if (this._estaBase(nombreB)) {
            while (temp._siguiente != this._inicio) {
                if (temp._nombre === nombreB) {
                    alert(temp.toString())
                    break
                } else {
                    temp = temp._siguiente;
                }
            }
            return temp.toString();

        } else {
            alert('No se encontro el producto');
        }
    }

    eliminarBase(nombreB) {
        if (this._estaBase(nombreB)) {
            let temp = this._inicio;

            ////REALIZAR validaciones con if para el primer y ultimo termino////
            if (nombreB === this._inicio._nombre) {


                while (temp._siguiente != this._inicio) {
                    temp = temp._siguiente;

                }
                this._inicio = this._inicio._siguiente;
                temp._siguiente = this._inicio;


            } else {
                while (temp._siguiente != this._inicio) {
                    (console.log('entro'));
                    if (temp._siguiente._nombre === nombreB) {
                        temp._siguiente = temp._siguiente._siguiente;
                        break
                    } else {
                        temp = temp._siguiente;
                    }

                }
            }
            alert("La base se elimino")
            console.log(this._inicio);
        } else {
            alert('La base no existe');
        }

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
        if (temp._nombre = nombreB) {
            seEncuentra = true;
        }

        return seEncuentra;
    }

    listado() {
        let listaDeBases = '';
        let temp = this._inicio;
        while (temp._siguiente != this._inicio) {
            listaDeBases += (temp.toString() + "<br>")
            temp = temp._siguiente;
        }
        listaDeBases += (temp.toString() + "<br>")
        return listaDeBases
    }

    _conventirAMinutos(hora) {
        let partes = hora.split(':');
        let minutos = (Number(partes[0] * 60)) + (Number(partes[1]));
        return minutos;
    }

    _convertirAHora(minutos) {
        let newminutos = minutos % 60;
        let newHora = Math.trunc(minutos / 60)
        let horaFormato = (Number(newHora) + ':' + (Number(newminutos)));
        return horaFormato
    }

    crearRecorrido(baseInicio, horaI, horaF) {
        let horaIM = this._conventirAMinutos(horaI);
        let horaFM = this._conventirAMinutos(horaF);
        let horaActual = horaIM;
        let recorrido = '';
        let numeroBase = 1;

        let temp = this._inicio;
        if (this._estaBase(baseInicio)) {
            while (temp._siguiente != this._inicio) {
                if (temp._nombre === baseInicio) {
                    alert(temp.toString())
                    break
                } else {
                    temp = temp._siguiente;
                }
            }
            while (horaActual <= horaFM) {
                let tiempo = Number(temp._minutos)
                recorrido += ('Base ' + numeroBase + ": " + temp._nombre + " hora " + this._convertirAHora(horaActual) + "<br>")
                horaActual += tiempo;
                temp = temp._siguiente;
                numeroBase++;
            }
            return recorrido;
        } else {
            alert('No se encontro el producto');
        }
    }
}