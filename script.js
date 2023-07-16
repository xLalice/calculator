const numbers = document.querySelectorAll("button[data-num]");
const operators = document.querySelectorAll("button[data-operator]");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");
const del = document.getElementById("del");
const dot = document.getElementById("dot");
const result = document.querySelector(".result");
let firstNumber = 0;
let secondNumber = 0;
let operator = "";

// Operators
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
  return a / b;
}

function calculate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "x":
      return multiply(a, b);
    case "÷":
      return divide(a, b);
    default:
      return null;
  }
}

function resetToZero() {
  result.textContent = 0;
}

numbers.forEach((num) => {
  num.addEventListener("click", (e) => {
    if (result.textContent.length === 28) {
      return;
    } else if (result.textContent !== "0") {
      result.textContent += num.textContent;
    } else {
      result.textContent = num.textContent;
    }
  });
});

operators.forEach((oper) => {
  oper.addEventListener("click", (e) => {
    if (!operator) {
      firstNumber = parseFloat(result.textContent);
      result.textContent = "";
      operator = oper.textContent;
    } else {
      secondNumber = parseFloat(result.textContent);
      let answer = calculate(operator, firstNumber, secondNumber);
      if (answer.toString().length > 28) {
        answer = answer.toFixed(6);
      }
      result.textContent = answer;
      firstNumber = 0;
      secondNumber = 0;
      operator = "";
    }
  });
});

equal.addEventListener("click", () => {
  if (operator !== "") {
    secondNumber = parseFloat(result.textContent);
    let answer = calculate(operator, firstNumber, secondNumber);
    result.textContent = answer;
    firstNumber = 0;
    secondNumber = 0;
    operator = "";
  }
});

clear.addEventListener("click", () => {
  firstNumber = 0;
  secondNumber = 0;
  operator = "";
  resetToZero();
});

del.addEventListener("click", () => {
  result.textContent = result.textContent.slice(0, -1);
  if (result.textContent === "") {
    resetToZero();
  }
});

dot.addEventListener("click", () => {
  if (!result.textContent.includes(".")) {
    result.textContent += ".";
  }
});
