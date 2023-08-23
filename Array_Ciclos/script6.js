let Par =[89, 90 , 91, 92 ,12, 18,2,10,5,11,7];
// Suma De los pares de un array
let numero = [1,2,3,4,5,6,98,43,50]
let sumapares = 0

for (let i = 0; i < numero.length; i++) {
  if (numero[i] %2 === 0){
    sumapares = sumapares + numero[i]
  }
}
console.log(sumapares)