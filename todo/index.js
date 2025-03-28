const formToDo = document.querySelector('.form-todo');
const inputTitle = document.querySelector('#input-title');
const inputDescription = document.querySelector('#input-description');
const listTask = document.querySelector('#list-container');
const addButton = document.querySelector('.add-button');

formToDo.addEventListener('submit', e => {
  e.preventDefault();

  const title = inputTitle.value.trim();
  const description = inputDescription.value.trim();

  if (title.length === 0 || title.length > 100) {
    alert('Task title must be between 1 and 100 characters.');
    return;
  }

  if (description.length > 500) {
    alert('Task description must not exceed 500 characters.');
    return;
  }

  addTask(title, description);
  formToDo.reset();
});

function addTask(title, description) {
  const taskItem = document.createElement('li');
  taskItem.className = 'task-item';

  const taskTitle = document.createElement('p');
  taskTitle.className = 'task-title';
  taskTitle.textContent = title;

  const taskContant = document.createElement('div');
  taskContant.className = 'description-block';

  const taskDescription = document.createElement('h3');
  taskDescription.className = 'task-description';
  taskDescription.textContent = description;

  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-button';
  deleteButton.textContent = 'Delete';
  deleteButton.setAttribute('aria-label', 'Delete task');

  const moveUpButton = document.createElement('button');
  moveUpButton.className = 'move-up-button';
  moveUpButton.textContent = 'Move Up';
  moveUpButton.setAttribute('aria-label', 'Move task up');

  const moveDownButton = document.createElement('button');
  moveDownButton.className = 'move-down-button';
  moveDownButton.textContent = 'Move Down';
  moveDownButton.setAttribute('aria-label', 'Move task down');

  deleteButton.addEventListener('click', () => {
    taskItem.remove();
    saveTasksToLocalStorage();
  });

  taskTitle.addEventListener('click', () => {
    taskTitle.classList.toggle('completed');
  });

  moveUpButton.addEventListener('click', () => {
    const prevTask = taskItem.previousElementSibling;
    if (prevTask) {
      listTask.insertBefore(taskItem, prevTask);
    }
    saveTasksToLocalStorage();
  });

  moveDownButton.addEventListener('click', () => {
    const nextTask = taskItem.nextElementSibling;
    if (nextTask) {
      listTask.insertBefore(nextTask, taskItem);
    }
    saveTasksToLocalStorage();
  });

  [taskTitle, taskContant, moveUpButton, moveDownButton, deleteButton].forEach(
    item => {
      taskItem.appendChild(item);
    }
  );
  taskContant.appendChild(taskDescription);

  listTask.appendChild(taskItem);
  saveTasksToLocalStorage();
}

function saveTasksToLocalStorage() {
  const tasks = [];
  document.querySelectorAll('.task-item').forEach(taskItem => {
    const title = taskItem.querySelector('.task-title').textContent;
    const description = taskItem.querySelector('.task-description').textContent;
    const completed = taskItem
      .querySelector('.task-title')
      .classList.contains('completed');
    tasks.push({ title, description, completed });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => {
    addTask(task.title, task.description);
    const lastTask = listTask.lastChild;
    if (lastTask && task.completed) {
      lastTask.querySelector('.task-title').classList.add('completed');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadTasksFromLocalStorage();
});
