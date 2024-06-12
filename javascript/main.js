let currentInput = "";
let operator = null;
let firstOperand = null;
let secondOperand = null;

const screen = document.getElementById("screen");
const themeSwitch = document.getElementById("theme-switch");

themeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});

function clearScreen() {
  currentInput = "";
  operator = null;
  firstOperand = null;
  secondOperand = null;
  screen.textContent = "0";
}

window.appendNumber = function (number) {
  if (currentInput === "0" || currentInput === "NaN") {
    currentInput = number.toString();
  } else {
    currentInput += number.toString();
  }
  screen.textContent = currentInput;
};

window.appendDecimal = function () {
  if (!currentInput.includes(".")) {
    currentInput += ".";
  }
  screen.textContent = currentInput;
};

window.appendOperator = function (op) {
  if (operator !== null) {
    calculate();
  }
  firstOperand = parseFloat(currentInput);
  operator = op;
  currentInput = "";
};

window.calculate = function () {
  if (operator === null || currentInput === "") return;
  secondOperand = parseFloat(currentInput);

  switch (operator) {
    case "+":
      currentInput = (firstOperand + secondOperand).toString();
      break;
    case "-":
      currentInput = (firstOperand - secondOperand).toString();
      break;
    case "*":
      currentInput = (firstOperand * secondOperand).toString();
      break;
    case "/":
      if (secondOperand === 0) {
        currentInput = "Error";
      } else {
        currentInput = (firstOperand / secondOperand).toString();
      }
      break;
  }

  if (currentInput === "NaN") {
    currentInput = "Error";
  }

  screen.textContent = currentInput;
  operator = null;
  firstOperand = null;
  secondOperand = null;
};

// Add event listener for clear button
document.querySelector(".clear").addEventListener("click", clearScreen);
