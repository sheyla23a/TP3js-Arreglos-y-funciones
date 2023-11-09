// 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.


let numeroUsuario = parseInt(prompt("Ingresa un número para ver su tabla de multiplicar:"));

function tablaMultiplicar(numeroUsuario) {
    let resultado  ;
    for (let i = 1; i <= 10; i++) {
        resultado = numeroUsuario * i;
        document.write(numeroUsuario + 'x'+ i + '='+ resultado);
        document.write('<br>');
    }
}
tablaMultiplicar(numeroUsuario);