// 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

let resultados = [];
for (let i = 0; i < 50; i++) {
  let dado1 = Math.floor(Math.random() * 6) + 1;
  let dado2 = Math.floor(Math.random() * 6) + 1;

  let suma = dado1 + dado2;
  if (resultados[suma]) {
    resultados[suma]++;
  } else {
    resultados[suma] = 1;
  }
}

let tablaHTML = "<table><tr><th>Suma</th><th>Apariciones</th></tr>";
for (let i = 2; i <= 12; i++) {
  tablaHTML += `<tr><td> ${i}</td><td>${resultados[i] || 0}</td></tr>`;
}
tablaHTML += "</table>";

document.write(tablaHTML);
