let dato1, dato2, num1, num2, operacion, resultado;

dato1 = window.prompt("Introduce el primer operando: ", "0");
num1 = parseFloat(dato1);

dato2 = window.prompt("Introduce el segundo operando: ", "0");
num2 = parseFloat(dato2);

operacion = window.prompt("Introduce el numero de la operacion que desees realizar: ", "").toLowerCase();

if (operacion==="suma"){
    resultado = num1 + num2;
    alert("El resultado de la suma es: " + resultado);
}else if (operacion==="resta"){
    resultado = num1 - num2;
    alert("El resultado de la resta es: " + resultado);
}else if (operacion==="multiplicacion" || operacion==="multiplicación"){
    resultado = num1 * num2;
    alert("El resultado de la multiplicación es: " + resultado);
}else if (operacion==="division" || operacion==="división"){
    if (num2!=0){
        resultado = num1 / num2;
        alert("El resultado de la división es: " + resultado);
    } else {
        alert("No se puede dividir entre 0");
    }
}else {
    alert("Ha introducido una operación incorrecta");
}