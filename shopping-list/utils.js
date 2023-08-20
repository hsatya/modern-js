function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;
  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);
  //   button.appendChild(document.createTextNode("❌"));
  return button;
}

function createIcon(classes) {
  const i = document.createElement("i");
  i.className = classes;
  return i;
}
