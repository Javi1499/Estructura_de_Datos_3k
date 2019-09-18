var boton = document.querySelector("#btnAdd");
boton.addEventListener('click', numerosAmigos);



function numerosAmigos() {
    for (let i = 1; i < 3000; i++) {
        var divisor = 1;
        var suma = 0;
        for(let j=1;j>=divisor;j++) {
            if ((i / j) % 1 === 0) {
                suma += divisor;
                divisor++
                console.log(suma);

            }
        }
        var numero2 = suma
        var divisor2 = 1
        var suma2 = 0
        for(let k=1;k>=divisor2;k++){
            if ((numero2 / k) % 1 === 0) {
                suma2 += l;

            }
            divisor2++
        }



        if (i === suma2 && numero2 === suma) {

            console.log(i + "////////" + numero2)
        }
    }



}

//1184  1210
//2620 2924