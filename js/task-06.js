const validInput = document.querySelector("#validation-input");
const lengthInput = Number(validInput.dataset.length);

validInput.addEventListener("blur", onBlur);

function onBlur() {
  if (validInput.value.length === lengthInput) {
    validInput.classList.remove("invalid");
    return validInput.classList.add("valid");
  } else {
    validInput.classList.remove("valid");
    return validInput.classList.add("invalid");
  }
}
