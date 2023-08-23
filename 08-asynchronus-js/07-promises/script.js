// Create a Promise
const promise = new Promise((resolve, reject) => {
  // Do some asyn task
  setTimeout(() => {
    console.log("Async Task Completed.");
    resolve("Ha Ha Ha");
  }, 1000);
});

// promise.then((mssg) => console.log("Promise consumed... " + mssg));

const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ name: "John", age: 30 });
    } else {
      reject("Something went wrong!");
    }
  }, 1000);
});

getUser
  .then((user) => console.log(user))
  .catch((err) => console.error(err))
  .finally(() => console.log("The promise has been resolve or rejected!"));

console.log("Hello from global scope.");
