const library = [
  {
    title: "The Alchemist",
    author: "Paulo Cohelo",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

// console.log(library);

for (const book of library) {
  book.status.read = true;
}

// console.log(library);

const { title: firstName } = library[0];

// console.log(firstName);

const jsonObj = JSON.stringify(library);
console.log(jsonObj);
