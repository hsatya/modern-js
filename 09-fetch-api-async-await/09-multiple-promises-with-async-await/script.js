function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", endpoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject("Error: Something went wrong");
        }
      }
    };

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}

async function getAllData() {
  const movies = await getData("./movies.json");
  const actors = await getData("./actors.json");
  const directors = await getData("./directors.json");
  console.log(movies, actors, directors);
  // console.log(123);
}

// getAllData();
// console.log(456);

async function getAllDataWithFetch() {
  const moviesResponse = await fetch("./movies.json");
  const movies = await moviesResponse.json();
  const actorsResponse = await fetch("./actors.json");
  const actors = await actorsResponse.json();
  const directorsResponse = await fetch("./directors.json");
  const directors = await directorsResponse.json();

  console.log(movies, actors, directors);
}

// getAllDataWithFetch();

async function getAllDataPromiseAll() {
  const [moviesResponse, actorsResponse, directorsResponse] = await Promise.all(
    [fetch("./movies.json"), fetch("./actors.json"), fetch("./directors.json")]
  );

  const movies = await moviesResponse.json();
  const actors = await actorsResponse.json();
  const directors = await directorsResponse.json();

  console.log(movies, actors, directors);
}

// getAllDataPromiseAll();

async function getAllDataPromiseAll2() {
  const [movies, actors, directors] = await Promise.all([
    fetch("./movies.json").then((res) => res.json()),
    fetch("./actors.json").then((res) => res.json()),
    fetch("./directors.json").then((res) => res.json()),
  ]);

  console.log(movies, actors, directors);
}

getAllDataPromiseAll2();
