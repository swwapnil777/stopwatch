// Stopwatch variables
let timerId;
let tens = 0;
let seconds = 0;

// Elements
const tensElement = document.getElementById("tens");
const secondsElement = document.getElementById("seconds");
const startButton = document.getElementById("button-start");
const stopButton = document.getElementById("button-stop");
const resetButton = document.getElementById("button-reset");


startButton.addEventListener("click", () => {
  clearInterval(timerId);
  timerId = setInterval(startTimer, 10);
});

// Stop button click event
stopButton.addEventListener("click", () => {
  clearInterval(timerId);
});

// Reset button click event
resetButton.addEventListener("click", () => {
  clearInterval(timerId);
  tens = 0;
  seconds = 0;
  updateTimerDisplay();
});

// Start the stopwatch
function startTimer() {
  tens++;
  if (tens >= 100) {
    seconds++;
    tens = 0;
  }
  updateTimerDisplay();
}

// Update the timer display
function updateTimerDisplay() {
  tensElement.textContent = formatTime(tens);
  secondsElement.textContent = formatTime(seconds);
}

// Format time with leading zero
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
