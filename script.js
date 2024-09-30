const date = new Date(2026, 6, 1, 1, 1);
const day = document.querySelector(".days");
const hour = document.querySelector(".hours");
const minute = document.querySelector(".minutes");
const second = document.querySelector(".seconds");


function time() {
    const now = new Date().getTime();

    const difference = date - now;

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    let days = Math.floor(difference / oneDay);
    let hours = Math.floor((difference % oneDay) / oneHour);
    let minutes = Math.floor((difference % oneHour) / oneMinute);
    let seconds = Math.floor((difference % oneMinute) / 1000);



    if (difference < 0) {
        day.textContent = 0;
        hour.textContent = 0;
        minute.textContent = 0;
        second.textContent = 0;
    } else {
        day.textContent = days;
        hour.textContent = hours;
        minute.textContent = minutes;
        second.textContent = seconds;
    }
}

time();

const delay = setInterval(time, 1000);


