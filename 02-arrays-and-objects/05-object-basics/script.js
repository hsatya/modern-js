let x;

const display = document.querySelector("p");

const person = {
  name: "John Doe",
  age: 30,
  isAdmin: true,
  address: {
    street: "123 Main st",
    city: "Boston",
    state: "MA",
  },
  hobbies: ["music", "sports"],
};

x = person.name;
x = person["age"];
x = person.address.state;
x = person.hobbies[1];

person.name = "Jane Doe";
person.isAdmin = false;

delete person.age;

person.hasChildren = true;

person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

person.greet();

x = person;

const person2 = {
  "first name": "Harshit",
  "last name": "Satya",
};

x = person2["first name"];

// display.innerText = x.name;
// document.write(x.toString());

console.log(x);
