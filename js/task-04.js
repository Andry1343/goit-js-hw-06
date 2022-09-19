let counterValue = 0;

const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);
const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);
let valueEl = document.querySelector("#value");

buttonDecrement.addEventListener("click", () => {
  console.log((counterValue -= 1));
  valueEl.textContent = counterValue;
});

buttonIncrement.addEventListener("click", () => {
  console.log((counterValue += 1));
  valueEl.textContent = counterValue;
});
