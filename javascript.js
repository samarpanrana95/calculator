function add(num1, num2) {
  let result = num1 + num2;
  if (!Number.isInteger(result)) {
    result = result.toFixed(2);
  }
  return result;
}

function diff(num1, num2) {
  let result = num1 - num2;
  if (!Number.isInteger(result)) {
    result = result.toFixed(2);
  }
  return result;
}

function mul(num1, num2) {
  let result = num1 * num2;
  if (!Number.isInteger(result)) {
    result = result.toFixed(2);
  }
  return result;
}

function divide(num1, num2) {
  let result = num1 / num2;
  if (!Number.isInteger(result)) {
    result = result.toFixed(2);
  }
  return result;
}

function operate(num1, num2, operator) {
  let result;
  switch (operator) {
    case "add":
      result = add(+num1, +num2);
      break;
    case "diff":
      result = diff(+num1, +num2);
      break;
    case "mul":
      result = mul(+num1, +num2);
      break;
    case "divide":
      result = divide(+num1, +num2);
      break;
    default:
      result = "ERROR";
      break;
  }
  return result;
}

let initialNumber,
  finalNumber,
  currentOperation,
  isInitialized = false,
  currentResult;

function resetCalculator () {
  initialNumber = undefined;
  finalNumber = undefined;
  currentOperation = undefined;
  isInitialized = false;
  currentOperation = undefined;
}

function resetCalculatorDom () {
  let displayPrevText = document.querySelector(".display-prev-text");
  displayPrevText.textContent = 0
  displayPrevText.style.visibility = "hidden";
  let displayMainText = document.querySelector(".display-main-text");
  displayMainText.textContent = 0;
  displayMainText.style.visibility = "hidden";
}


let buttons = document.querySelectorAll(".button");
let buttonsContainer = document.querySelector(".buttons-container");
buttonsContainer.addEventListener("click", (e) => {
  let target = e.target;
  let targetClassList = target.classList;
  if (targetClassList.contains("clear-button")) {
    clearNumber();
  } else if (targetClassList.contains("delete-button")) {
    deleteNumber();
  } else if (targetClassList.contains("equals-button")) {
    if (
      initialNumber == undefined ||
      finalNumber == undefined ||
      currentOperation == undefined
    ) {
      return;
    }
    let result = operate(initialNumber, finalNumber, currentOperation);
    updateResult(result);
  } else if (targetClassList.contains("operation-button")) {
    let pressedOperation = getOperation(target);
    updatePressedOperation(pressedOperation, target);
  } else if (targetClassList.contains("number-button")) {
    if (target.textContent == '.') {
      if (checkDecimal()) {
        return;
      };
    }
    let pressedNumber = getNumber(target);
    updateNumber(pressedNumber);
  }
});

function clearNumber () {
  resetCalculator();
  resetCalculatorDom();
}

function deleteNumber () {

}

function checkDecimal () {
  if (initialNumber == undefined) {
  }
  else {
    if (initialNumber.toString().includes('.') && (!(isInitialized)) ) {
      return true;
    }
  }

  if (finalNumber == undefined) {
  }
  else {
    if (finalNumber.toString().includes('.') && (isInitialized)) {
      return true;
    }
  }

  return false;
}

function updateResult(result) {
  currentResult = result;
  initialNumber = result;
  updateResultDom(result);
  finalNumber = 0;
}

function updateResultDom(result) {
  let displayPrevText = document.querySelector(".display-prev-text");
  if (finalNumber != 0) {
    displayPrevText.textContent =
      displayPrevText.textContent + finalNumber + "=";
  }
  displayPrevText.style.visibility = "visible";
  let displayMainText = document.querySelector(".display-main-text");
  displayMainText.textContent = result;
  displayMainText.style.visibility = "visible";
}

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
  isInitialized = true;
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

function updateNumber(pressedNumber) {
  if (isInitialized) {
    typeof finalNumber == "string"
      ? (finalNumber += pressedNumber)
      : (finalNumber = pressedNumber);
  } else {
    typeof initialNumber == "string"
      ? (initialNumber += pressedNumber)
      : (initialNumber = pressedNumber);
  }
  updateNumberDom();
}

function updateNumberDom() {
  let displayMainText = document.querySelector(".display-main-text");
  displayMainText.style.visibility = "visible";
  if (isInitialized) {
    displayMainText.textContent = finalNumber;
  } else {
    displayMainText.textContent = initialNumber;
  }
}
