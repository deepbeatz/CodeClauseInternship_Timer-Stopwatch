let startBtn = document.getElementById('stopwatch-start');
let stopBtn = document.getElementById('stopwatch-stop');
let resetBtn = document.getElementById('stopwatch-reset');
 
let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
 
startBtn.addEventListener('click', function () {
    timer = true;
    stopWatch();
});
 
stopBtn.addEventListener('click', function () {
    timer = false;
});
 
resetBtn.addEventListener('click', function () {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('stopwatch-hours').innerHTML = "00";
    document.getElementById('stopwatch-minutes').innerHTML = "00";
    document.getElementById('stopwatch-seconds').innerHTML = "00";
    document.getElementById('stopwatch-milliseconds').innerHTML = "00";
});
 
function stopWatch() {
    if (timer) {
        count++;
 
        if (count == 100) {
            second++;
            count = 0;
        }
 
        if (second == 60) {
            minute++;
            second = 0;
        }
 
        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }
 
        let hrString = hour;
        let minString = minute;
        let secString = second;
        let countString = count;
 
        if (hour < 10) {
            hrString = "0" + hrString;
        }
 
        if (minute < 10) {
            minString = "0" + minString;
        }
 
        if (second < 10) {
            secString = "0" + secString;
        }
 
        if (count < 10) {
            countString = "0" + countString;
        }
 
        document.getElementById('stopwatch-hours').innerHTML = hrString;
        document.getElementById('stopwatch-minutes').innerHTML = minString;
        document.getElementById('stopwatch-seconds').innerHTML = secString;
        document.getElementById('stopwatch-milliseconds').innerHTML = countString;
        setTimeout(stopWatch, 10);
    }
}