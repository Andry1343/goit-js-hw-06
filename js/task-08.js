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
  if (data.email.trim() === "" || data.password.trim() === "") {
    alert("Вы заполнили не все поля формы!");
  }
  inputForm.reset();
  console.log(data);
}