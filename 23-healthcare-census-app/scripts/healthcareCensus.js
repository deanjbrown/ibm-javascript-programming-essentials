// Define the API url for the medical data we need to retrieve
const API_URL =
  "https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-JS0101EN-SkillsNetwork/health1.json";

// Get references to the data in the form
const addPatientButton = document.getElementById("addPatient");
const report = document.getElementById("report");
const searchBtn = document.getElementById("searchBtn");
const contactForm = document.getElementById("contactForm");
const patients = [];

// Reset the values of all form elements
function resetForm() {
  document.getElementById("name").value = "";
  document.querySelector('input[name="gender"]:checked').checked = false;
  document.getElementById("age").value = "";
  document.getElementById("condition").value = "";
}

// Retrieve input from the form and create a new element in the patients array
function addPatient() {
  const name = document.getElementById("name").value;
  const gender = document.querySelector("input[name='gender']:checked").value;
  const age = document.getElementById("age").value;
  const condition = document.getElementById("condition").value;

  if (name && gender && age && condition) {
    patients.push({ name, gender, age, condition });
    resetForm();
    generateReport();
  }
}

// Generates the HTML for the report
function generateReport() {
  const numPatients = patients.length;
  const conditionsCount = {
    diabetes: 0,
    thyroid: 0,
    highBloodPressure: 0,
  };

  const genderConditionsCount = {
    Male: {
      diabetes: 0,
      thyroid: 0,
      highBloodPressure: 0,
    },
    Female: {
      diabetes: 0,
      thyroid: 0,
      highBloodPressure: 0,
    },
  };

  for (const patient of patients) {
    conditionsCount[patient.condition]++;
    genderConditionsCount[patient.gender][patient.condition]++;
  }

  report.innerHTML = `Number of patients: ${numPatients}<br/><br/>`;
  report.innerHTML += `Conditions Breakdown:<br/>`;
  for (const condition in conditionsCount) {
    report.innerHTML += `${condition}: ${conditionsCount[condition]}<br/>`;
  }

  report.innerHTML += `<br/>Gender-Based Conditions:</br>`;
  for (const gender in genderConditionsCount) {
    report.innerHTML += `${gender}:<br/>`;
    for (const condition in genderConditionsCount[gender]) {
      report.innerHTML += `&nbsp;&nbsp;${condition}: ${genderConditionsCount[gender][condition]}<br/>`;
    }
  }
}

// Makes an API call to get condition data from the server and display that on the page
function searchCondition() {
  // Get the value that was search
  const input = document
    .getElementById("conditionInput")
    .value.toLowerCase()
    .trim();
  // Get a reference to the search result div
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = ""; // Reset the search result div's content

  // Use fetch to retrieve the JSON data from the server
  fetch(API_URL, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      // Search the JSON data for the search term
      const condition = data.conditions.find(
        (item) => item.name.toLowerCase() === input,
      );
      if (condition) {
        const symptoms = condition.symptoms.join(" ");
        const preventions = condition.prevention.join(" ");
        const treatments = condition.treatment;
        // Build the HTML structure top be appended to the result div.
        resultDiv.innerHTML += `<h2>${condition.name}</h2>`;
        resultDiv.innerHTML += `<img src="img/${condition.imagesrc}" alt="Image of ${condition.name}"/>`;
        resultDiv.innerHTML += `<p><strong>Symptoms: </strong> ${symptoms}</p>`;
        resultDiv.innerHTML += `<p><strong>Prevention: </strong> ${preventions}</p>`;
        resultDiv.innerHTML += `<p><strong>Treatment: </strong> ${treatments}</p>`;
      } else {
        resultDiv.innerHTML = "<p>Condition not found</p>";
      }
    })
    .catch((error) => {
      console.error("Error: ", error);
      resultDiv.innerHTML = "An error occurred while fetching data";
    });
}

function thankYou() {
  alert("Thank you for contacting us!");
}

// Add an onClick event to the add patient button
if (addPatientButton !== null) {
  addPatientButton.addEventListener("click", addPatient);
}

// Add an onClick event to the search button
if (searchBtn !== null) {
  searchBtn.addEventListener("click", searchCondition);
}

// Add an onSubmit event to the contact form
if (contactForm !== null) {
  contactForm.addEventListener("submit", thankYou);
}
