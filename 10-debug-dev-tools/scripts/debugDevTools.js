function performOperation() {
  // Get user input from input fields
  let num1 = parseInt(document.getElementById("input1").value);
  let operationType = document.getElementById("operationType").value;
  let num2 = parseInt(document.getElementById("input2").value);

  // Check if inputs are valid
  if (!isNaN(num1) && !isNaN(num2) && operationType !== null) {
    // Perform the operation
    let result = arithmeticOperation(num1, num2, operationType);
    // Display the result
    displayResult(result);
  } else {
    displayResult("Please enter valid numbers.");
  }
}

// Commented out the multiply function as we're now using the fucntion arithmeticOperation from this section's challenge
// function multiply(a, b) {
//   // Introduce a debugger statement to pause execution
//   debugger;

//   // Multiply the numbers
//   return a * b;
// }

function displayResult(result) {
  // Display the result in the paragraph element
  const resultElement = document.getElementById("result");
  resultElement.textContent = `The result is: ${result}`;
}

/**
 * Completed the challenge from this section: 
 * Create a function that performs all basic arithmetic operations
 */
function arithmeticOperation(a, b, operation) {
  debugger;
  switch (operation) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return null;
  }
}
