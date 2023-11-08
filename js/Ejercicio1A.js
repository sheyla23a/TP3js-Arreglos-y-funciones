// Ejercicio 1A: Encontrar el número mayor en un arreglo:: Escribe una función que tome un arreglo de números como argumento y devuelva el número más grande en el arreglo

function calcularMayor(numeros){
    let mayor = numeros[0];
  for (let i = 0; i < numeros.length; i++) {
    if(mayor < numeros[i]){
        mayor = numeros [i]
    }
  }
  return mayor;
}

// ejemplo de uso

let numerosEjemplo = [5, 10, 3, 8, 1, 6];
let resultado = calcularMayor(numerosEjemplo);
console.log("El número más grande es:", resultado);