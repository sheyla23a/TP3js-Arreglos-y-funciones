// 5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

function analizarCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
      return 'La cadena está compuesta solo por mayúsculas.';
    } else if (cadena === cadena.toLowerCase()) {
      return 'La cadena está compuesta solo por minúsculas.';
    } else {
      return 'La cadena está compuesta por una mezcla de mayúsculas y minúsculas.';
    }
  }

// Ejemplos de uso
console.log(analizarCadena('SOLO MAYÚSCULAS'));
console.log(analizarCadena('solo minúsculas'));  
console.log(analizarCadena('MeZcLaDa')); 