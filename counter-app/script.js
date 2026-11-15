//1 create a variable
let count = 0;
// 2 Select html elements
const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const message = document.getElementById("message");
function updateDisplay() {
  countDisplay.textContent = count;
  if (count === 0) {
    countDisplay.style.color = "red";
    message.textContent = "Minimum limit reached";
  } else if (count === 10) {
    countDisplay.style.color = "green";
    message.textContent = "Maxmimum limit reached";
  } else {
    countDisplay.style.color = "blue";
    message.textContent = "keep going";
  }
}
// increse function
function increase() {
  if (count < 10) {
    count++;
  }
  updateDisplay();
}
// decrease
function decrease() {
  if (count > 0) {
    count--;
  }
  updateDisplay();
}
// reset
function reset() {
  count = 0;
  updateDisplay();
}
increaseBtn.addEventListener("click", increase);
decreaseBtn.addEventListener("click", decrease);
resetBtn.addEventListener("click", reset);
updateDisplay();
