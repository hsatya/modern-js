// // for (let i = 1; i <= 100; ++i) {
// //   if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
// //   else if (i % 3 === 0) console.log("Fizz");
// //   else if (i % 5 === 0) console.log("Buzz");
// //   else console.log(i);
// // }

// // Filters
// // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // const evenNumbers = numbers.filter((num) => num % 2 === 0);
// // console.log(evenNumbers);

// // Same with forEach
// // const evenNumbers2 = [];
// // numbers.forEach((num) => {
// //   if (num % 2 === 0) evenNumbers2.push(num);
// // });
// // console.log(evenNumbers2);

// const companies = [
//   { name: "Company One", category: "Finance", start: 1981, end: 2004 },
//   { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
//   { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
//   { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
//   { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
//   { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
//   { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
//   { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
//   { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
// ];

// // Get only retail companies
// const retailCompanies = companies.filter((com) => com.category === "Retail");
// console.log(retailCompanies);

// // Companies that started in or after 1980 and ended in or before 2005
// const earlyCompanies = companies.filter(
//   (company) => company.start >= 1980 && company.end <= 2005
// );
// console.log(earlyCompanies);

// // Companies that lasted 10 years or more
// const longCompanies = companies.filter(
//   (company) => company.end - company.start >= 10
// );
// console.log(longCompanies);

// // Crete an array of comapny names
// const comapnyNames = companies.map((company) => company.name);
// console.log(comapnyNames);

// // Create an array with just comapny and category
// const companyInfo = companies.map((company) => ({
//   name: company.name,
//   category: company.category,
// }));
// console.log(companyInfo);

// // Create an array of the length of each comapny in years
// const comapnyYears = companies.map((company) => ({
//   name: company.name,
//   years: company.end - company.start + " years",
// }));

// console.log(comapnyYears);

// // Chain map method
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const squareAndDouble = numbers
//   .map((number) => Math.sqrt(number))
//   .map((sqrt) => sqrt * 2);

// console.log(squareAndDouble);

// // Get even numbers and double those even numbers
// const evenDoubles = numbers
//   .filter((number) => number % 2 === 0)
//   .map((even) => even * 2);
// console.log(evenDoubles);

// // Sum of all numbers in an array

// const sum = numbers.reduce((cv, num) => cv + num, 0);
// console.log(sum);

// const cart = [
//   { id: 1, name: "Product 1", price: 130 },
//   { id: 2, name: "Product 2", price: 150 },
//   { id: 3, name: "Product 3", price: 175 },
// ];

// // Total of prices
// const totalAmount = cart.reduce((acc, prod) => acc + prod.price, 0);
// console.log(totalAmount);

/**
 * Take the `people` array and create an array called `youngPeople` that stores objects with ONLY `name` and `email` properties of all the people that are 25 and under. The `name` property should have their first and last name.
 *
 */

const people = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john@gmail.com",
    phone: "111-111-1111",
    age: 30,
  },
  {
    firstName: "Jane",
    lastName: "Poe",
    email: "jane@gmail.com",
    phone: "222-222-2222",
    age: 25,
  },
  {
    firstName: "Bob",
    lastName: "Foe",
    email: "bob@gmail.com",
    phone: "333-333-3333",
    age: 45,
  },
  {
    firstName: "Sara",
    lastName: "Soe",
    email: "Sara@gmail.com",
    phone: "444-444-4444",
    age: 19,
  },
  {
    firstName: "Jose",
    lastName: "Koe",
    email: "jose@gmail.com",
    phone: "555-555-5555",
    age: 23,
  },
];

const youngPeople = people
  .filter((person) => person.age <= 25)
  .map((young) => ({
    name: young.firstName + " " + young.lastName,
    email: young.email,
  }));

console.log(youngPeople);

// Add all of the positive numbers in the array.
const numbers = [2, -30, 50, 20, -12, -9, 7];
const sumPositive = numbers
  .filter((number) => number > 0)
  .reduce((acc, cv) => acc + cv, 0);

console.log(sumPositive);

// Create a new array called `capitalizedWords` with the words from the `words` array with the first letter of each word capitalized.

const words = ["coder", "programmer", "developer"];
const capitalizedWords = words.map(
  (word) => word.charAt(0).toUpperCase() + word.slice(1)
);
console.log(capitalizedWords);
