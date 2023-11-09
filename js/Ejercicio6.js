// 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.
// La fórmula del perímetro  es p = 2*(a +b)
// Ejemplo:
// Input:
// lado A = 24
// lado B = 5
// Output: 58


let lado1 = (prompt("Ingrese el valor del primer lado del rectángulo:"));
let lado2 = (prompt("Ingrese el valor del segundo lado del rectángulo:"));

function calcularPerimetro(lado1, lado2) {
    let perimetro = 2 * (lado1 + lado2);
    return perimetro;
}

let resultado = calcularPerimetro(lado1, lado2);
document.write("El perímetro del rectángulo es:"+resultado);