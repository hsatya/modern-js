let x = 1;

// const todo = {}; // Object Literal
const todo = new Object(); // Object Contructor

todo.id = 1;
todo.name = "Buy Milk";
todo.completed = false;

x = todo;

const person = {
  address: {
    coords: {
      lat: 42.9348,
      lng: -71.3232,
    },
  },
};

x = person.address.coords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
let obj3 = { obj1, obj2 };
obj3 = { ...obj1, obj2 };
obj3 = { ...obj1, ...obj2 };

x = obj3;

let obj4 = Object.assign({}, obj1, obj2);

x = obj4;

const todos = [
  { id: 1, name: "Buy Milk" },
  { id: 2, name: "Pick up kids from school" },
  { id: 3, name: "Take out trash" },
];

x = todos;

x = Object.keys(todo);
x = todo.length;
x = Object.keys(todo).length;
x = Object.values(todo);
x = Object.entries(todo);

x = todo.hasOwnProperty("name");
x = todo.hasOwnProperty("age");

console.log(x);
