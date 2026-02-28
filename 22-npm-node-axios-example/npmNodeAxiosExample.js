/**
 * This is a node.js example
 * In order to run this we need to first install the dependencies (axios)
 *
 * Run: npm install
 *
 * Then to run the script
 * Run: node npmNodeAxiosExample.js
 *
 */
const axios = require("axios");

async function fetchData() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
    );
    console.log("Response: ", response.data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();
