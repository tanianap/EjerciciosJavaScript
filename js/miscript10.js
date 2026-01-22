let dato1, dato2, num1, num2;

dato1 = window.prompt("Dame el primer número: ","0");
num1 = parseInt(dato1);

dato2 = window.prompt("Dame el primer número: ","0");
num2 = parseInt(dato2);

if (num1>num2){
    alert("El primer número es el mayor")
}else if (num1==num2) {
    alert("Los dos números son iguales")
}
else {
    alert("El segundo número es el mayor")
}