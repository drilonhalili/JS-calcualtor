/**
 * 1. Bind DOM elements to variables
 */

let viewer = document.getElementById("viewer");
let clear = document.getElementById("clear");
let equals = document.getElementById("equals");
let numbers = document.querySelectorAll(".num");
let operators = document.querySelectorAll(".ops");
let firstOperand = "";
let secondOperand = "";
let result;
let operator;

/**
 * 2. Bind click event listeners to all different elements in the calculator
 */
clear.addEventListener("click", onClickClear);

equals.onclick = onClickOperate;

for (let number of numbers) {
  number.addEventListener("click", onClickNumber);
}

for (let operator of operators) {
  operator.addEventListener("click", onClickOperator);
}

/**
 * 3. Write the calculation logic between two numbers,
 * which will become the equals sign click event callback
 */

function onClickOperate() {
  firstOperand = parseFloat(firstOperand);
  secondOperand = parseFloat(secondOperand);

  switch (operator) {
    case "plus":
      result = secondOperand + firstOperand;
      break;
    case "minus":
      result = secondOperand - firstOperand;
      break;
    case "times":
      result = secondOperand * firstOperand;
      break;
    case "divided by":
      result = secondOperand / firstOperand;
      break;

    default:
      break;
  }

  viewer.innerHTML = result;
  firstOperand = result;
}

/**
 * 4. Write the number click event callback
 */

function onClickNumber() {
  if (result) {
    firstOperand = this.getAttribute("data-num");
  } else {
    firstOperand += this.getAttribute("data-num");
  }

  viewer.innerHTML = firstOperand;
}

/**
 * 5. Write the operator click event callback
 */

function onClickOperator() {
  secondOperand = firstOperand;
  firstOperand = "";
  operator = this.getAttribute("data-op");
}

function onClickClear() {
  firstOperand = "";
  secondOperand = "";
  result = 0;
  viewer.innerHTML = result;
}
