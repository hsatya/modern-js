const text = document.querySelector("p");
const itemList = document.querySelector(".item-list");
const items = document.querySelectorAll("items");

// let f = true;

function run() {
  // console.log(1);
  // console.log(itemList.className);
  // text.className = f ? "card dark" : "card";
  // f = !f;
  text.classList.toggle("dark");
}

document.querySelector("button").onclick = run;
