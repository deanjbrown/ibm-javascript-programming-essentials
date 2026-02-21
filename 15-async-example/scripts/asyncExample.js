// Define a function that takes a callback and simulates asynchronous behavior using setTimeout
function simulateAsyncOperation(callback) {
  setTimeout(() => {
    callback("Async operation complete!");
  }, 2000);
}

// Start of the program's execution
console.log("Start of the program.");

// Call the async function and provide a callback to handle the result
simulateAsyncOperation((message) => {
  console.log(`Async data received: ${message}`);
});

// We will reach the end of the program before the async operation completes
console.log("End of the program");
