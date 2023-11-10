// Ejercicio 4A: Generar números primos: Escribe una función que tome un número entero como argumento y devuelva un arreglo de todos los números primos menores o iguales a ese número.


function numerosPrimosHastaN(n) {
    const primos = [];

    function esPrimo(num) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    }

    for (let i = 2; i <= n; i++) {
        if (esPrimo(i)) {
            primos.push(i);
        }
    }

    return primos;
}

// Ejemplo de uso
const resultado = numerosPrimosHastaN(20);
console.log(resultado); // Mostrará [2, 3, 5, 7, 11, 13, 17, 19]

