const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let datetoday = new Date();
    let Hora = datetoday.getHours();
    let Minutos = datetoday.getMinutes();
    let Segundos = datetoday.getSeconds();


    if(Hora < 10) Hora = '0' + Hora
    if(Minutos < 10) Minutos = '0' + Minutos
    if(Segundos < 10) Segundos = '0' + Segundos

    horas.textContent = Hora;
    minutos.textContent = Minutos;
    segundos.textContent = Segundos
})