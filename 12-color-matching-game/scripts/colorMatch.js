// Define the possible colors for the cards
const colors = [
  "red",
  "blue",
  "green",
  "purple",
  "orange",
  "pink",
  "red",
  "blue",
  "green",
  "purple",
  "orange",
  "pink",
];

// Set the initial game state
let cards = shuffle(colors.concat(colors));
let selectedCards = [];
let score = 0;
let timeLeft = 30;
let gameInterval;

// Get references to DOM elements
const startBtn = document.getElementById("startbtn");
const gameContainer = document.getElementById("game-container");
const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("timer");

// Generate the cards
function generateCards() {
  for (const color of cards) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.color = color;
    card.textContent = "?";
    gameContainer.appendChild(card);
  }
}

// Shuffle the cards using Fisher-Yates shuffle algorithm
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Handle the card click event
function handleCardClick(event) {
  const card = event.target;
  // If the element we clicked is not a card or is already matched, ignore.
  if (!card.classList.contains("card") || card.classList.contains("matched")) {
    return;
  }
  card.textContent = card.dataset.color;
  card.style.backgroundColor = card.dataset.color;
  selectedCards.push(card);

  // If two cards are selected, check for a match
  if (selectedCards.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

// Check if the selected cards match
function checkMatch() {
  const [card1, card2] = selectedCards;
  if (card1.dataset.color === card2.dataset.color) {
    card1.classList.add("matched");
    card2.classList.add("matched");
    score += 2;
    scoreElement.textContent = `Score: ${score}`;
  } else {
    card1.textContent = "?";
    card2.textContent = "?";
    card1.style.backgroundColor = "#DDDDDD";
    card2.style.backgroundColor = "#DDDDDD";
  }
  selectedCards = [];
}

// Initializes the game
function startGame() {
  let timeLeft = 30;
  startBtn.disabled = true;
  score = 0;
  scoreElement.textContent = `Score: ${score}`;
  startGameTimer(timeLeft);
  cards = shuffle(colors.concat(colors));
  selectedCards = [];
  gameContainer.innerHTML = "";
  generateCards();
  gameContainer.addEventListener("click", handleCardClick);
}

// Start the game timer
function startGameTimer(timeLeft) {
  timerElement.textContent = `Time Left: ${timeLeft} s`;
  gameInterval = setInterval(() => {
    timeLeft--;
    timerElement.textContent = `Time Left: ${timeLeft} s`;

    if (timeLeft === 0) {
      clearInterval(gameInterval);
      letTimeLeft = 30;
      alert(`Time's up! Your final score is: ${score}`);
      startBtn.disabled = false;
    }
  }, 1000);
}

// Attach event listener to the start button
startBtn.addEventListener("click", startGame);
