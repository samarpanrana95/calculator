function add(num1, num2) {
  return num1 + num2;
}

function diff(num1, num2) {
  return num1 - num2;
}

function mul(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return ((num1 * 10) / (num2 * 10)).toFixed(2);
}

function operate(num1, num2, operator) {
  let result;
  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = diff(num1, num2);
      break;
    case "*":
      result = mul(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
    default:
      result = "ERROR";
      break;
  }
  return result;
}

let initialNumber, finalNumber, currentOperation;

let buttons = document.querySelectorAll(".button");
let buttonsContainer = document.querySelector(".buttons-container");
buttonsContainer.addEventListener("click", (e) => {
  let target = e.target;
  let targetClassList = target.classList;
  if (targetClassList.contains("clear-button")) {
    console.log("cleared");
  } else if (targetClassList.contains("delete-button")) {
    console.log("deleted");
  } else if (targetClassList.contains("equals-button")) {
    console.log("equals");
  } else if (targetClassList.contains("operation-button")) {
    let pressedOperation = getOperation(target);
    updatePressedOperation(pressedOperation, target);
  } else if (targetClassList.contains("number-button")) {
    let pressedNumber = getNumber(target);
    updateInitialNumber(pressedNumber);
  }
});

function getOperation(target) {
  let targetText = target.textContent;
  switch (targetText) {
    case "÷":
      return "divide";
    case "×":
      return "mul";
    case "+":
      return "add";
    case "-":
      return "diff";
  }
}

function updatePressedOperation(pressedOperation, target) {
  currentOperation = pressedOperation;
  updatePressedOperationDom(currentOperation, target);
}

function updatePressedOperationDom(currentOperation, target) {
  let displayPrevText = document.querySelector(".display-prev-text");
  displayPrevText.textContent = initialNumber + target.textContent;
  displayPrevText.style.visibility = "visible";
  let displayMainText = document.querySelector(".display-main-text");
  displayMainText.textContent = 0;
  displayMainText.style.visibility = "hidden";
}

function getNumber(target) {
  return target.textContent;
}

function updateInitialNumber(pressedNumber) {
  if (typeof initialNumber == "string") {
    initialNumber += pressedNumber;
  } else {
    initialNumber = pressedNumber;
  }

  updateInitialNumberDom();
}

function updateInitialNumberDom() {
  let displayMainText = document.querySelector(".display-main-text");
  displayMainText.style.visibility = "visible";
  displayMainText.textContent = initialNumber;
}
