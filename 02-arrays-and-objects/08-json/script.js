// async function fetchData() {
//   const response = await fetch("todos.json");
//   const data = await response.json();
//   return data;
// }

// const todos = fetchData();

// console.log(todos);

// document.write(todos[0].name);

// let todos = [];
// fetch("todos.json")
//   .then((response) => response.json())
//   .then((json) => todos.push(...json));

// console.log(todos);

const post = {
  id: 1,
  title: "Post One",
  body: "This is the body",
};

console.log(post);

// Convert to JSON string
let str = JSON.stringify(post);

console.log(str);

// Parse JSON
const posta = JSON.parse(str);

console.log(posta);

const posts = [
  {
    id: 1,
    title: "Post One",
    body: "This is the body",
  },
  {
    id: 2,
    title: "Post Two",
    body: "This is the body",
  },
];

str = JSON.stringify(posts);
console.log(str);
