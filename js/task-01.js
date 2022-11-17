
const listItem = document.querySelectorAll(`.item`)

function countCategoryItem() {
    console.log(`Number of categories:`, listItem.length)
}

countCategoryItem();

const categoris = [...listItem].map(el => `Category: ${el.children[0].textContent} \nElements: ${el.children[1].children.length}`)
    .join("\n");
 console.log(categoris)


