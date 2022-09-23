const validInput = document.querySelector("#validation-input");
const lengthInput = Number(validInput.dataset.length);

validInput.addEventListener("blur", onBlur);

function onBlur() { 
  validInput.classList.remove("invalid", "valid"); 
  const classRt = validInput.value.length === lengthInput ? "valid" : "invalid"
  validInput.classList.add(classRt); 
  };



/* const validInput = document.querySelector("#validation-input");
const lengthInput = Number(validInput.dataset.length);

validInput.addEventListener("blur", onBlur);

function onBlur() {
  if (validInput.value.length === lengthInput) {
    validInput.classList.remove("invalid");
    validInput.classList.add("valid");
  } else {
    validInput.classList.remove("valid");
    validInput.classList.add("invalid");
  }
  if (validInput.value.length === 0) {
    validInput.classList.remove("invalid");
  }
};  */