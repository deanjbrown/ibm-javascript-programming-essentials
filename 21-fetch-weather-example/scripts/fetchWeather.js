const API_KEY = ""; // Replace with your own API key

function showWeatherDetails(event) {
  event.preventDefault();
  const city = document.getElementById("city").value;
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  fetch(API_URL, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      const weatherInfo = document.getElementById("weatherInfo");
      weatherInfo.innerHTML = `
    <h2>Weather in: ${data.name}</h2>
    <p>Temperature: ${data.main.temp} &#8451;</p>
    <p>Weather: ${data.weather[0].description}</p>
    `;
    });
}

document
  .getElementById("weatherForm")
  .addEventListener("submit", showWeatherDetails);
