let nota1, num1, nota2, num2, nota3, num3, media;

nota1 = window.prompt("Introduce la primera nota: ");
num1 = parseFloat(nota1);

nota2 = window.prompt("Introduce la segunda nota: ");
num2 = parseFloat(nota2);

nota3 = window.prompt("Introduce la tercera nota: ");
num3 = parseFloat(nota3);

media = (num1 + num2 + num3)/3;

if(media>=5){
    alert("El alumno ha APROBADO.")
}else {
    alert("El alumno ha SUSPENDIDO.")
}


