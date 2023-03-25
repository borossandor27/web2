const clock = document.getElementById("clockdiv");
const minutesSpan = clock.querySelector(".minutes");
const secondsSpan = clock.querySelector(".seconds");

function getTimeRemaining(deadline) {
  const total = Date.parse(deadline) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  //const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  //const days = Math.floor(total / (1000 * 60 * 60 * 24));
  if (total < 0.0) {
    clearInterval(timeinterval);
    timeinterval = null;
  }
  return {
    total,
    minutes,
    seconds,
  };
}

function updateClock() {
  
  const t = getTimeRemaining(deadline);
  minutesSpan.innerHTML = t.minutes;
  secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

 
}
