const inputItem = document.getElementById("item-input");

function onKeyPress(e) {
  // console.log("keypress");
  // key
  // keyCode
  // code
  console.log(e);
  console.log(e.shiftKey);
  console.log(e.ctrlKey);
  console.log(e.altKey);
}

function onKeyUp(e) {
  console.log("keyup");
}

function onKeyDown(e) {
  console.log("keydown");
}

inputItem.textContent;

inputItem.addEventListener("keypress", onKeyPress);
// inputItem.addEventListener("keyup", onKeyUp);
// inputItem.addEventListener("keydown", onKeyDown);
