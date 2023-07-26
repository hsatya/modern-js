// You can optionally include JavaScript here

const passInput = document.getElementById("password");
const indicator = document.getElementById("strengthIndicator");

function onInput(e) {
  if (e.target.value.length < 4) {
    indicator.innerText = "Very Weak";
  } else if (e.target.value.length <= 7) {
    indicator.innerHTML = "Weak";
  } else if (e.target.value.length <= 11) {
    indicator.innerHTML = "Medium";
  } else if (e.target.value.length <= 15) {
    indicator.innerHTML = "Strong";
  } else if (e.target.value.length > 15) {
    indicator.innerHTML = "Very Strong";
  }
}

passInput.addEventListener("input", onInput);
