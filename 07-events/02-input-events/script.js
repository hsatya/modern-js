// const itemInput = document.getElementById("item-input");
// const priorityInput = document.getElementById("priority-input");
// const checkbox = document.getElementById("checkbox");
// const heading = document.querySelector("h1");

// function onInput(e) {
//   console.log(e.target.value);
// }

// function onChecked(e) {
//   console.log(e.target.checked);
// }

// function onFocus() {
//   console.log("Focued");
// }

// function onBlur() {
//   console.log("Blur");
// }

// itemInput.addEventListener("input", onInput);
// // itemInput.addEventListener("change", onInput);

// // priorityInput.addEventListener("input", onInput);
// priorityInput.addEventListener("change", onInput);

// checkbox.addEventListener("input", onChecked);

// itemInput.addEventListener("focus", onFocus);
// itemInput.addEventListener("blur", onBlur);

// const form = document.getElementById("item-form");

// function onSubmit(e) {
//   e.preventDefault();
//   // console.log("submit");
//   const item = document.getElementById("item-input").value;
//   const priority = document.getElementById("priority-input").value;

//   if (item === "" || priority === "0") {
//     console.log("Please fill the form");
//     return;
//   }

//   console.log(item, priority);
// }

// function onSubmit2(e) {
//   e.preventDefault();
//   const formData = new FormData(form);
//   // console.log(formData);

//   // const item = formData.get("item");
//   // const priority = formData.get("priority");
//   // console.log(item, priority);

//   const entries = formData.entries();
//   // console.log(entries);
//   for (const entry of entries) {
//     console.log(entry);
//   }
// }

// form.addEventListener("submit", onSubmit2);

const itemList = document.querySelectorAll("li");
const item = document.querySelector("ul");

// itemList.forEach((item) => {
//   item.addEventListener("click", (e) => e.target.remove());
// });

item.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});

item.addEventListener("mouseover", (e) => {
  if (e.target.tagName === "LI") {
    e.target.style.color = "red";
  }
});
