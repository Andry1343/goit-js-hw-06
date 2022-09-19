const inputTex = document.querySelector("#validation-input");

inputTex.addEventListener("blur", () => {
  let length = inputTex.value.length;
  if (length >= inputTex.getAttribute("data-length")) {
    inputTex.classList.add('valid');
    inputTex.classList.remove('invalid');
  } else if (length < inputTex.getAttribute("data-length")) {
    inputTex.classList.remove('valid');
    inputTex.classList.add('invalid');
  }
});
