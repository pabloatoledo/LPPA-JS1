/*

5. For

    * Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
    * Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
    * Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).

*/

/*

var palabras = ["audi", "bmw", "toyota", "ford", "nissan"];

for(x = 0; x < 5; x++) {
    alert(palabras[x]);
}

/* ----------------------------- */

/*
for (y = 0; y < 5; y++) {
    palabras[y] = palabras[y].substring(0,1).toUpperCase() + palabras[y].substring(1);
    alert(palabras[y]);
}

/* ----------------------------- */

var newArray = [];

for (z = 0; z < 10; z++) {
    newArray[z] = z;
}

console.log(newArray);