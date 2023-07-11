let x;

const arr = [35, 55, 95, 20, 15];

// arr.push(100);
// arr.pop();

// arr.unshift(99);
// arr.shift();

// arr.reverse();

x = arr.includes(20);
x = arr.includes(200);

x = arr.indexOf(15);
x = arr.indexOf(95);
x = arr.indexOf(35);
x = arr.indexOf(305);

x = arr.slice(1, 4);
// arr.slice(start-indexe, end-index+1) and it does not modifies the array
// x = arr.splice(1, 4);
// arr.splice(start-indexe, number-of-elements) and it modifies the array

// To delete one item
// x = arr.splice(arr.indexOf(20), 1);

// Chain Methods
// x = arr.splice(1, 4).reverse().valueAt(2);
x = arr.splice(1, 4).reverse().toString().charAt(0);

console.log(x);
// console.log(arr);
