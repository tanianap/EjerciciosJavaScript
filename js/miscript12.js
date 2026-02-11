let marca, modelo;

marca = window.prompt("Introduzca la marca del coche: ").toLocaleLowerCase();

modelo = window.prompt("Introduzca el modelo del coche: ").toLocaleLowerCase();

if (marca==="ford" && modelo==="fiesta"){
    alert("Tienes un descuento del 5%")
} else if (marca==="ford" && modelo==="focus"){
    alert("Tienes un descuento del 10%")
}else {
    alert("No tienes un descuento")
}