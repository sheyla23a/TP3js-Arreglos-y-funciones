// 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

function determinarParOImpar(numero) {
    if (numero % 2 === 0) {
      return "El número es par";
    } else {
      return "El número es impar";
    }
 }
  

//   ejemplo de uso
  let numeroEjemplo = 8;
  let resultado = determinarParOImpar(numeroEjemplo);
  document.write(resultado); 
  