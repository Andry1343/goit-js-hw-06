
const navItemCategories = document.querySelectorAll('li.item')
console.log('Number of categories:', navItemCategories.length);

navItemCategories.forEach(function(category){
  console.log('Category:', category.firstElementChild.textContent);
  console.log('Elements:', category.lastElementChild.childElementCount);
});