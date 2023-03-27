let hour = 0;
let min = 0;
let sec = 0;

let displayHour;
let displaySec;
let displayMin;

let status = 'stopped';

let interval = null; 
let lapNow = null;

function start(){
    sec++
    if (sec == 60){
        min++;
        sec = 0;
        if ( min == 60){
            hour++;
            min = 0;
        }
    }

    if(sec < 10){
        displaySec = '0'+ sec;
    } else {
        displaySec = sec; 
    }

    if ( min < 10){
        displayMin = '0' + min;
    } else {
        displayMin = min;
    }

    if (hour < 10){
        displayHour = '0' + hour;
    } else {
        displayHour = hour;
    }

    document.getElementById('time').innerHTML = `${displayHour}:${displayMin}:${displaySec}`;
}

function startStop () {
    if ( status === 'stopped'){
      interval = window.setInterval(start, 1000);
      status = 'started'
      document.getElementById('start-btn').innerHTML = 'Stop';
      document.getElementById("start-btn").style.background = "red";

    } else {
      window.clearInterval(interval);
      status = 'stopped';
      document.getElementById('start-btn').innerHTML = 'Start';
      document.getElementById("start-btn").style.background = "rgba(9, 53, 108, 0.69)";
    }
}

function reset (){
    window.clearInterval(interval);
    hour = 0;
    min = 0;
    sec = 0;
    displayHour = 0;
    displayMin = 0;
    displaySec = 0;
    status = 'stopped';
    document.getElementById('time').innerHTML = "00:00:00"
    document.getElementById('lap-time').innerHTML = '';
    document.getElementById('start-btn').innerHTML = 'Start';
    document.getElementById("start-btn").style.background = "rgba(9, 53, 108, 0.69)";
}