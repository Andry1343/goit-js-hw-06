const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

//////// Варіант рішення № 1 ////////

const inputSpan = (event) => {
  const valueInput = event.currentTarget.value.trim();
  outputName.textContent = valueInput || "Anonymous";
};


//////// Варіант рішення № 2 ////////

/* const inputSpan = (event) => {
  const valueInput = event.currentTarget.value.trim()
   outputName.textContent = valueInput;
    if (valueInput === "") {
    outputName.textContent = "Anonymous";
  } 
}; */

inputName.addEventListener("input", inputSpan);
