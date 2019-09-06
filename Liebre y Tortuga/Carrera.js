class Dado {
    constructor() {}

    lanzar() {
        return Math.trunc(Math.random(this.caras) * 100 + 1);
    }


}
//La clase Competidores se hereda de Dado para poder tomar el metodo de lanzar()//
class Competidores extends Dado {
    constructor() {
        super()
        this._meta = 90;
        this._nombre;
        this._puntos = 0;

    }

    get meta() {
        return this._meta
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

}

class Liebre extends Competidores {
    constructor(nombre) {
        super(nombre)
    }

    avanzarLiebre() {
        if (this.lanzar() <= 20) {
            this.puntos += 0;
        } else if (this.lanzar() <= 40) {
            this.puntos += 9;
        } else if (this.lanzar() <= 50) {
            this.puntos += -12;
        } else if (this.lanzar() <= 85) {
            this.puntos += 1
        } else {
            this.puntos += -2
        }
    }

}

class Tortuga extends Competidores {
    constructor(nombre) {
        super(nombre)

    }
    avanzar() {
        if (this.lanzar() <= 20) {
            this.puntos += -6;
        } else if (this.lanzar() <= 50) {
            this.puntos += 1;
        } else {
            this.puntos += 3;
        }
    }
}

var tortuga = new Tortuga;
tortuga.nombre = "Franklin";
var liebre = new Liebre;
liebre.nombre = "Bugs Bunny";
//VARIABLE PARA ALTERNAR TURNOS//
var turno = 1;

//Ciclo para que se muevan los jugadores y sigue mientras sea menor a 90//
while (tortuga.puntos < 90 && liebre.puntos < 90) {
    if (turno === 1) {
        console.log(tortuga.puntos + "ooooooooooooooooooooooo");
        tortuga.avanzar();
    } else if (turno === -1) {
        console.log(liebre.puntos + "LLLLLLLLLLLLLLLLLLLLLLLLLLLL");
        liebre.avanzarLiebre();
    }
    turno *= -1;
}

//Se pregunta cual de los gano para posteriormente mostrarlo en un Alert//
if (tortuga.puntos >= 89) {
    alert(tortuga.nombre + " Ganó")
    console.log(tortuga.nombre);
} else if (liebre.puntos >= 89) {
    alert(liebre.nombre + " Ganó")
    console.log(liebre.nombre)
}