// Ejercicio 3A: Convertir grados Celsius a Fahrenheit: Escribe una función que tome una temperatura en grados Celsius como argumento y devuelva la temperatura equivalente en grados Fahrenheit.

function celsiusToFahrenheit(celsius) {
  var fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

// ejemplo de uso
let temperaturaCelsius = 20;
let temperaturaFahrenheit = celsiusToFahrenheit(temperaturaCelsius);
console.log(temperaturaFahrenheit);
