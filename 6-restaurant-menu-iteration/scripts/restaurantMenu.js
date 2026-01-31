// Define menu items
const breakfastMenu = [
  "Pancakes - $7.50",
  "Waffles - $7.40",
  "Omelette - $8.00",
  "Oatmeal - $6.99",
];
const mainCourseMenu = [
  "Steak - $12.99",
  "Salmon - $11.99",
  "Pasta - $12.50",
  "Chicken - $10.99",
];
const dessertMenu = [
  "Ice Cream - $4.50",
  "Cake - $5.99",
  "Pie - $6.99",
  "Pudding - $4.99",
];

// Iterate over breakfast menu and create HTML list items
const breakfastMenuItemsHTML = breakfastMenu
  .map((item, index) => `<p>Item ${index + 1}: ${item}</p>`)
  .join("");

// Set the inner HTML of the breakfast menu container
document.getElementById("breakfastMenuItems").innerHTML =
  breakfastMenuItemsHTML;

// Traverse main course array using forEach and create HTML list items
let mainCourseItems = "";
mainCourseMenu.forEach((item, index) => {
  mainCourseItems += `<p>Item ${index + 1}: ${item}</p>`;
});

// Set the inner HTML of the main course menu container
document.getElementById("maincourseMenuItems").innerHTML = mainCourseItems;

// Traverse dessert array using a for loop and create HTML list items
let dessertItems = "";
for (let i = 0; i < dessertMenu.length; i++) {
  dessertItems += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}

// Set the inner HTML of the dessert menu container
document.getElementById("dessertMenuItems").innerHTML = dessertItems;
