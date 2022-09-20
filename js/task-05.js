const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

const inputSpan = (event) => {
  outputName.textContent = event.currentTarget.value;
  if (event.currentTarget.value.trim() === "") {
    outputName.textContent = "Anonymous";
  }
};

inputName.addEventListener("input", inputSpan);