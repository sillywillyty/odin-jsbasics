const previousOperandDisplay = document.getElementById("previousOperand");
const currentOperandDisplay = document.getElementById("currentOperand");
const clearButton = document.getElementById("clearButton");
const backspaceButton = document.getElementById("backspaceButton");
const equalsButton = document.getElementById("equalsButton");
const numberButtons = document.querySelectorAll(".numberButton");
const operatorButtons = document.querySelectorAll(".operatorButton");
 
let currentOperand = "0";
let previousOperand = "";
let operator = undefined;

function add(a, b) {
  return a + b;
}
 
function subtract(a, b) {
  return a - b;
}
 
function multiply(a, b) {
  return a * b;
}
 
function divide(a, b) {
  if (b === 0) {
    return "Error";
  }
  return a / b;
}

function operate(operator, num1, num2) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  }
}

function roundResult(number) {
  return Math.round(number * 100000000) / 100000000;
}
 
function updateDisplay() {
  currentOperandDisplay.textContent = currentOperand;
 
  if (operator != undefined) {
    previousOperandDisplay.textContent = previousOperand + " " + operator;
  } else {
    previousOperandDisplay.textContent = "";
  }
}
function appendNumber(number) {
  if (number === "." && currentOperand.includes(".")) {
    return;
  }
  if (currentOperand === "0" && number !== ".") {
    currentOperand = number;
  } else {
    currentOperand = currentOperand + number;
  }
}
 
function chooseOperator(selectedOperator) {
  if (currentOperand === "") {
    return;
  }
  if (previousOperand !== "") {
    compute();
  }
 
  operator = selectedOperator;
  previousOperand = currentOperand;
  currentOperand = "";
}
 
function compute() {
  let prev = parseFloat(previousOperand);
  let current = parseFloat(currentOperand);
 
  if (isNaN(prev) || isNaN(current)) {
    return;
  }
 
  let result = operate(operator, prev, current);
 
  if (result === "Error") {
    currentOperand = "Error";
  } else {
    currentOperand = roundResult(result).toString();
  }
 
  operator = undefined;
  previousOperand = "";
}
 
function clearAll() {
  currentOperand = "0";
  previousOperand = "";
  operator = undefined;
}
 
function backspace() {
  currentOperand = currentOperand.toString().slice(0, -1);
 
  if (currentOperand === "") {
    currentOperand = "0";
  }
}
 
for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", function () {
    appendNumber(this.getAttribute("data-number"));
    updateDisplay();
  });
}
 
for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener("click", function () {
    chooseOperator(this.getAttribute("data-operator"));
    updateDisplay();
  });
}
 
equalsButton.addEventListener("click", function () {
  compute();
  updateDisplay();
});
 
clearButton.addEventListener("click", function () {
  clearAll();
  updateDisplay();
});
 
backspaceButton.addEventListener("click", function () {
  backspace();
  updateDisplay();
});
 
document.addEventListener("keydown", function (event) {
  if (event.key >= "0" && event.key <= "9") {
    appendNumber(event.key);
    updateDisplay();
  } else if (event.key === ".") {
    appendNumber(".");
    updateDisplay();
  } else if (event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/") {
    chooseOperator(event.key);
    updateDisplay();
  } else if (event.key === "Enter" || event.key === "=") {
    event.preventDefault();
    compute();
    updateDisplay();
  } else if (event.key === "Backspace") {
    backspace();
    updateDisplay();
  } else if (event.key === "Escape") {
    clearAll();
    updateDisplay();
  }
});
 
updateDisplay();
 
