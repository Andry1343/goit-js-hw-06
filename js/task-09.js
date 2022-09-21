function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let buttonChangeColor = document.querySelector(".change-color");
let backgroundSpan = document.querySelector(".color");
let body = document.querySelector("body");

buttonChangeColor.addEventListener("click", onSubmit);

function onSubmit() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  //backgroundSpan.textContent = body.style.backgroundColor; // Мій варіант
  backgroundSpan.textContent = randomColor  // Ваш варіант
}
