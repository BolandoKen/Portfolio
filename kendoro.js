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

    setTransitionDuration(countdownTime/60);

    toggleColorTransition();

    countdownInterval = setInterval(function() {
        countdownTime--;

        document.getElementById('timer').textContent = formatTime(countdownTime);

        if (countdownTime <= 0) {
            clearInterval(countdownInterval);
            document.getElementById('timer').textContent = "00:00";
            playRingtone();
            resetChargeDiv();
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

const chargeDiv = document.getElementById('chargeDiv');

function toggleColorTransition(){
    chargeDiv.classList.toggle('active');
}

function resetChargeDiv(){
    chargeDiv.style.transition = 'none';
    chargeDiv.classList.remove('active');
    setTimeout(() => {
        chargeDiv.style.transition = '';
    }, 0);
}
function setTransitionDuration(time){
    chargeDiv.style.transition = `background-position ${time * 60}s ease, box-shadow ${time}s ease`;
}
function playRingtone(){
    const ringtone = document.getElementById('ringtone');
    ringtone.currentTime = 0;
    ringtone.play();
}
