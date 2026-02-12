var fruta=prompt("¿Qué fruta te gusta más? (Naranja / Manzana / Kiwi / Plátano").toUpperCase();

switch(fruta){
    case "NARANJA":
        alert("La naranja es muy rica en vitamina C");
        break;
    case "MANZANA":
        alert("La manzana baja el colesterol");
        break;
    case "KIWI":
        alert("El kiwi tiene muchas vitaminas");
        break;
    case "PLATANO":
    case "PLÁTANO":
        alert("El plátano tiene mucho potasio");
        break;
    default:
        alert("Esa fruta no la conozco");
        location.reload(window);
}

// El reload hace que la página se vuelva a cargar y por tanto se ejecuta nuevamente el código.