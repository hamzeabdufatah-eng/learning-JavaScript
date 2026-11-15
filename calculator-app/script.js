// calculator state
let currentInput = "0";
let previousInput = null;
let operator = null;
let shouldResetDisplay = false;
// get html elements
const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");
function updateDisplay() {
  display.value = currentInput;
}
function inputNumber(number) {
  if (currentInput === "0" || shouldResetDisplay) {
    currentInput = number;
    shouldResetDisplay = false;
  } else {
    currentInput += number;
  }
  updateDisplay();
}
numberButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    inputNumber(button.dataset.number);
  });
});

function chooseOperator(nextOpertor) {
  previousInput = currentInput;
  operator = nextOpertor;
  shouldResetDisplay = true;
}
operatorButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    chooseOperator(button.dataset.operator);
  });
});
function calculate() {
  const firsNumber = Number(previousInput);
  const secondNumber = Number(currentInput);
  let result;
  if (operator === "+") {
    result = firsNumber + secondNumber;
  } else if (operator === "-") {
    result = firsNumber - secondNumber;
  } else if (operator === "*") {
    result = firsNumber * secondNumber;
  } else if (operator === "/") {
    if (secondNumber === 0) {
      currentInput = "Error";
      previousInput = null;
      operator == null;
      shouldResetDisplay = true;
      updateDisplay();
      return;
    }
    result = firsNumber / secondNumber;
  }
  currentInput = String(result);
  previousInput = null;
  operator = null;
  shouldResetDisplay = true;
  updateDisplay();
}
equalsButton.addEventListener("click", calculate);
function clearCalculate() {
  currentInput = "0";
  previousInput = null;
  operator = null;
  shouldResetDisplay = false;
  updateDisplay();
}
clearButton.addEventListener("click", clearCalculate);
