// global objects
let calculation = {
  first: "",
  second: "",
  operator: "",
};

let operationPerformed = {
  firstOperation: true,
};

// event listeners


makeEventListeners();

function makeEventListeners() {
  const display = document.querySelector("#display");
  const currentOperation = document.querySelector("#currentOperation")
  makeNumListeners();
  makeDelListener();
  makeAllClearListener();
  makeOperatorListener();
  makeEqualsListener();
};

// create event listeners for each num button/decimal that appends that button's text content to the string shown in the display element
function makeNumListeners() {
  const nums = document.querySelectorAll(".num");
  nums.forEach((num) => {
    num.addEventListener("click", () => {
      if (calculation.operator === "") {
        if (num.textContent === "." && calculation.first.includes(num.textContent)) {return}; // prevents double decimal
        if (operationPerformed.firstOperation === true) {             // prevents user from adding numbers to a result
          display.textContent += num.textContent;
          calculation.first = display.textContent;
        };
      } else {
        if (num.textContent === "." && calculation.second.includes(num.textContent)) {return}; // prevents double decimal

        display.textContent = num.textContent;
        calculation.second += num.textContent;
        display.textContent = calculation.second;

      };
      updateCurrentOpDisplay();
    });
  });
};

// create an event listener for delete button that removes last character with slice
function makeDelListener() {
  const del = document.querySelector("#backspace");
  del.addEventListener("click", () => {
    if (calculation.operator === "") {
      if (operationPerformed.firstOperation === false) {return}  // prevents delete button from deleting result of an operation
      calculation.first = calculation.first.slice(0, -1);
      display.textContent = calculation.first;
    } else {
      calculation.second = calculation.second.slice(0, -1)
      display.textContent = calculation.second;
    };
    updateCurrentOpDisplay();
  });
};

function makeAllClearListener() {
  const allClear = document.querySelector("#allClear");
  allClear.addEventListener("click", () => {
    display.textContent = "";
    calculation = {
      first: "",
      second: "",
      operator: "",
    };
    operationPerformed = {
      firstOperation: true,
    };
  updateCurrentOpDisplay();
  });
};

function makeOperatorListener() {
  const operators = document.querySelectorAll(".operator");
  operators.forEach((operatorButton) => {
    operatorButton.addEventListener("click", () => {
      if (calculation.first !== "" && calculation.second !== "" && calculation.operator !== "") {
        resetObj();
      };
      if (calculation.first !== "") {
        calculation.operator = operatorButton.textContent;
        updateCurrentOpDisplay();
      };
      operationPerformed = {
        firstOperation: false,
      };
    });
  });
};
//
function makeEqualsListener() {
  const equals = document.querySelector("#equals");
  equals.addEventListener("click", () => {
    if (calculation.first !== "" && calculation.second !== "" && calculation.operator !== ""){
      resetObj();
      operationPerformed = {
        firstOperation: false,
      };
    };
  });
};

function resetObj() {
  let result = parseFloat(operate(calculation.operator, calculation.first, calculation.second).toFixed(4))  //rounds result
  display.textContent = result;
  calculation = {
    first: result,
    second: "",
    operator: "",
  };
};

function updateCurrentOpDisplay () {
  currentOperation.textContent = `${calculation.first} ${calculation.operator} ${calculation.second}`;
};

// Operator functions:

function operate(operator, first, second) {
  if (operator === "+") {
    return addNums(first, second);
  };
  if (operator === "-") {
    return subtractNums(first, second);
  };
  if (operator === "*") {
    return multiplyNums(first, second);
  };
  if (operator === `/`) {
    return divideNums(first, second);
  };
};
function addNums(first, second) {
  return parseFloat(first) + parseFloat(second);
};
function subtractNums(first, second) {
  return first - second;
};
function multiplyNums(first, second) {
  return first * second;
};
function divideNums(first, second) {
  if (second === "0") {
    alert("Oh, I think you know better than that");
    return;
  };
  return first / second;
};
