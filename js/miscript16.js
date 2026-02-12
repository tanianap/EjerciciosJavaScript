let dato1, edad;

dato1 = window.prompt("Introduce tu edad: ", "0");

edad=parseInt(dato1);

if(edad>0 && edad<12){
    alert("Todavía eres muy pequeño")
} else if (edad>=12 && edad<19) {
    alert("Eres un/a adolescente")
} else if (edad>=19 && edad<35){
    alert("Aún sigues siendo joven")
} else if(edad>=35){
    alert("Piensa en cuidarte un poco más")
}else {
    alert("Edad incorrecta")
}