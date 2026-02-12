var animal = "";
var animales = []; //var animaes = new Array();

while (animal!="FIN"){
    animal = prompt("Dime el nombre de un animal (Fin para terminar)","");
    animal = animal.toUpperCase();
    if (animal!="FIN" && animal !=""){
        animales.push(animal);
    }
}

alert("Animales introducidos:")
animales.forEach(animal => alert(animal));

// Se añade la linea .toUpperCase debido a que asi nos aseguramos que independientemente como lo escriba el usuario
// el programa finalizara y no será un bucle infinito.

// Se añade !="" para asegurarnos de que no se introduzca un espacion vacío al array


