class Dado {
    constructor() {}

    lanzar() {
        return Math.trunc(Math.random(this.caras) * 6 + 1);
    }


}
var dado = new Dado();
//La clase Competidores se hereda de Dado para poder tomar el metodo de lanzar()//
class Competidores {
    constructor() {
        this._meta = 100;
        this._nombre;
        this._puntos = 0;

    }


    get meta() {
        return this._meta;

    }



    get puntos() {
        return this._puntos
    }
    set puntos(punto) {
        this._puntos = punto
    }

    get nombre() {
        return this._nombre
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    avanzar() {
        var sYE = [];
        for (let i = 1; i <= 100; i++) {
            sYE.push(0);
        }
        sYE[15] = 1;
        sYE[17] = 1;
        sYE[28] = 1;
        sYE[46] = 1;
        sYE[53] = 1;
        sYE[71] = 1;
        sYE[86] = 1;
        sYE[99] = 1;

        sYE[5] = 2;
        sYE[19] = 2;
        sYE[29] = 2;
        sYE[47] = 2;
        sYE[55] = 2;
        sYE[72] = 2;
        sYE[85] = 2;
        sYE[9] = 2;


        var tiro = dado.lanzar();
        console.log('Dado=' + Number(tiro));
        this.puntos += tiro;
        if (sYE[this.puntos] === 1) {

            console.log("Caiste en la casilla " + this.puntos + ", S-E-R-P-I-E-N-T-E!!!!, BAJAS");
            return this._serpientes(this.puntos);

        } else if (sYE[this.puntos] === 2) {
            console.log("Caiste en la casilla " + this.puntos + ", E-S-C-A-L-E-R-A!, SUBES");
            return this._escaleras(this.puntos);

        } else {

            return this.puntos;
        }
    }

    _escaleras(posicion) {
        if (posicion === 5) {
            this.puntos = 18;
        } else if (posicion === 19) {
            this.puntos = 26;
        } else if (posicion === 29) {
            this.puntos = 50;
        } else if (posicion === 47) {
            this.puntos = 56;
        } else if (posicion === 55) {
            this.puntos = 68;
        } else if (posicion === 72) {
            this.puntos = 82;
        } else if (posicion === 85) {
            this.puntos = 94;
        } else if (posicion === 9) {
            this.puntos = 12;
        }

    }

    _serpientes(posicion) {
        if (posicion === 15) {
            this.puntos = 3;
        } else if (posicion === 17) {
            this.puntos = 8;
        } else if (posicion === 28) {
            this.puntos = 13;
        } else if (posicion === 46) {
            this.puntos = 22;
        } else if (posicion === 53) {
            this.puntos = 36;
        } else if (posicion === 71) {
            this.puntos = 51;
        } else if (posicion === 86) {
            this.puntos = 48;
        } else if (posicion === 99) {
            this.puntos = 68;
        }

    }

}

class Tablero {
    constructor() {
        this._meta = 100;
        this._escalara;
        this._serpiente;
    }


    carrera() {
        var p1 = new Competidores();
        p1.nombre = "Franklin";
        var p2 = new Competidores();
        p2.nombre = "Bugs Bunny";
        //VARIABLE PARA ALTERNAR TURNOS//


        //Ciclo para que se muevan los jugadores y sigue mientras sea menor a 90//
        while (p1.puntos < p1.meta && p2.puntos <p2.meta) {

            p1.avanzar();
            console.log(p1.nombre + " esta en la casilla " + p1.puntos);


            p2.avanzar();
            console.log(p2.nombre + " esta en la casilla " + p2.puntos);

        }


        //Se pregunta cual de los gano para posteriormente mostrarlo en un Alert//
        if (p1.puntos >= 100 && p2.puntos >= 100) {
            alert("El resultado fue un empate")
        } else if (p1.puntos >= 100) {
            alert(p1.nombre + " Ganó")
            console.log(p1.nombre+ " Ganó")
        } else if (p2.puntos >= 100) {
            alert(p2.nombre + " Ganó")
            console.log(p2.nombre + " Ganó");
        }
    }
}
var correr = new Tablero;
console.log(correr.carrera());