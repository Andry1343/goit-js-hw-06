const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

/* const ingredientsList = document.querySelector('#ingredients');
let liArr = [];
for (let i = 0; i < ingredients.length; i += 1) {
  const itemEl = document.createElement("li");
  itemEl.textContent = ingredients[i];
  itemEl.classList.add('item');
  liArr.push(itemEl);
}

ingredientsList.append(...liArr);
console.log(liArr)
console.log(ingredientsList) */

const ingredientsList = document.querySelector("#ingredients");
let itemsLi = ingredients
  .map((allitems) => `<li class = "item">${allitems}</li>`)
  .join("");

ingredientsList.insertAdjacentHTML("beforeend", itemsLi);
