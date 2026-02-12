let edad, final;

edad = prompt("Introduce tu edad: ", "0");

if (isNaN(edad)){
    final = "Error. La edad no es un número";
} else {
    final = (edad < 18) ? "Demasiado joven" : "Mayor de edad";
}

alert(final);


// isNaN significa Not a Number y devuelve
// true → si el valor no es un número (o no puede convertirse en número),
//  false → si el valor sí es un número o puede convertirse en uno