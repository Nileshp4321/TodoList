let tasks = [];

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  if (taskInput.value !== '') {
    tasks.push(taskInput.value);
    taskInput.value = '';
    renderTasks();
  }
}

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.innerHTML = task;
    taskList.appendChild(li);
  });
}
