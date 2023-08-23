// function getData(endpoint) {
//   const xhr = new XMLHttpRequest();

//   xhr.open("GET", endpoint);

//   xhr.onreadystatechange = function () {
//     if (this.readyState === 4) {
//       if (this.status === 200) {
//         const data = JSON.parse(this.responseText);
//         console.log(data);
//       }
//     }
//   };
//   setTimeout(() => {
//     xhr.send();
//   }, Math.floor(Math.random() * 3000) + 1000);
// }

// getData("./movies.json");
// getData("./actors.json");
// getData("./directors.json");

function getData(endpoint, cb) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", endpoint);

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        const data = JSON.parse(this.responseText);
        cb(data);
      }
    }
  };
  setTimeout(() => {
    xhr.send();
  }, Math.floor(Math.random() * 3000) + 1000);
}

getData("./movies.json", (data) => {
  console.log(data);
  getData("./actors.json", (data) => {
    console.log(data);
    getData("./directors.json", (data) => {
      console.log(data);
    });
  });
});
