// fetch("http://httpstat.us/200")
//   .then((response) => {
//     return response;
//   })
//   .then(() => {
//     console.log("success");
//   });

// fetch("http://httpstat.us/404")
//   .then((response) => {
//     return response;
//   })
//   .then(() => {
//     console.log("success");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// catch runs on a network error only in fetch
// fetch("http://httpstat.us/4041211")
//   .then((response) => {
//     return response;
//   })
//   .then(() => {
//     console.log("success");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Test with response.ok
// fetch("http://httpstat.us/404")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Request Failed!");
//     }
//     return response;
//   })
//   .then(() => {
//     console.log("success");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Check for specific status code
fetch("http://httpstat.us/500")
  .then((response) => {
    if (response.status === 404) {
      throw new Error("Page not found!");
    } else if (response.status === 500) {
      throw new Error("Server Error!");
    } else if (response.status !== 200) {
      throw new Error("Request Failed!");
    }
    return response;
  })
  .then(() => {
    console.log("success");
  })
  .catch((err) => console.log(err));
