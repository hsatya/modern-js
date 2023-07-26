const logo = document.querySelector("img");

function onClick(e) {
  //   console.log(e.target);
  //   console.log(e.currentTarget);
  //   console.log(e.type);
  //   console.log(e.timeStamp);
  //   console.log(e.clientX);
  //   console.log(e.clientY);
  //   console.log(e.offsetX);
  //   console.log(e.offsetY);
  //   console.log(e.pageX);
  //   console.log(e.pageY);
  console.log(e.screenY);
  console.log(e.screenY);
}

logo.addEventListener("click", onClick);
logo.addEventListener("drag", (e) => {
  document.querySelector("h1").textContent = `X: ${e.screenX}, Y: ${e.screenY}`;
});

// document.body.addEventListener("click", onClick);
