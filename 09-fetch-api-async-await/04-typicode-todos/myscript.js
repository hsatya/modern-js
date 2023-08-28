const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector(".todos-form");
const todoTitle = document.querySelector("#title");

const apiUrl = "https://jsonplaceholder.typicode.com";
const limit = 5;

let todos = [];
let id = 6;

const getTodos = () => {
  fetch(`${apiUrl}/todos?_limit=${limit}`)
    .then((res) => res.json())
    .then((data) => {
      todos = data;
      displayTodos();
    });
};

const displayTodos = () => {
  todos.forEach((todo) => {
    const div = document.createElement("div");
    div.setAttribute("data-id", todo.id);
    if (todo.completed) div.classList.add("done");
    div.innerHTML = `<p>${todo.title}</p>`;
    todoList.appendChild(div);
  });
};

const onItemSubmit = (e) => {
  e.preventDefault();
  todos.push({ title: todoTitle.value, completed: false, id });
  id++;
  todoList.innerHTML = "";
  displayTodos();
  todoTitle.value = "";
};

todoForm.addEventListener("submit", onItemSubmit);

getTodos();
