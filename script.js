const API = "https://api.jsonbin.io/v3/b/6725a8cead19ca34f8c291f4";
let tasks = [];

async function loadTasks() {
  try {
    const response = await axios.get(API + "");
    tasks = Array.isArray(response.data.record) ? response.data.record : [];
    renderTasks();
  } catch (error) {
    console.error("Error loading tasks:", error);
  }
}

async function saveTasks() {
  try {
    await axios.put(API, tasks, {
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key":
          "$2a$10$bNbnN4BNVn3ke/GK9vy6e.kOAKJF5e0Fua3QZPjX7ZxQJvWoQgVrq",
      },
    });
  } catch (error) {
    console.error("Error saving tasks:", error);
  }
}

async function addTask() {
  const taskName = document.getElementById("taskName").value;
  const taskUrgency = document.getElementById("taskUrgency").value;

  if (taskName) {
    tasks.push({ name: taskName, urgency: taskUrgency });
    await saveTasks();
    renderTasks();
    document.getElementById("taskName").value = "";
  }
  console.log("Task added:", taskName, taskUrgency);
}

async function deleteTask(index) {
  tasks.splice(index, 1);
  await saveTasks();
  renderTasks();
}

async function modifyTask(index) {
  const newTaskName = prompt("Enter new task name:") || tasks[index].name;
  const newTaskUrgency = prompt("Enter new urgency level: low/medium/high");
  if (newTaskName && newTaskUrgency) {
    tasks[index] = { name: newTaskName, urgency: newTaskUrgency };
    await saveTasks();
    renderTasks();
  }
}

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  if (Array.isArray(tasks)) {
    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.className = "list-group-item";
      li.innerHTML = `${task.name} - ${task.urgency}   <button onclick="deleteTask(${index})">Delete</button> <button onclick="modifyTask(${index})">Modify</button>`;
      taskList.appendChild(li);
      console.log(index);
    });
  }
}

// Load tasks when page loads
loadTasks();
