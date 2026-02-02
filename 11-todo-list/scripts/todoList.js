// Get a reference to the DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const clearAllTasksBtn = document.getElementById("clearAllTasksBtn");

// Add event listeners
addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
clearAllTasksBtn.addEventListener("click", clearAllTasks);

// Define some example tasks
let tasks = [
  { text: "Go to the shop", completed: false },
  { text: "Have lunch", completed: true },
  { text: "Fix bug with code", completed: false },
  { text: "Study", completed: false },
  { text: "Walk Dog", completed: false },
];

// Initial display of tasks
displayTasks();

// Add a task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    tasks.push({ text: taskText, completed: false });
    taskInput.value = "";
    displayTasks();
  }
}

// Display tasks
function displayTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}/>
    <label for="task-${index}">${task.text}</label>`;
    li.querySelector("input").addEventListener("change", () =>
      toggleTask(index),
    );
    taskList.appendChild(li);
  });
}

// Toggle task completion
function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  displayTasks();
}

// Clear completed tasks
function clearCompletedTasks() {
  tasks = tasks.filter((task) => !task.completed);
  displayTasks();
}

// Clear all tasks - Section challenge
function clearAllTasks() {
  tasks = [];
  displayTasks();
}
