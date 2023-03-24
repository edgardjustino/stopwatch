let [hour, min, sec] = [0, 0, 0];
let displayTime = document.getElementById('time');
let interval = null; 

function start () {
        sec++;
        if (sec == 60){
            sec = 0;
            min++;

            if ( min == 60) {
                min = 0;
                hour++;
            }
        }

        let displayHour = hour < 10 ? '0' + hour : hour;
        let displayMin = min < 10 ? '0' + min : min;
        let displaySec = sec < 10 ? '0' + sec : sec;

        time.innerHTML = displayHour + ':'+ displayMin +':'+displaySec;

}

function watchstart(){
    setInterval(start,1000);
}