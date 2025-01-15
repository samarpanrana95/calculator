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
