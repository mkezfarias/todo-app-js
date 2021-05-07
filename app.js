// selectors
const todoInput = document.querySelector('.new-todo-input');
const todoButton = document.querySelector('.new-todo-button');
const todoList = document.querySelector('.list-of-todos');
// event listeners

//functions

const addTodo = (e) => {
    
  e.preventDefault;

  const newTodo = document.createElement('li');
  newTodo.innerText = 'hey'
  newTodo.classList.add('todo-item py-3 row');
  
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('d-flex row');
  newTodo.appendChild(todoDiv);

  const todoText = document.createElement('div');


  const selectedButton = document.createElement('div');
  todoDiv.classList.add('col-1');
  selectedButton.innerHTML = '<i role="checkbox" class="select-item-checkbox far fa-square col-1"></i>'
  todoDiv.appendChild(selectedButton);

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>'
  deleteButton.classList.add("deleteButton-btn")
  todoDiv.appendChild(deleteButton);

  todoList.appendChild(todoDiv);
}

todoButton.addEventListener('click', addTodo);
