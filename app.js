const timerDayEl = document.querySelector(".timer__day");
const timerHourEl = document.querySelector(".timer__hour");
const timerMinEl = document.querySelector(".timer__min");
const timerSecEl = document.querySelector(".timer__sec");
const timerButtonEl = document.querySelector(".timer__button");

function getTimeDifference(start, end) {
    let milliseconds = Math.floor(end - start);
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    seconds = seconds - (minutes * 60);
    minutes = minutes - (hours * 60);
    hours = hours - (days * 24);

    return {
        rDays: days,
        rHours: hours,
        rMinutes: minutes,
        rSeconds: seconds
    }
}
function stopTimer() {
    timerButtonEl.addEventListener("click", function() {
        clearInterval(timer);
        timerDayEl.textContent = "00";
        timerHourEl.textContent = "00";
        timerMinEl.textContent = "00";
        timerSecEl.textContent = "00";
    })
}
stopTimer();
let timer = window.setInterval(function () {
    const startDate = new Date();
    const endDate = new Date("July 31, 2019 00:30:00");

    let timeDifferenceObj = getTimeDifference(startDate, endDate);

    timerDayEl.textContent = String(timeDifferenceObj.rDays).padStart(2, "0");
    timerHourEl.textContent = String(timeDifferenceObj.rHours).padStart(2, "0");
    timerMinEl.textContent = String(timeDifferenceObj.rMinutes).padStart(2, "0");
    timerSecEl.textContent = String(timeDifferenceObj.rSeconds).padStart(2, "0");

    if ((endDate - startDate) < 0) {
        timerDayEl.textContent = "00";
        timerHourEl.textContent = "00";
        timerMinEl.textContent = "00";
        timerSecEl.textContent = "00";
        clearInterval(timer);
    }
}, 1000)