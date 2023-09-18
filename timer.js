let time = 0,
    timerHours = 0,
    timerMinutes = 0,
    timerSeconds = 0,
    timerMiliseconds = 0,
    timerRunning = false,
    timerInterval;

function getTime() {
    time = prompt("Enter time in minutes");
    time = time * 60;
    setTime();
}
function setTime() {
    timerHours = Math.floor(time / 3600);
    timerMinutes = Math.floor((time % 3600) / 60);
    timerSeconds = Math.floor(time % 60);
    timerMiliseconds = 0;

    document.getElementById("hours").innerHTML=timerHours;
    document.getElementById("minutes").innerHTML=timerMinutes;
    document.getElementById("seconds").innerHTML=timerSeconds;
    document.getElementById("milliseconds").innerHTML=timerMiliseconds;
}

function timer() {
    timerMiliseconds--;
    if (timerMiliseconds === -1) {
        timerMiliseconds = 99;
        timerSeconds--;
    }
    if (timerSeconds === -1) {
        timerSeconds = 59;
        timerMinutes--;
    }
    if (timerMinutes === -1) {
        timerMinutes = 59;
        timerHours--;
    }

    document.getElementById("hours").innerHTML=timerHours;
    document.getElementById("minutes").innerHTML=timerMinutes;
    document.getElementById("seconds").innerHTML=timerSeconds;
    document.getElementById("milliseconds").innerHTML=timerMiliseconds;

    timeUp();
}

function startTimer() {
    if (timerHours === 0 && timerMinutes === 0 && timerSeconds === 0) {
        getTime();
    } else {
        timerInterval = setInterval(timer, 10);
        timerRunning = true;
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
}

function resetTimer() {
    stopTimer();
    time = 0;
    setTime();
}

function timeUp() {
    if (
        timerHours === 0 &&
        timerMinutes === 0 &&
        timerSeconds === 0 &&
        timerMiliseconds === 0
    ) {
        stopTimer();
        alert("Time's up!");

        setTime();
    }
}

// $("#timer-start").click(startTimer);

// $("#timer-stop").click(stopTimer);

// $("#timer-reset").click(function () {
//     resetTimer();
// });