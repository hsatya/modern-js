const user = document.querySelector("#user");
const generate = document.querySelector("#generate");
const spinner = document.querySelector(".spinner");

const url = "https://randomuser.me/api/";

function createUser(userData) {
  if (userData.gender === "female") {
    document.body.style.backgroundColor = "rebeccapurple";
  } else {
    document.body.style.backgroundColor = "steelblue";
  }
  const userImg = document.createElement("div");
  const userDetails = document.createElement("div");

  const img = document.createElement("img");
  img.setAttribute("src", userData.picture.large);
  img.className = "w-full h-full rounded-full";
  userImg.appendChild(img);

  const userName = document.createElement("p");
  userName.innerHTML = `<strong>Name: </strong>${userData.name.first} ${userData.name.last}`;
  userDetails.appendChild(userName);

  const userEmail = document.createElement("p");
  userEmail.innerHTML = `<strong>Email: </strong>${userData.email}`;
  userDetails.appendChild(userEmail);

  const userPhone = document.createElement("p");
  userPhone.innerHTML = `<strong>Phone: </strong>${userData.phone}`;
  userDetails.appendChild(userPhone);

  const userLoaction = document.createElement("p");
  userLoaction.innerHTML = `<strong>Location: </strong>${userData.location.state} ${userData.location.country}`;
  userDetails.appendChild(userLoaction);

  const userAge = document.createElement("p");
  userAge.innerHTML = `<strong>Age: </strong>${userData.dob.age}`;
  userDetails.appendChild(userAge);

  user.appendChild(userImg);
  user.appendChild(userDetails);
  spinner.classList.add("hidden");
}

function fetchUser() {
  //   const user = document.querySelector("#user");
  user.innerHTML = "";
  spinner.classList.remove("hidden");
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const userData = data.results[0];
      createUser(userData);
    })
    .catch((err) => console.log(err));
}
generate.addEventListener("click", fetchUser);
