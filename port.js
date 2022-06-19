var horas = new Date().toLocaleTimeString();
console.log(horas);
const tema = document.querySelector('.tema');

if (horas >= '06:00:00' && horas <= '18:00:00') {

    tema.style.background = 'url(Tlou2.png)';

} else {
    tema.style.background = 'url(Tlou2b.jpg)';
}
/*
    codigo usado para altera  a imagem tema dependendo do horario
    da 6 horas as 18 o tema 1 é usado
    das 18 e 01 até 5 e 59 o tema 2 é usado
*/