$(function () {
    let result = 0;
    let prevEntry = 0;
    let operation = null;
    let currentEntry = "0";
    updateScreen(result);
  
    $("button").on("click", function (event) {
      const buttonPressed = $(this).html();
      console.log(buttonPressed);
  
      if (buttonPressed === "C") {
        result = 0;
        currentEntry = "0";
      } else if (buttonPressed === ".") {
        if (!currentEntry.includes('.')) currentEntry += ".";
      } else if (isNumber(buttonPressed)) {
        if (currentEntry === "0") currentEntry = buttonPressed;
        else currentEntry += buttonPressed;
      } else if (isOperator(buttonPressed)) {
        prevEntry = parseFloat(currentEntry);
        operation = buttonPressed;
        currentEntry = "";
      } else if (buttonPressed === "=") {
        currentEntry = operate(prevEntry, currentEntry, operation);
        operation = null;
      }
  
      updateScreen(currentEntry);
    });
  });
  
  const updateScreen = function (displayValue) {
    const display = displayValue.toString();
    $("h1").html(display.substring(0, 10));
  };
  
  const isNumber = function (value) {
    return !isNaN(value);
  };
  
  const isOperator = function (value) {
    return value === "/" || value === "*" || value === "+" || value === "-";
  };
  
  const operate = function (a, b, operation) {
    a = parseFloat(a);
    b = parseFloat(b);
    console.log(a, b, operation);
    if (operation === "+") return a + b;
    if (operation === "-") return a - b;
    if (operation === "*") return a * b;
    if (operation === "/") return a / b;
  };