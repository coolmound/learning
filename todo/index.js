const formToDo = document.querySelector('.form-todo');
const inputTitle = document.querySelector('#input-title');
const inputDescription = document.querySelector('#input-description');
const listTask = document.querySelector('#list-container');
const addButton = document.querySelector('.add-button');


// Event listener for adding tasks
formToDo.addEventListener('submit', (e) => {
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
    taskItem.className = 'task-item'

    const taskTitle = document.createElement('p');
    taskTitle.className = 'task-title'
    taskTitle.textContent = title;


    const taskContant = document.createElement('div');
    taskContant.className = 'description-block';

    const taskDescription = document.createElement('h3');
    taskDescription.className = 'task-description';
    taskDescription.textContent = description;
    
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
    taskItem.remove();
    });
    
    taskTitle.addEventListener('click', () => {
        taskTitle.classList.toggle('completed');
    });

    moveUpButton.addEventListener('click', () => {
        const prevTask = taskItem.previousElementSibling;
        if (prevTask) {
            listTask.insertBefore(taskItem, prevTask);
        }
    });

    
    moveDownButton.addEventListener('click', () => {
        const nextTask = taskItem.nextElementSibling;
        if (nextTask) {
            listTask.insertBefore(nextTask, taskItem);
        }
    });


    taskItem.appendChild(taskTitle);
    listTask.appendChild(taskItem);
    taskItem.appendChild(taskTitle);
    taskItem.appendChild(taskContant);
    taskContant.appendChild(taskDescription);
    
    taskItem.appendChild(moveUpButton);
    taskItem.appendChild(moveDownButton);
    taskItem.appendChild(deleteButton);

   
}

