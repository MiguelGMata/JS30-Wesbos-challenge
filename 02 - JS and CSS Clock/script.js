
function clock(){
    time = new Date();
    hour = time.getHours();
    min = time.getMinutes();
    second = time.getSeconds();
  
    pourcenHour = hour / 12 * 360; //gira la aguja 360 grados hasta las 12
    pourcenHour += ((min / 60) *30) + 90; //  hay una hora entre numeros y 30 grados para mover
    pourcenMin = ((min / 60) * 360) + 90; // hay 60 minutos en una hora y la aguja se mueve 360 grados
    pourcenSecond = ((second / 60) * 360) + 90;
    console.log(pourcenSecond);
    document.querySelector('.hour').style.transform = "rotate("+ pourcenHour +"deg)";
    document.querySelector('.min').style.transform = "rotate("+ pourcenMin +"deg)";
    document.querySelector('.second').style.transform = "rotate("+ pourcenSecond +"deg)";
}

setInterval(clock, 1000); //llamamos a la funcion clock con setInterval cada segundo que es 1000 mili segundo

