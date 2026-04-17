// script.js — Basic Arithmetic Calculator Logic

function calculate(operation) {
  // Get the input values
  var input1 = document.getElementById("num1").value;
  var input2 = document.getElementById("num2").value;
  var resultText = document.getElementById("result-text");
  var resultValue = document.getElementById("result-value");

  // --- Data validation ---
  // Check that both fields are not empty
  if (input1 === "" || input2 === "") {
    resultText.innerHTML = "";
    resultValue.textContent = "";
    resultText.innerHTML = '<span class="error">Please enter a number in both fields.</span>';
    return;
  }

  // Convert strings to numbers
  var num1 = parseFloat(input1);
  var num2 = parseFloat(input2);

  // Check that both values are valid numbers
  if (isNaN(num1) || isNaN(num2)) {
    resultText.innerHTML = '<span class="error">Please enter valid numbers only.</span>';
    return;
  }

  // --- Perform the calculation ---
  var result;

  if (operation === "add") {
    result = num1 + num2;
  } else if (operation === "subtract") {
    result = num1 - num2;
  } else if (operation === "multiply") {
    result = num1 * num2;
  } else if (operation === "divide") {
    // Extra validation: cannot divide by zero
    if (num2 === 0) {
      resultText.innerHTML = '<span class="error">Error: Cannot divide by zero.</span>';
      return;
    }
    result = num1 / num2;
  }

  // Round to avoid floating-point display issues (e.g. 0.1 + 0.2)
  result = parseFloat(result.toFixed(10));

  // --- Display the result ---
  resultText.innerHTML = "Here is the result: ";
  resultValue.textContent = result;
  resultText.appendChild(resultValue);
}