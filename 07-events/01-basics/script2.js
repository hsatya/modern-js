// const clearBtn = document.querySelector("#clear");

// const onClear = () => {
//   const itemList = document.querySelector("ul");
//   //   itemList.innerHTML = "";
//   //   itemList.remove();
//   const items = itemList.querySelectorAll("li");
//   //   items.forEach((item) => item.remove());

//   while (itemList.firstChild) {
//     itemList.removeChild(itemList.firstChild);
//   }
// };

// clearBtn.onclick = function () {
//   alert("Clear");
// };

// clearBtn.addEventListener("click", () => alert("Clear Items"));
// clearBtn.addEventListener("click", onClear);

// setTimeout(() => clearBtn.removeEventListener("click", onClear), 5000);

// setTimeout(() => clearBtn.click(), 5000);

////////////////// Events //////////////////
const logo = document.querySelector("img");

const onClick = () => console.log("Click Event");
const onDoubleClick = () => {
  if (document.body.style.backgroundColor !== "purple") {
    document.body.style.backgroundColor = "purple";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
};
const onRightClick = () => console.log("Right Clicked");
const onMouseDown = () => console.log("Mouse down event");
const onMouseUp = () => console.log("Mouse up event");
const onMouseWheel = () => console.log("Mouse wheel event");
const onMouseOver = () => console.log("Mouse over event");
const onMouseOut = () => console.log("Mouse out event");
const onDragStart = () => console.log("Drag Start event");
const onDrag = () => console.log("Drag event");
const onDragEnd = () => console.log("Drag End event");

// Events Listners
logo.addEventListener("click", onClick);
logo.addEventListener("dblclick", onDoubleClick);
logo.addEventListener("contextmenu", onRightClick);
logo.addEventListener("mousedown", onMouseDown);
logo.addEventListener("mouseup", onMouseUp);
logo.addEventListener("wheel", onMouseWheel);
logo.addEventListener("mouseover", onMouseOver);
logo.addEventListener("mouseout", onMouseOut);
logo.addEventListener("dragstart", onDragStart);
logo.addEventListener("drag", onDrag);
logo.addEventListener("dragend", onDragEnd);
