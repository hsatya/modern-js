const jokesEl = document.querySelector("#joke");
const jokeBtn = document.querySelector("#joke-btn");

const xhr = new XMLHttpRequest();

const generateJoke = () => {
  xhr.open("GET", "https://api.chucknorris.io/jokes/random");

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        const data = JSON.parse(this.responseText);
        jokesEl.innerHTML = data.value;
      } else {
        jokesEl.innerHTML = "Something went wrong (Not Funny!)";
      }
    }
  };
  xhr.send();
};

jokeBtn.addEventListener("click", generateJoke);
document.addEventListener("DOMContentLoaded", generateJoke);
