const inputForm = document.querySelector(".login-form");
const inputEmail = document.querySelector('[type="email"]').required = true;
const inputPassword = document.querySelector('[type="password"]').required = true;
const btnSubmit = document.querySelector('[type="submit"]');

inputForm.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  const data = {
    email: email.value,
    password: password.value,
  };
  inputForm.reset();
  console.log(data);
}