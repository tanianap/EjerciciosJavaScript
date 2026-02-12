do {
    nombre = prompt("Introduce tu nombre por favor: ", "");
} while (!isNaN(nombre) || nombre == null);

do {
    edad = prompt("Introduce tu edad por favor: ");
} while (edad<=18 || edad>100 || isNaN(edad));

alert(nombre);
alert(edad);

// !isNaN lo que hace es que si el nombre es un numero vuelve a repetir el bucle
// isNaN lo que hace es que verifica si no es un numero vuelve a repetir el bucle