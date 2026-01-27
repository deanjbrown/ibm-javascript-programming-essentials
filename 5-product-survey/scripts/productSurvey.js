function submitFeedback() {
  // Get the values from the form
  const username = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;
  const job = document.getElementById("job").value;
  const designation = document.getElementById("designation").value;
  const productType = document.getElementById("productType").value;
  const feedback = document.getElementById("feedbackText").value;
  const userExperience = document.getElementById("userExperienceText").value;

  // Set the text to display
  document.getElementById("userName").innerHTML = username;
  document.getElementById("userAge").innerHTML = age;
  document.getElementById("userEmail").innerHTML = email;
  document.getElementById("userJob").innerHTML = job;
  document.getElementById("userDesignation").innerHTML = designation;
  document.getElementById("userProductChoice").innerHTML = productType;
  document.getElementById("userFeedback").innerHTML = feedback;
  document.getElementById("userExperience").innerHTML = userExperience;

  // Make the div visible
  document.getElementById("userInfo").style.display = "block";
  alert("Thank you for your valuable feedback");
}

// Add onclick event handler to the submit button
const submitButton = document.getElementById("submitBtn");
submitButton.onclick = submitFeedback;

// Add onkeydown event handler
document.addEventListener("keydown", function(event) {
  if(event.key === "Enter") {
    submitFeedback();
  }
});