// 1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.

const meses = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];
document.write("<h2>Lista de meses</h2>");
document.write(`<ul>`);
for (i = 0; i < meses.length; i++) {
  document.write(`<li>${meses[i]}</li>`);
}
document.write(`</ul>`);
