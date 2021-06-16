const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isLampBroken(){
    return lamp.src.indexOf ('quebrada') > -1;
}

function ligaLamp(){
    if (!isLampBroken()){
        lamp.src = './img/ligada.jpg';
    }
}

function desligaLamp(){
    if(!isLampBroken()){
        lamp.src = './img/desligada.jpg';
    }
}

function lampBroken(){
    lamp.src = './img/quebrada.jpg';
}

turnOn.addEventListener('click', ligaLamp);
turnOff.addEventListener('click', desligaLamp);
lamp.addEventListener('mouseover', ligaLamp);
lamp.addEventListener('mouseleave', desligaLamp);
lamp.addEventListener('dblclick', lampBroken);
