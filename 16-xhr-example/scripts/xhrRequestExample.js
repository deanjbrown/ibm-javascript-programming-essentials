/**
 * This script demonstrates how to make an XMLHttpRequest (XMR) to fetch data from an API and handle JSON responses.
 * We're using the JSONPlaceholder API: https://jsonplaceholder.typicode.com
 */

// Set the base API URL for the JSONPlaceholder API
const BASE_API_URL = "https://jsonplaceholder.typicode.com";

// Helper function to add click event listener to an element
function onClick(element, func) {
  element.addEventListener("click", func);
}

// Function to update the user data display area with the fetched data
function updateUserDataDisplay(data) {
  console.log("Updating user data display");
  console.log("Data: ", JSON.stringify(data, null, 2));

  const userDataDisplay = document.getElementById("user-data-container");
  userDataDisplay.innerHTML = ""; // Clear previous data

  // Create a table to display user data
  const table = document.createElement("table");
  // Create the header row
  const headerRow = document.createElement("tr");
  // Iterate over the headers and create table header cells
  ["Id", "Name", "Username", "Email", "Phone", "Website"].forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    headerRow.appendChild(th);
  });

  // Append the header row to the table
  table.appendChild(headerRow);

  // Iterate over the user data and create a row for each user
  data.forEach((user) => {
    const row = document.createElement("tr");
    // Iterate over the user properties and create table cells for each property
    [
      user.id,
      user.name,
      user.username,
      user.email,
      user.phone,
      user.website,
    ].forEach((cellData) => {
      const td = document.createElement("td");
      td.textContent = cellData;
      // Append the cell to the current row
      row.appendChild(td);
    });
    // Append the current row to the table
    table.appendChild(row);
  });

  // Append the table to the user data display container
  userDataDisplay.appendChild(table);
}

// Function to fetch user data from the API
function fetchUserData() {
  console.log("Fetching user data");
  // Create a new XMLHttpRequest object
  let xhr = new XMLHttpRequest();

  // Configure it: GET-request for the URL /users and set it to asynchronous
  xhr.open("GET", `${BASE_API_URL}/users`, true);

  // Set up the onLoad event handler to process the response when it arrives
  xhr.onload = () => {
    console.log("[+] XHR onLoad event triggered");
    if (xhr.status >= 200 && xhr.status < 400) {
      const userData = JSON.parse(xhr.responseText);
      updateUserDataDisplay(userData);
    } else {
      console.log("[-] Error fetching user data: ", xhr.status);
    }
  };

  // Send the request
  xhr.send();
}

function updatePostDataDisplay(data) {
  console.log("Updating post data display");
  console.log("Data: ", JSON.stringify(data, null, 2));

  const postDataDisplay = document.getElementById("post-data-container");
  postDataDisplay.innerHTML = ""; // Clear previous data

  // Create post element to display post data
  data.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    const postTitle = document.createElement("h3");
    postTitle.classList.add("postTitle");
    postTitle.textContent = post.title;

    const postBody = document.createElement("p");
    postBody.classList.add("postBody");
    postBody.textContent = post.body;

    postElement.appendChild(postTitle);
    postElement.appendChild(postBody);

    postDataDisplay.appendChild(postElement);
  })

}

function fetchPostData() {
  // Create a new XMLHttpRequest object
  let xhr = new XMLHttpRequest();

  // Configure it: GET-request for the URL /posts and set it to asynchronous
  xhr.open("GET", `${BASE_API_URL}/posts`, true);

  // Set up the onLoad event handler to process the response when it arrives
  xhr.onload = () => {
    if(xhr.status >= 200 && xhr.status < 400) {
      const postData = JSON.parse(xhr.responseText);
      updatePostDataDisplay(postData);
    }
    else {
      console.log("[-] Error fetching post data: ", xhr.status);
    }
  }

  // Send the request
  xhr.send();
}

// Get the button element and attach the click event listener to fetch user data when clicked
const fetchUserDataButton = document.getElementById("fetch-user-data-button");
onClick(fetchUserDataButton, fetchUserData);

// Get the button element and attach the click event listener to fetch post data when clicked
const fetchPostDataButton = document.getElementById("fetch-post-data-button");
onClick(fetchPostDataButton, fetchPostData);
