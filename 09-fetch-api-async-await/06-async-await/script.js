// // Fetching a JSON file
// fetch("./movies.json")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// // Fetching a text file
// fetch("./test.txt")
//   .then((response) => response.text())
//   .then((data) => console.log(data));

// // Fetching from an API
// const url = "https://api.github.com/users";
// fetch(url)
//   .then((response) => response.json())
//   .then((users) => console.log(users));

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "John", age: 30 });
  }, 1000);
});

// promise.then((data) => console.log(data));

async function getPromise() {
  const response = await promise;
  console.log(response);
}

// getPromise();
// const url = "https://api.github.com/users";
// async function getUsers() {
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
// }

// getUsers();
const url = "https://jsonplaceholder.typicode.com/posts?_limit=10";
const getPost = async () => {
  const response = await fetch(url);
  const data = await response.json();

  console.log(data);
};

getPost();
