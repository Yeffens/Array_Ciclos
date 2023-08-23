// Sumar Los Numero Y Sacar El Promedio

let numerosPro = [12,18,26,30,23,50,45,75];
let suma =0
let promedio= 0
let tamanio = numerosPro.length
numerosPro.forEach((numero)=> {
    suma = suma + numero

})
promedio = suma / tamanio;

console.log("El Promedio Es"+promedio)