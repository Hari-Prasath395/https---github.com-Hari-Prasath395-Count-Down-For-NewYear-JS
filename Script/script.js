const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updatedTime() {
  const currentYear = new Date().getFullYear();
  const newYear = new Date(`January 1 ${currentYear + 1} 00:00:00`);
  const currentDate = new Date();
  const difference = newYear - currentDate;

  const remainingDays = Math.floor(difference / 1000 / 60 / 60 / 24);
  const remainingHours = Math.floor((difference / 1000 / 60 / 60) % 24);
  const remainingMinutes = Math.floor((difference / 1000 / 60) % 60);
  const remainingSeconds = Math.floor((difference / 1000) % 60);

  days.innerHTML = remainingDays < 10 ? "0" + remainingDays : remainingDays;
  hours.innerHTML = remainingHours < 10 ? "0" + remainingHours : remainingHours;
  minutes.innerHTML =
    remainingMinutes < 10 ? "0" + remainingMinutes : remainingMinutes;
  seconds.innerHTML =
    remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

  // console.log(remainingDays+" "+remainingHours+" "+remainingMinutes+" "+remainingSeconds);
}

setInterval(updatedTime, 1000);
