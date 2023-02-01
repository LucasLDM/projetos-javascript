const turnOn = document.getElementById("turnOn");
const respawn = document.getElementById("respawn");
const turnOff = document.getElementById("turnOff");
const lamp = document.getElementById("lamp");

/* Se a fonte (nome da imagem) tiver a palavra "broken", retorna true,
caso contrário, retorna false */
function isLampBroken(){
    return lamp.src.indexOf("broken") > -1;
}

/* Antes de executar, as funções procuram saber se a lampada está quebrada */
function lampOn(){
    if(!isLampBroken()){
        lamp.src = "./img/lamp-on.jpg";
    }
}

function lampOff(){
    if(!isLampBroken()){
        lamp.src = "./img/lamp-off.jpg";
    }
}

function breakLamp(){
    lamp.src = "./img/lamp-broken.jpg";
}

function respawnLamp(){
    if(isLampBroken()){
        document.location.href = "./index.html"; // Redireciona à página principal
    }
}

turnOn.addEventListener("click", lampOn);
respawn.addEventListener("click", respawnLamp);
turnOff.addEventListener("click", lampOff);
lamp.addEventListener("mouseover", lampOn); // Passando o mouse por cima
lamp.addEventListener("mouseleave", lampOff); // Afastando o mouse da lâmpada
lamp.addEventListener("dblclick", breakLamp); // Ao clicar duas vezes