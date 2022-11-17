const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
 
let list = document.getElementById("ingredients");

const foodIngredients = ingredients.forEach(ingredient => {
  
  let items = document.createElement("li");
  items.innerHTML = ingredient;
  items.classList.add(`item`);
  list.append(items);
});

console.log(foodIngredients);
