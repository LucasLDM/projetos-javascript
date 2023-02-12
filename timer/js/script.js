/* 
    A função setInterval serve para invocar uma função várias vezes
    a cada intervalo de tempo. A estrutura é:
    
        setInterval(função, tempoEmMilissegundos);
*/

let sec = 0;
let min = 0;
let hour = 0;
let interval;

function start(){
    watch(); // Chamando a função primeiro para não esperar 1s no começo
    interval = setInterval(watch, 1000);
}

function pause(){
    // Pausa o timer
    clearInterval(interval);
}

function stop(){
    clearInterval(interval);
    sec = 0;
    min = 0;
    document.getElementById("watch").innerText = "00:00:00";
}

// Caso o número for menor que 10, ele aparecerá como 01, 02, etc.
function twoDigits(digit){
    if(digit < 10){
        return `0${digit}`;
    }
    else{
        return digit;
    }
}

function watch(){
    sec++;

    if(sec == 60){
        min++;
        sec = 0;

        if(min == 60){
            hour++;
            min = 0;
        }
    }

    document.getElementById("watch").innerText = `${twoDigits(hour)}:${twoDigits(min)}:${twoDigits(sec)}`;
}