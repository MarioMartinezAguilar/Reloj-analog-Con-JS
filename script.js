// vamos a crear las tres variables que controlan el reloj horas, minutos y segundos a través del querySelector por clase
const secondHand = document.querySelector('.seconds');
const minuteHand = document.querySelector('.minutes');
const hourHand = document.querySelector('.hours');

// creamos una función para mover las manecillas según la hora
const moveHands = () => {
    //traemos la hora completa con JS
    const date = new Date();
    //traemos los segundos y lo dividimos entre 60 para que gire alrededor del circulo(aplica con minutos), con horas también pero se divide entre 12, después le vamos a sumar los segundos a los minutos y los minutos a las horas para que se vayan dando la hora
    const seconds = date.getSeconds() / 60;
    const minutes = (seconds + date.getMinutes()) / 60;
    const hours = (minutes + date.getHours()) / 12;

    // vamos a cambiar el estilo la variable(rotate) para que las manecillas se muevan en círculo según la hora actual seteandole el valor a las variables creadas al principio con el querySelector  teniendo el valor actual lo multiplicamos por 360 para que giren en el circulo
    secondHand.style.setProperty('--rotate', seconds * 360);
    minuteHand.style.setProperty('--rotate', minutes * 360);
    hourHand.style.setProperty('--rotate', hours * 360);

}
// aquí tenemos que llamar la función cada segundo para que el reloj funcione infinitamente con setInterval
setInterval(moveHands, 1000);