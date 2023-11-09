// 2:Ejercicio 2A: Filtrar números pares en un arreglo: Escribe una función que tome un arreglo de números como argumento y devuelva un nuevo arreglo que contenga solo los números pares del arreglo original.

function numerosPares(arreglo) {
    return arreglo.filter(numero => numero % 2 === 0);
}


// ejemplo de se uso
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares = numerosPares(numeros);

console.log(pares);
