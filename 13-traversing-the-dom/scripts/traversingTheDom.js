/**
 * Traversing the DOM
 */

// Get a reference to the parent element
const parent = document.getElementById("parent");

// Get a reference to the first and last child elements
const firstChild = parent.firstElementChild;
const lastChild = parent.lastElementChild;

// Print the text content of the first and last child elements to the console
console.log("First Child: ", firstChild.textContent);
console.log("Last Child: ", lastChild.textContent);

console.log("\n--------------------\n");

/**
 * Navigating sibling elements
 */

// Get a reference to the middle p element without needing a reference to the parent element
const middle = document.querySelector("p:nth-child(2)");
// Get a reference to the previous and next sibling elements
const previousSibling = middle.previousElementSibling;
const nextSibling = middle.nextElementSibling;

// print the text content
console.log("Middle Child: ", middle.textContent);
console.log("Previous Sibling: ", previousSibling.textContent);
console.log("Next Sibling: ", nextSibling.textContent);

/**
 * Finding elements within a container
 */
const container = document.getElementById("container");
const singleElement = container.querySelector(".myClass"); // This will return the first element in the container with the class "myClass"
const multipleElements = container.querySelectorAll(".myClass"); // This will return a NodeList of all elements in the container with the class "myClass"

// Print the values of the single and multiple elements to the console
console.log("Single Element: ", singleElement.textContent);
console.log("Multiple Elements:\n");
multipleElements.forEach((element, index) => {
  console.log(`Element: ${index + 1} - ${element.textContent}`);
});
