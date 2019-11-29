function extraer() {
    let temp = this._inicio;
    let trueOrFalse = false;
    let nodoExtraido = '';

    while (temp._siguiente != null) {
        if (temp._prioridad == 1) {
            nodoExtraido=temp._dato;
            temp._anterior._siguiente = temp._siguiente;
            temp._siguiente._anterior = temp._anterior;
            trueOrFalse = true;
            break
        } else {
            temp = temp._siguiente;
        }
    }
    if (trueOrFalse == true) {
        return nodoExtraido
    } else {
        let t
        nodoExtraido = this._inicio._dato;
        this._inicio = t._siguiente;
        return nodoExtraido
    }
}