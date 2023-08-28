const apiUrl = "https://jsonplaceholder.typicode.com/todos";
const limit = 10;

const getTodos = () => {
  fetch(apiUrl + "?_limit=" + limit)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((todo) => addTodoToDOM(todo));
    });
};

const addTodoToDOM = (todo) => {
  const div = document.createElement("div");
  div.classList.add("todo");
  div.setAttribute("data-id", todo.id);
  if (todo.completed) div.classList.add("done");
  div.appendChild(document.createTextNode(todo.title));
  document.getElementById("todo-list").appendChild(div);
};

const createTodo = (e) => {
  e.preventDefault();

  const newTodo = {
    title: e.target.firstElementChild.value,
    completed: false,
  };

  fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(newTodo),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => addTodoToDOM(data));

  document.getElementById("title").value = "";
};

const toggleCompleted = (e) => {
  if (e.target.classList.contains("todo")) {
    e.target.classList.toggle("done");
    updateTodo(e.target.dataset.id, e.target.classList.contains("done"));
  }
};

const updateTodo = (id, completed) => {
  fetch(`${apiUrl}/${id}`, {
    method: "PUT",
    body: JSON.stringify({ completed }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  // .then((response) => response.json())
  // .then((data) => console.log(data));
};

const deleteTodo = (e) => {
  if (e.target.classList.contains("todo")) {
    const id = e.target.dataset.id;
    fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => e.target.remove());
  }
};

const init = () => {
  getTodos();
  document.querySelector("#todos-form").addEventListener("submit", createTodo);
  document
    .querySelector("#todo-list")
    .addEventListener("click", toggleCompleted);
  document.querySelector("#todo-list").addEventListener("dblclick", deleteTodo);
};

init();
