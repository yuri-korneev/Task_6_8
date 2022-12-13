const trafficLightGreen = document.querySelector('#trafficLightGreen');
const trafficLightYellow = document.querySelector('#trafficLightYellow');
const trafficLightRed = document.querySelector('#trafficLightRed');
const trafficLightCommon = document.querySelector('#trafficLightCommon');

function makeGreen() {
    trafficLightGreen.style.background = ('green');
    trafficLightYellow.style.background = ('black');
    trafficLightRed.style.background = ('black');
   }
 
function makeYellow() {
    trafficLightYellow.style.background = ('yellow');
    trafficLightGreen.style.background = ('black');
    trafficLightRed.style.background = ('black');
    }

function makeRed() {
    trafficLightRed.style.background = ('red');
    trafficLightGreen.style.background = ('black');
    trafficLightYellow.style.background = ('black');  
}

function makeGreenCommon() {
    trafficLightCommon.style.background = ('green');
    trafficLightCommon.removeEventListener('click', makeGreenCommon);
    trafficLightCommon.addEventListener('click', makeYellowCommon);
}

function makeYellowCommon() {
    trafficLightCommon.style.background = ('yellow');
    trafficLightCommon.removeEventListener('click', makeYellowCommon);
    trafficLightCommon.addEventListener('click', makeRedCommon);
}

function makeRedCommon() {
    trafficLightCommon.style.background = ('red');
    trafficLightCommon.removeEventListener('click', makeRedCommon);
    trafficLightCommon.addEventListener('click', makeGreenCommon);
}


trafficLightGreen.addEventListener('click', makeGreen);
trafficLightYellow.addEventListener('click', makeYellow);
trafficLightRed.addEventListener('click', makeRed);
trafficLightCommon.addEventListener('click', makeGreenCommon);




