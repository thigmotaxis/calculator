// event listeners

let calculation = {
  first: "",
  second: "",
  operator: "",
};

makeEventListeners()

function makeEventListeners() {
  const display = document.querySelector("#display");
  const currentOperation = document.querySelector("#currentOperation")
  makeNumListeners()
  makeDelListener()
  makeAllClearListener()
  makeOperatorListener()
  makeEqualsListener()
};


// create event listeners for each num button/decimal that appends that button's text content to the string shown in the display element
function makeNumListeners() {
  const nums = document.querySelectorAll(".num");
  nums.forEach((num) => {
    num.addEventListener("click", () => {
      display.textContent += num.textContent;
      if (calculation.operator === "") {
        calculation.first = display.textContent;
      } else {
        display.textContent = num.textContent;
        calculation.second += num.textContent;
        display.textContent = calculation.second;

      }
      currentOperation.textContent = `${calculation.first} ${calculation.operator} ${calculation.second}`;
      console.log(calculation)
    });
  });
};

// create an event listener for delete button that removes last character with slice
function makeDelListener() {
  const del = document.querySelector("#backspace");
  del.addEventListener("click", () => {
    display.textContent = display.textContent.slice(0, -1);
    if (calculation.operator === "") {
      calculation.first = display.textContent;
      console.log(calculation)
    } else {
      calculation.second = display.textContent;
      // display.textContent = calculation.second;
      console.log(calculation)
    };
    currentOperation.textContent = `${calculation.first} ${calculation.operator} ${calculation.second}`;
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
  currentOperation.textContent = `${calculation.first} ${calculation.operator} ${calculation.second}`;
  });
};

function makeOperatorListener() {
  const operators = document.querySelectorAll(".operator");
  operators.forEach((operatorButton) => {
    operatorButton.addEventListener("click", () => {
      if (calculation.first !== "" && calculation.second !== "" && calculation.operator !== "") {resetObj()};
      calculation.operator = operatorButton.textContent;
      currentOperation.textContent = `${calculation.first} ${calculation.operator} ${calculation.second}`;
      console.log(calculation)
    });
  });
};
//
function makeEqualsListener() {
  const equals = document.querySelector("#equals");
  equals.addEventListener("click", () => {
    resetObj();
    });
}

function resetObj() {
  let result = operate(calculation.operator, calculation.first, calculation.second)
  display.textContent = result;
  calculation = {
  first: result,
  second: "",
  operator: "",
};
console.log(result)

}
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
  return parseInt(first) + parseInt(second);
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
