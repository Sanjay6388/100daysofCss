function updateClock() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  const hourHand = document.querySelector('.hour-hand');
  const minuteHand = document.querySelector('.minute-hand');
  const secondHand = document.querySelector('.second-hand');

  // Calculate rotation angles for each hand
  const hourRotation = 360 * (hour / 12) + 30 * (minute / 60);
  const minuteRotation = 360 * (minute / 60) + 6 * (second / 60);
  const secondRotation = 360 * (second / 60);

  hourHand.style.transform = `rotate(${hourRotation}deg)`;
  minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
  secondHand.style.transform = `rotate(${secondRotation}deg)`;
}

setInterval(updateClock, 1000);

updateClock();


