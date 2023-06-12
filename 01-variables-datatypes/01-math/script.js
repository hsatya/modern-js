// let max = 100;
// let min = 1;

// const x = Math.floor(Math.random() * (max - min + 1)) + min;

// max = 50;

// const y = Math.floor(Math.random() * (max - min + 1)) + min;

// const sumOfOutput = x + y;
// const diffreenceOfOutput = x - y;
// const productOfOutput = x * y;
// const divisionOfOutput = x / y;
// const remainderOfOutput = x % y;

// console.log(sumOfOutput);
// console.log(diffreenceOfOutput);
// console.log(productOfOutput);
// console.log(divisionOfOutput);
// console.log(remainderOfOutput);

// let d;

// d = new Date();

// // d = d.toString();

// // d = d.toDateString();

// d = new Date(2021, 0, 10);

// d = new Date("2023-05-22");
// d = new Date("05/22/2023");

// d = Date.now();

// d = new Date("07-10-2022 12:30:00");
// // console.log(d);
// d = d.getTime();
// d = d.valueOf();

// d = new Date(1657436400000);

// console.log(d);

let x;
let d = new Date();

x = d.getTime();
x = d.valueOf();
x = d.getFullYear();
x = d.getMonth();
x = d.getMonth() + 1;
x = d.getDate() + 1;
x = d.getDay();
x = d.getHours();
x = d.getMinutes();
x = d.getSeconds();
x = d.getMilliseconds();

x = Intl.DateTimeFormat("en-US").format(d);
x = Intl.DateTimeFormat("en-GB").format(d);
x = Intl.DateTimeFormat("default").format(d);
x = Intl.DateTimeFormat("default", { month: "long" }).format(d);

x = d.toLocaleString("default", { month: "short" });

console.log(x);
