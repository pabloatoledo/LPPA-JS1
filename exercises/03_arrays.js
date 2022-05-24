/*

3. Arrays

    * Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11.
    * Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
    * Agregar un elemento al principio y al final del array (utilizar unshift y push).
    * Quitar un elemento del principio y del final del array (utilizar shift y pop).
    * Invertir el orden del array (utilizar reverse).
    * Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
    * Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

*/

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var meses2 = meses.slice(4, 11);

console.log("El mes 5 es: " + meses [4]);
console.log("El mes 11 es: " + meses [10]);

/* ----------------------------- */

meses.sort();
console.log("Meses ordenados alfabeticamente: " + meses);

/* ----------------------------- */

meses.unshift("mes 1 agregado");
meses.push("mes 13 agregado");
console.log("Se agrega un mes al comienzo y uno al final: " + meses);

/* ----------------------------- */

meses.shift();
meses.pop();
console.log("Se eliminan el primer y ultimo registro: " + meses);

/* ----------------------------- */

meses.reverse();
console.log("Se invierte el orden de los elementos: " + meses);

/* ----------------------------- */

var mesesUnidos = meses.join('-');
console.log("Todos los elementos unidos: " + mesesUnidos);

/* ----------------------------- */

console.log("Los meses desde mayo a Noviembre son: " + meses2);