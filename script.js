// event listeners
makeEventListeners()

function makeEventListeners() {
  const display = document.querySelector("#display");
  makeNumListeners()
  makeDelListener()
  makeAllClearListener()
  makeOperatorListeners()
};

// create event listeners for each num button/decimal that appends that button's text content to the string shown in the display element
function makeNumListeners() {
  const nums = document.querySelectorAll(".num");
  nums.forEach((num) => {
    num.addEventListener("click", () => {
      display.textContent += num.textContent;
    });
  });
};

// create an event listener for delete button that removes last character with slice
function makeDelListener() {
  const del = document.querySelector("#backspace");
  del.addEventListener("click", () => {
    display.textContent = display.textContent.slice(0, -1);
  });
};

function makeAllClearListener() {
  const allClear = document.querySelector("#allClear");
  allClear.addEventListener("click", () => {
    display.textContent = "";
  });
};

function makeOperatorListeners () {
  makeAddListener()
  makeSubtractListener()
  makeMultiplyListener()
  makeDivideListener()
  makeEqualsListener()
}

function makeAddListener() {
  const add = document.querySelector("#add");
  add.addEventListener("click", () => {
    console.log("create an add function and put it here")
  });
};
function makeSubtractListener() {
  const subtract = document.querySelector("#subtract");
  subtract.addEventListener("click", () => {
    console.log("create a subtract function and put it here")
  });
}
function makeMultiplyListener() {
  const multiply = document.querySelector("#multiply");
  multiply.addEventListener("click", () => {
    console.log("create a multiply function and put it here")
  });
}
function makeDivideListener() {
  const divide = document.querySelector("#divide");
  divide.addEventListener("click", () => {
    console.log("create a divide function and put it here")
  });
}
function makeEqualsListener() {
  const equals = document.querySelector("#equals");
  equals.addEventListener("click", () => {
    console.log("create an equals function and put it here")
  });
}
