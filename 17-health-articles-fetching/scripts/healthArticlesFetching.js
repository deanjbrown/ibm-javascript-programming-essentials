const URL =
  "https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-JS0101EN-SkillsNetwork/health.json";

function updateHealthArticlesDisplay(articles) {
  console.log("Updating health articles display");
  console.log("Articles: ", JSON.stringify(articles, null, 2));

  const articlesDiv = document.getElementById("articles");
  articlesDiv.innerHTML = ""; // Clear previous articles

  articles.forEach((article) => {
    const articleElement = document.createElement("div");
    articleElement.classList.add("article");

    const titleElement = document.createElement("h2");
    titleElement.textContent = article.title;

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = article.description;

    const waysHeader = document.createElement("h3");
    waysHeader.textContent = "Ways to Achieve: ";

    const waysList = document.createElement("ul");
    article.ways_to_achieve.forEach((way) => {
      const wayListItem = document.createElement("li");
      wayListItem.textContent = way;
      waysList.appendChild(wayListItem);
    });

    const benefitsHeader = document.createElement("h3");
    benefitsHeader.textContent = "Benefits: ";

    const benefitsList = document.createElement("ul");
    article.benefits.forEach((benefit) => {
      const benefitListItem = document.createElement("li");
      benefitListItem.textContent = benefit;
      benefitsList.appendChild(benefitListItem);
    });

    articleElement.appendChild(titleElement);
    articleElement.appendChild(descriptionElement);
    articleElement.appendChild(waysHeader);
    articleElement.appendChild(waysList);
    articleElement.appendChild(benefitsHeader);
    articleElement.appendChild(benefitsList);

    articlesDiv.appendChild(articleElement);
  });
}

function fetchHealthArticles() {
  console.log("Fetching health articles data");

  const xhr = new XMLHttpRequest();
  xhr.open("GET", URL, true);
  xhr.responseType = "json";

  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 400) {
      updateHealthArticlesDisplay(xhr.response.articles);
    } else {
      console.log("[-] Error fetching health articles data: ", xhr.status);
    }
  };

  xhr.send();
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  fetchHealthArticles();
});
