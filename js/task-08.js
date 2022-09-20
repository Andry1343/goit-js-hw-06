const inputForm = document.querySelector(".login-form");
const inputEmail = document.querySelector('[type="email"]');
const inputPassword = document.querySelector('[type="password"]');
const btnSubmit = document.querySelector('[type="submit"]');

inputForm.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  const data = {
    email: email.value,
    password: password.value,
  };
  if (inputEmail.value.trim() === "" || inputPassword.value.trim() === "") {
    alert("Вы заполнили не все поля формы!");
  }
  inputForm.reset();
  console.log(data);
}