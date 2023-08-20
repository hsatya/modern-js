const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const clearBtn = document.getElementById("clear");
const itemFilter = document.getElementById("filter");
const formBtn = itemForm.querySelector("button");
let isEditMode = false;

function displayItems() {
  const itemsFromStorage = getItemsFromLocalStorage();
  itemsFromStorage.forEach((item) => addItemToDOM(item));
  checkUI();
}

function onAddItemSubmit(e) {
  e.preventDefault();

  const newItem = itemInput.value;
  itemInput.value = "";

  // Validate input
  if (newItem === "") {
    alert("Plaese add an item.");
    return;
  }

  // Check for edit mode
  if (isEditMode) {
    const itemToEdit = itemList.querySelector(".edit-mode");

    removeItemFromStorage(itemToEdit.textContent);
    itemToEdit.classList.remove("edit-mode");
    itemToEdit.remove();
    isEditMode = false;
  } else {
    if (checkIfItemsExists(newItem)) {
      alert(`Item ${newItem} already in the list`);
      return;
    }
  }

  // Create item DOM element
  addItemToDOM(newItem);

  // Add item to local storage
  addItemToStorage(newItem);

  checkUI();
}

function addItemToDOM(item) {
  // Create list item
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));

  const button = createButton("remove-item btn-link text-red");

  li.appendChild(button);

  // Add li to the DOM
  itemList.appendChild(li);
}

function addItemToStorage(item) {
  const itemsFromStorage = getItemsFromLocalStorage();

  // Add item to array
  itemsFromStorage.push(item);

  // Convert to JSON String and set to local storage
  localStorage.setItem("items", JSON.stringify(itemsFromStorage));
}

function getItemsFromLocalStorage() {
  let itemsFromStorage;
  if (localStorage.getItem("items") === null) {
    itemsFromStorage = [];
  } else {
    itemsFromStorage = JSON.parse(localStorage.getItem("items"));
  }
  return itemsFromStorage;
}

function removeItemFromStorage(item) {
  let itemsFromStorage = getItemsFromLocalStorage();

  // Filter out item to be removed
  itemsFromStorage = itemsFromStorage.filter((itm) => itm !== item);

  // Re-set to local storage
  localStorage.setItem("items", JSON.stringify(itemsFromStorage));
}

function onClickItem(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    removeItem(e.target.parentElement.parentElement);
  } else {
    setItemToEdit(e.target);
  }
}

// Check for duplicates in the list
function checkIfItemsExists(item) {
  const itemsFromStorage = getItemsFromLocalStorage();
  return itemsFromStorage.includes(item);
}

function setItemToEdit(item) {
  isEditMode = true;

  itemList
    .querySelectorAll("li")
    .forEach((i) => i.classList.remove("edit-mode"));

  item.classList.add("edit-mode");
  formBtn.innerHTML = '<i class="fa-solid fa-pen"></i> Update Item';
  itemInput.value = item.textContent;
  formBtn.style.backgroundColor = "#228822";
}

function removeItem(item) {
  if (confirm("Are you sure?")) {
    // Remove item from DOM
    item.remove();

    // Remove item from Storage
    removeItemFromStorage(item.textContent);
    checkUI();
  }
}

function clearItems() {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }

  // Clear from local storage
  localStorage.removeItem("items");
  checkUI();
}

function filterItems(e) {
  const items = document.querySelectorAll("li");
  const text = e.target.value.toLowerCase();

  items.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase();
    if (itemName.indexOf(text) != -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

function checkUI() {
  itemInput.value = "";
  const items = document.querySelectorAll("li");
  if (items.length === 0) {
    clearBtn.style.display = "none";
    itemFilter.style.display = "none";
  } else {
    clearBtn.style.display = "block";
    itemFilter.style.display = "block";
  }

  formBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add Item';
  formBtn.style.backgroundColor = "#333";

  isEditMode = false;
}

// Initialize app
function init() {
  itemForm.addEventListener("submit", onAddItemSubmit);
  itemList.addEventListener("click", onClickItem);
  clearBtn.addEventListener("click", clearItems);
  itemFilter.addEventListener("input", filterItems);
  document.addEventListener("DOMContentLoaded", displayItems);
  checkUI();
}

init();
