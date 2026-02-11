let dato1, dato2, nombre, num2, dato3, opcion;

nombre = window.prompt("Dame tu nombre: ");


dato2 = window.prompt("Dame la edad del alumno: ","0");
num2 = parseInt(dato2);

dato3 = window.prompt("Es alumno de FP (s/n): ").toLocaleLowerCase();


if (num2>18 && dato3=="s"){
    alert("Acceso permitido. Bienvenido " + nombre)
}
else {
    alert("Acceso Denegado")
}