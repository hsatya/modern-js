const url = "https://jsonplaceholder.typicode.com";

function createPost({ title, body }) {
  fetch(`${url}/posts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      "Content-Type": "application/json",
      token: "abc123",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

createPost({ title: "My Post", body: "This is my post." });
