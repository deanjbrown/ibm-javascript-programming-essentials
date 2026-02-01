// Add the event listener to the button
document
  .getElementById("generateQuoteButton")
  .addEventListener("click", getRandomQuote);

// Array of motivational quotes
const quotes = [
  "Do what you can, with what you have, where you are.",
  "Progress, not perfection.",
  "The best time to start was yesterday. The next best time is now.",
  "You don’t have to see the whole staircase—just take the first step.",
  "Small steps, taken daily, add up to big change.",
  "Discipline is choosing what you want most over what you want now.",
  "Focus on what you can control.",
  "Consistency beats intensity.",
  "Nothing changes if nothing changes.",
  "Action creates clarity.",
  "The obstacle is the way.",
  "Slow is smooth. Smooth is fast.",
  "You are allowed to be a beginner.",
  "Make it work, then make it better.",
  "Your future self is watching.",
  "Energy flows where attention goes.",
  "Hard things become easier when you stop avoiding them.",
  "Done is better than perfect.",
  "Clarity comes from doing, not thinking.",
  "Build habits, not motivation.",
];

// Displays the quote in the HTML
function displayQuote(quote) {
  document.getElementById("quoteDisplay").innerText = quote;
}

// Selects and displays a random quote from the array
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  displayQuote(randomQuote);
}
