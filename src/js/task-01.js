const navItemCategories = document.querySelectorAll('li.item');
const countCategories = () => console.log(`Number of categories: ${navItemCategories.length}`);

const eachCategory = categories =>
  categories.forEach(category => {
    const headerText = category.firstElementChild.textContent;
    const categoryElements = category.querySelectorAll('li');
    const showHeaderText = console.log(`Category: ${headerText}`);
    const showNumberOfElements = console.log(
      `Elements: ${categoryElements.length}`,
    );
    return showHeaderText, showNumberOfElements;
  });

countCategories();
eachCategory(navItemCategories);