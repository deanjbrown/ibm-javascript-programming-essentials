/**
 * Styling DOM Elements
 */

// Increase the font size and change the color of a button when it is clicked
const fontButton = document.getElementById("font-button");
fontButton.addEventListener("click", () => {
  fontButton.style.fontSize = "2em";
  fontButton.style.backgroundColor = "#d43131";
});

// Get a reference to the p element
const myParagraph = document.getElementById("my-paragraph");

// Add a redText class to a p element when this button is clicked to make the text red
const addTextRedButton = document.getElementById("add-text-red");
addTextRedButton.addEventListener("click", () => {
  myParagraph.classList.add("redText");
});

// Remove a class from a p element when this button is clicked
const removeTextColorButton = document.getElementById("remove-text-color");
removeTextColorButton.addEventListener("click", () => {
  myParagraph.classList.remove("redText");
  myParagraph.classList.remove("blueText");
});

// Add a blueText class to a p element when this button is clicked to make the text blue
const addTextBlueButton = document.getElementById("add-text-blue");
addTextBlueButton.addEventListener("click", () => {
  myParagraph.classList.add("blueText");
});

// Toggle a big text class on the p element when this button is clicked to make the text bigger or smaller
const toggleBigTextButton = document.getElementById("toggle-big-text");
toggleBigTextButton.addEventListener("click", () => {
  myParagraph.classList.toggle("bigText");
});
