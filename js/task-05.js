const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");


const inputSpan = event => {
  outputName.textContent = event.currentTarget.value;
  event.currentTarget.value.trim() === '' ? 
  outputName.textContent = 'Anonymous': null;
}

inputName.addEventListener("input", inputSpan)





/* inputName.addEventListener("input", (event) => {
  outputName.textContent = event.currentTarget.value
}); */