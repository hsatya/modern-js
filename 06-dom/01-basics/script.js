// console.dir(window.document);
// console.log(document.body.innerText);
// console.dir(document);

// console.log(document.links[0]);

// document.body.innerHTML = "<h1>Hello DOM</h1>";

// document.write("<p>Hello From JS</p>");

// console.log(document.getElementById("main"));
// const main = document.getElementById("main");
// main.innerHTML = "<h1>Hello DOM</h1>";
// console.log(document.querySelector("#main"));

// document.querySelector("#main h1").innerText = "Hello DOM!";

// console.log(document.documentElement);

// const arr = Array.from("12345");
// console.log(arr);

const div = document.createElement("div");
div.className = "my-element";
div.id = "my-element";

div.setAttribute("title", "My Element");

// div.innerText = "Hello, world!";

const text = document.createTextNode("Hello, world");
// div.append(text);
div.appendChild(text);

// console.log(div);

document.querySelector("h1").appendChild(div);

const li = document.createElement("li");
const textli = document.createTextNode("Watermelon");
li.appendChild(textli);

const button = document.createElement("button");
const textx = document.createTextNode("x");
button.appendChild(textx);
li.appendChild(button);
document.querySelector("ul").appendChild(li);

function replaceFirstItem() {
  const firstElement = document.querySelector("li:first-child");

  const li = document.createElement("li");
  li.textContent = "Replaced First";

  firstElement.replaceWith(li);
}

function replaceSecondItem() {
  const secondItem = document.querySelector("li:nth-child(2)");

  secondItem.outerHTML = "<li>Replaced Second!</li>";
}

function replaceAll() {
  const allListItems = document.querySelectorAll("li");

  // allListItems.forEach((li, i) => {
  //   li.outerHTML = `<li>Replace ${i + 1}</li>`;
  // });
  allListItems.forEach(
    (item, index) =>
      (item.outerHTML = index === 1 ? "<li>second item</li>" : "<li>item</li>")
  );
}

// replaceFirstItem();
// replaceSecondItem();
replaceAll();
