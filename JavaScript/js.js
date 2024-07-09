//Comentario de una lina
/*
    Comentario de bloque
*/

//Declaracion de variables
var cuandoLosGatosNoEstanLosRatonesMusicaTocan;
var intEdad = 30; //Más antigua
const strEdad = "Viejo"; //Nuevas implementaciones de Js
let arrEdades = [1,2,3,4] //""

if(intEdad === 30){
    console.log("Entro a la condición")
} else{
    console.log("No entró a la condición")
}

switch (strEdad){
    case "3raEdad":
    case "Viejo":
        console.log("Entro Viejo")
        break;
    case "30":
        console.log("Entro 30")
        break;
    default:
        console.log("No entró")
}

if (v && x && y){
    console.log("Haga Algo")
}
if( v || x || y){
    console.log("Haga aldo si alguna de las variables es verdadera")
}

for (let i = 0 ; i < arrEdades.length ; i++){
    console.log(arrEdades[i])
}
let intControl = 0;
while (intControl < 100) {
    intControl ++;
}

do {
    intControl --;
}while (intControl > .0)
    