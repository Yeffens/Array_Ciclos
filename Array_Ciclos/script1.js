
// Ciclo For Normal
// let animales=[ loro, pato, gato, perro, elefante];

// for(let i = 0; i < animales.length; i++){

//     console.log(animales[i]);
// }


// Array Ciclo ForEach Recore Cada Uno
// let animales= [ "loro", "pato", "gato", "perro", "elefante"];
// animales.forEach((animales)=>{
//     console.log("animal es: " + animales);
// });

// Array Ciclo For In Es Una Forma Mas Sencilla De Recorer Nuestro Array Muestra Solo El Espacio Del Array

// let animales = [ "loro", "pato", "gato", "perro", "elefante"];
// for(let indice in animales){
//     console.log([indice]);
// }

// Array Ciclo For Of 
let animales = [ "loro", "pato", "gato", "perro", "elefante"];

// for(let animal of animales){
//     console.log(animal);
// }

let arrayAnimales = animales.filter((animales) => animales.length > 4);

console.log(arrayAnimales);