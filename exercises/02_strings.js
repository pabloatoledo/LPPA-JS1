/*
2. Strings

    * Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
    * Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
    * Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
*/

var str1 = "cadena con mas de 10 caracteres";
var str1prima = str1.substring(0,5);

console.log("La cadena 1 original es: " + str1);
console.log("Las primeras 5 letras son: " + str1prima);

/* ----------------------------- */

var str2 = "otra cadena con MAS de 10 Caracteres";
var str2prima = str2.substring(0,1).toUpperCase() + str2.substring(1).toLowerCase();

console.log("La cadena 2 original es: " + str2);
console.log("La cadena modificada es: " + str2prima);

/* ----------------------------- */

var str3 = "Nueva cadena que tiene mas de 10 caracteres y espacio";
var posBlankSpace = str3.indexOf(" ");

console.log("La cadena 3 original es: " + str3);
console.log("La posicion del primer espacio en blanco es: " + posBlankSpace);