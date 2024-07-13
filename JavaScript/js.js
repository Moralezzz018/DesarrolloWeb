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
    
//Areglos
const arrNombre = [1, true, "Hola"];

const arrPalabras = [["1","2","3","4"], ["5","6","7","8"]]
for (let i=0;j<arrPalabras.length;i++){
    for (let j=0;j<arrPalabras[i].length;j++)
        console.log(`i:${i} j:{j} -> ${arrPalabras[i],[j]}`)
}

console.log("-------------------------------------------")

/*arrPalabras.forEach((elm, i)=>{
    ele.forEach(pal, j)=>{
        console.log(`i:${i} j:{j} -> ${pal}`)
    }
});*/

const arrNumeros = arrPalabras.map(
    (elm)=> {
        return elm.map((pal)=>{ return Number(pal)});
    }
);

console.log('arrPlabras', arrPalabras)
console.log('arrNumeros', arrNumeros)

//Olog buscar que es
const arrNonSorted = [15,8,10,100,20,12,33,500]
const sortedArray = [...arrNonSorted].sort(
    (objA, objB)=>{return objA-objB}
);
const rsortedArray = [...arrNonSorted].sort(
    (objA, objB)=>{return objB-objA}
);
console.log(`sortedArray`, sortedArray);
console.log(`rsortedArray`, rsortedArray);

//filtro
const lessThan30 = arrNonSorted.filter(
    (obj)=>{
        return obj < 30;
    }
);
console.log(`lessThan30`, lessThan30);

console.log(
    arrNumeros.map(elm=>elm.join(',')).join('\n\r')
)