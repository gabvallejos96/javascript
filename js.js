alert("Bienvenido al juego de adivina el número");
let numeroRandom = Math.floor(Math.random()*100);
alert(numeroRandom);
let numeroIngresado = parseInt(prompt("Ingrese un número entre 1 y 100"));

let flag = false;

while (numeroIngresado != numeroRandom) {
    flag = true;
    numeroIngresado = jueguito(numeroRandom,numeroIngresado);
    
}

if(flag){
alert("Felicidades, pudiste salir del while, significa que adivinaste el número!!");} else {
    alert("Felicidades, adivinaste el número en el primer intento.")
}


function jueguito (random,nro){

    if (random + 5 >= numeroIngresado && numeroIngresado >= random - 5) {
        let min = random -5; 
        if(min<0){
            min = 0;
        }
        let max = random + 5;
        if(random>100){
            random=100;
        }
        alert(`Estas muy cerca del número. El número se encuentra entre ${min} y ${max}`)
    } else if (random + 10 >= numeroIngresado && numeroIngresado >= random - 10) {
        let min = random -10; 
        if(min<0){
            min = 0;
        }
        let max = random + 10;
        if(random>100){
            random=100;
        }

        alert(`Estas cerca del número. El número se encuentra entre ${min} y ${max}`)
    }

    let devolver = parseInt(prompt("Número ingresado incorrecto, ingrese un nuevo número:"));

    return devolver;

}