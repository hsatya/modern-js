let x;

const firstName = "John";
const lastName = "Doe";
const age = 30;

const person = {
  firstName,
  lastName,
  age,
};

x = person.age;

// Desctructuring

const todo = {
  id: 1,
  title: "Get milk.",
  user: {
    name: "John",
  },
};

// const title = todo.title;
const {
  id: todoId,
  title,
  user: { name: userName },
} = todo;

// console.log(id, title, user);
// console.log(id, title, name);
// console.log(todoId, title, userName);

// Desctucture Arrays
const numbers = [23, 67, 33, 49];
const [first, second, ...rest] = numbers;

console.log(first, second, rest);

// console.log(x);
