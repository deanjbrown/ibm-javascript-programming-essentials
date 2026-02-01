let testText = "The quick brown fox jumps over the lazy dog";
let startTime, endTime;

function startTest() {
  // Set the test text
  document.getElementById("inputText").value = testText;

  // Reset user input and output
  let userInput = document.getElementById("userInput");
  userInput.value = "";
  userInput.readOnly = false;
  userInput.focus();
  document.getElementById("output").innerHTML = "";

  // Start timer
  startTime = new Date().getTime();
}

// End the test and calculate results
function endTest() {
  // End timer
  endTime = new Date().getTime();

  // Disable user input
  document.getElementById("userInput").readOnly = true;

  // Calculate the time elapsed and the words per minute
  var timeElapsed = (endTime - startTime) / 1000; // in seconds
  var userTypedText = document.getElementById("userInput").value;

  // Split the text using a regex to count the words accurately
  var typedWords = userTypedText.split(/\s+/).filter(function (word) {
    return word !== "";
  }).length;

  // Default value
  var wpm = 0;

  // Calculate WPM only if timeElapsed is greater than 0 to avoid division by zero
  if (timeElapsed !== 0 && !isNaN(typedWords)) {
    wpm = Math.round((typedWords / timeElapsed) * 60);
  }

  // Display results
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `<h2>Typing Test Results</h2>
    <p>Words Typed: ${typedWords}</p>
    <p>Time Elapsed: ${timeElapsed.toFixed(2)} seconds</p>
    <p>Total length: ${userTypedText.trim().length}</p>
    <p>Words Per Minute (WPM): ${wpm}</p>`;
}
