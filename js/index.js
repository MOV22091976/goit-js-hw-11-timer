'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const targetDate = new Date("Oct 29, 2020 21:16:00").getTime();
  
  const timeInterval = setInterval(() => {
  const now = new Date().getTime();
  
  const time = targetDate - now;

  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  document.querySelector('[data-value="days"]').textContent = `${days}`;
  document.querySelector('[data-value="hours"]').textContent = `${hours}`;
  document.querySelector('[data-value="mins"]').textContent = `${mins}`;
  document.querySelector('[data-value="secs"]').textContent = `${secs}`;

  function pad(value) {
    return String(value).padStart(2, '0')
  }

  if (time < 0) {
    clearInterval(timeInterval);
    document.querySelector("#timer-1").innerHTML = "EXPIRED";
  }
}, 1000);

});
