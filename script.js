const newYear = "14 July 2021";

function countdown(){
const today = new Date();
const newYearsDate = new Date(newYear);
let timeBetweenDates = newYearsDate - today;
const secondsToGo = timeBetweenDates / 1000;
const days = Math.floor(secondsToGo / 86400);
const mins = Math.floor(secondsToGo / 60) % 60;
const hours = Math.floor(secondsToGo / 3600) % 24;
const seconds = Math.floor(secondsToGo % 60);
console.log("inside the function:",days, hours, mins, seconds, timeBetweenDates);
document.querySelector("#days").innerHTML = days;
document.querySelector("#mins").innerHTML = formatTime(mins);
document.querySelector("#hours").innerHTML = formatTime(hours);
document.querySelector("#seconds").innerHTML = formatTime(seconds);
}

countdown();

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

setInterval(countdown, 1000);











