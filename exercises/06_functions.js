/*

6. Funciones

    * Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
    * A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
    * A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).

*/


function ejerc6 (num1, num2) {
    return num1 + num2;    
}
var suma1 = ejerc6(25, 5);
console.log("La suma de ambos numeros es: " + suma1);

/* ----------------------------- */

function ejerc6b (num1, num2) {
    var suma = num1 + num2;
    if (isNaN(suma)) {
        alert("Algunos de los parametros contiene errores");
        return NaN;
    } else {
        return suma;
    }
}

var suma2 = ejerc6b(25, 10);
console.log(suma2);

/* ----------------------------- */

function ejerc6c (num1, num2) {
    var suma = num1 + num2;
    if (isNaN(suma)) {
        alert("Algunos de los parametros contiene errores");
        return NaN;
    } else {
        if (Number.isInteger(suma)) {
            return suma;
        } else {
            alert("La suma contiene decimales!!!!!");
            return Math.round(suma);
        }
    }
}

var suma3 = ejerc6c(15, 12);
console.log(suma3);

