let countdownTime = 0;
let countdownInterval;


function setTime(minutes) {
    countdownTime = minutes * 60; 
    clearInterval(countdownInterval); 
    document.getElementById('timer').textContent = formatTime(countdownTime);
}

function startCountdown() {
    if (countdownTime <= 0) {
        alert("Please select a time first.");
        return;
    }

    clearInterval(countdownInterval);
    countdownInterval = setInterval(function() {
        countdownTime--;

        let minutes = Math.floor(countdownTime / 60);
        let seconds = countdownTime % 60;

        document.getElementById('timer').textContent = formatTime(countdownTime);

        if (countdownTime <= 0) {
            clearInterval(countdownInterval);
            document.getElementById('timer').textContent = "00:00";
        }
    }, 1000);
}

function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return minutes + ':' + seconds;
}

window.onload = function() {
    document.getElementById('timer').textContent = '00:00';
};

const chargerDiv= document.getElementById('chargeDiv');
const changeColorButton = document.get