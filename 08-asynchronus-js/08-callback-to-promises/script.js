const posts = [
  { title: "Post One", body: "This is post one." },
  { title: "Post Two", body: "This is post two." },
];

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      if (!error) {
        posts.push(post);
        resolve(post);
      } else {
        reject("Something went wrong post could not be added.");
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(() => {
    posts.forEach((post) => {
      const div = document.createElement("div");
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.querySelector("#posts").appendChild(div);
    });
  }, 1000);
}

function displayErr(err) {
  const h3 = document.createElement("h3");
  h3.innerHTML = `<strong style="color:red">${err}</strong>`;
  document.querySelector("#posts").appendChild(h3);
}

createPost({ title: "Post Three", body: "This is post three." })
  .then(getPosts)
  .catch(displayErr);
