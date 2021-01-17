const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')

const Birthday ='27 Oct 2021'

function countdown(){
    const BirthdayDate = new Date(Birthday);
    const currentDate = new Date();
    const totalSeconds = (BirthdayDate - currentDate)/1000;
    
    const days = Math.floor(totalSeconds/3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds /60)%60;
    const seconds = Math.floor(totalSeconds) % 60;


    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secondsEl.innerHTML = seconds;
    
}

countdown();
setInterval(countdown, 1000);