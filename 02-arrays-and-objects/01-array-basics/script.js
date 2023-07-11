let x;

//  Array Literals
const numbers = [21, 45, 87, 96, 36];
const mixed = [21, "hello", true, null];

// Array Constructor
const fruits = new Array("apple", "orange", "grapes");

x = numbers[0];
x = numbers[0] + numbers[3];
x = `My favorite fruit is ${fruits[1]}.`;
x = mixed;
x = numbers.length;

fruits[2] = "mango";
x = fruits;

// fruits.length = 2;
fruits[3] = "strawberry";
// fruits[4] = "strawberry";
// x = fruits[3];
fruits[fruits.length] = "blueberry";
fruits[fruits.length] = "peach";

console.log(x);
