// 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
// Ejemplo:
// Input:
// [‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’, ‘Roma, Italia’, ‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo, Egipto’]

const ciudades = [];
let ciudad;

do {
  ciudad = prompt("Ingrese el nombre de una ciudad (o presione Cancelar para finalizar):");
  if (ciudad) {
    ciudades.push(ciudad);
  }
} while (ciudad !== null);

console.log(ciudades);

document.write("El arreglo de ciudades tiene" +" " + ciudades.length +" " +"elementos:" + "<br>");

document.write("<h2>Ciudades</h2>");
document.write("<ul>");
document.write("<li>Elemento 1er posicion: " + ciudades[0] + "</li>");
document.write("<li>Elemento 3er posicion: " + ciudades[2] + "</li>");
document.write("<li>Elemento última posicion: " + ciudades[ciudades.length - 1] + "</li>");
document.write("</ul>");

ciudades[1] = "Barcelona";
ciudades[ciudades.length - 1] = "París"
document.write("<ul>");
document.write("<li>Elemento última posicion: " +ciudades[ciudades.length - 1]+ "</li>");
document.write("</ul>");

document.write("<h2>Arreglo de ciudades</h2>");
document.write("<ul>");
for (var i = 0; i < ciudades.length; i++) {
  document.write("<li>" +"Elemento:" + ciudades[i] + "</li>");
}
document.write("</ul>");






