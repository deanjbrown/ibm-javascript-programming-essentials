let count = 0;

function increaseCount() {
  count++;
  displayCount();
  checkCountValue();
}

function resetCount() {
  count = 0;
  displayCount();
  alert("Your followers have been reset");
}

function checkCountValue() {
  if (count === 10) {
    alert("Congradulations, your account has gained 10 followers!");
  } else if (count === 20) {
    alert("Congradulations, your account has gained 10 followers!");
  }
}

function displayCount() {
  document.getElementById("countDisplay").innerHTML = count;
}
