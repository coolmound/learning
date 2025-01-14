const formToDo = document.querySelector('.form-todo');
const inputTitle = document.querySelector('#input-title');
const inputDescription = document.querySelector('#input-description');
const listTask = document.querySelector('#list-container');
const addButton = document.querySelector('.add-button');

let task = [];
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
  tasks.push({ title, description, completed: false });
  updateTaskList();
  saveTasksToLocalStorage();
  formToDo.reset();
});
function updateTaskList() {
  listTask.innerHTML = '';
  tasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    const taskTitle = document.createElement('p');
    taskTitle.className = 'task-title';
    taskTitle.textContent = task.title;
    if (task.completed) {
      taskTitle.classList.add('completed');
    }

    const taskContant = document.createElement('div');
    taskContant.className = 'description-block';

    const taskDescription = document.createElement('h3');
    taskDescription.className = 'task-description';
    taskDescription.textContent = task.description;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'Delete';

    const moveUpButton = document.createElement('button');
    moveUpButton.className = 'move-up-button';
    moveUpButton.textContent = 'Move Up';

    const moveDownButton = document.createElement('button');
    moveDownButton.className = 'move-down-button';
    moveDownButton.textContent = 'Move Down';
    deleteButton.addEventListener('click', () => {
      tasks.splice(index, 1);
      updateTaskList();
      saveTasksToLocalStorage();
    });

    taskTitle.addEventListener('click', () => {
      tasks[index].completed = !tasks[index].completed;
      updateTaskList();
      saveTasksToLocalStorage();
    });

    moveUpButton.addEventListener('click', () => {
      if (index > 0) {
        [tasks[index], tasks[index - 1]] = [tasks[index - 1], tasks[index]];
        updateTaskList();
        saveTasksToLocalStorage();
      }
    });

    moveDownButton.addEventListener('click', () => {
      if (index < tasks.length - 1) {
        [tasks[index], tasks[index + 1]] = [tasks[index + 1], tasks[index]];
        updateTaskList();
        saveTasksToLocalStorage();
      }
    });

    taskContant.appendChild(taskDescription);
    [
      taskTitle,
      taskContant,
      moveUpButton,
      moveDownButton,
      deleteButton,
    ].forEach(item => {
      taskItem.appendChild(item);
    });

    listTask.appendChild(taskItem);
  });
}

function saveTasksToLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
  tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  updateTaskList();
}

document.addEventListener('DOMContentLoaded', () => {
  loadTasksFromLocalStorage();
});
