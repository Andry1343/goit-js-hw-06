function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("input");
const btnCreate = document.querySelector(`button[data-create]`);
const boxDiv = document.querySelector("#boxes");
const btnDestroy = document.querySelector(`button[data-destroy]`);

let amounts;
const end = onNumberBox();

function onNumberBox() {
  amounts = Number(inputEl.value);
  return amounts;
}
let size = 30;
const box = [];

function createBoxes(amounts) {
  size = 30;
  for (let i = 0; i < amounts; i++) {
    boxDiv.insertAdjacentHTML(
      "beforeend",
      `<div class="color" style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`
    );
    size = size + 10;
  }
  boxDiv.append(...box);
}
function destroyBoxes() {
  boxDiv.innerHTML = "";
}

inputEl.addEventListener("input", onNumberBox);
btnCreate.addEventListener("click", () => createBoxes(amounts));
btnDestroy.addEventListener("click", destroyBoxes);
