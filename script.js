// Get the clock elements
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

// Function to update the clock hands
function updateClock() {
  // Get the current time
  const now = new Date();

  // Get the hours, minutes and seconds
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Calculate the angles for the clock hands
  const hourAngle = (hours / 12) * 360 + (minutes / 60) * 30;
  const minuteAngle = (minutes / 60) * 360;
  const secondAngle = (seconds / 60) * 360;

  // Rotate the clock hands
  hourHand.style.transform = `rotate(${hourAngle}deg)`;
  minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
  secondHand.style.transform = `rotate(${secondAngle}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);
