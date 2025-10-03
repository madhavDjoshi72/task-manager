const API_URL = "http://localhost:5000/tasks";  // Change to AWS public IP later

async function fetchTasks() {
  const res = await fetch(API_URL);
  const tasks = await res.json();
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  tasks.forEach(task => {
    list.innerHTML += `<li class="list-group-item">${task.name}</li>`;
  });
}

async function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value;
  if (!task) return;
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: task })
  });
  taskInput.value = "";
  fetchTasks();
}

fetchTasks();
