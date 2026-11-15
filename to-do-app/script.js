const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("please enter a task");
    return;
  }
  const newTask = {
    text: taskText,
    complated: false,
  };
  tasks.push(newTask);
  saveTasks();
  dispayTasks();
  taskInput.value = "";
}
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function dispayTasks() {
  taskList.innerHTML = "";
  tasks.forEach(function (task, index) {
    const li = document.createElement("li");
    li.textContent = task.text;
    li.addEventListener("click", function () {
      task.complated = !task.complated;
      saveTasks();
      dispayTasks();
    });
    const dbutton = document.createElement("button");
    dbutton.classList.add("deleteButton");
    dbutton.textContent = "Delete";
    dbutton.addEventListener("click", function (event) {
      event.stopPropagation();
      tasks.splice(index, 1);
      saveTasks();
      dispayTasks();
    });
    li.appendChild(dbutton);
    if (task.complated) {
      li.classList.add("complated");
    }
    taskList.appendChild(li);
  });
}
dispayTasks();
// addTask();
addButton.addEventListener("click", addTask);
taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
