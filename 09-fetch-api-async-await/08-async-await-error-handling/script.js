const url = "https://jsonplaceholder.typicode.com/users";
const url1 = "http://httpstat.us/404";
const url2 = "https://jsonplaceholder.typicode.com/posts";

// const getUsers = async () => {
//   try {
//     // const response = await fetch(url);
//     // const data = await response.json();

//     const response = await fetch(url1);
//     if (!response.ok) {
//       throw new Error("Request not made");
//     }
//     const data = await response.text();

//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getUsers();

const getPosts = async () => {
  // const response = await fetch(url2);
  const response = await fetch(url1);
  if (!response.ok) {
    throw new Error("Request not made!!!");
  }
  const data = await response.json();
  console.log(data);
};

getPosts().catch((err) => console.log(err));
