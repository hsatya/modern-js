// Fetching a JSON file
fetch("./movies.json")
  .then((response) => response.json())
  .then((data) => console.log(data));

// Fetching a text file
fetch("./test.txt")
  .then((response) => response.text())
  .then((data) => console.log(data));

// Fetching from an API
const url = "https://api.github.com/users";
fetch(url)
  .then((response) => response.json())
  .then((users) => console.log(users));
