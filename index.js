// API: https://api.edamam.com/api/recipes/v2

const appId = "5c80967a"
const appKey = "e40187c7a1d8778d47a827f645b52f73"
const appType = "public"
const recipeListEl = document.querySelector(".recipe-card__modal")
let isModalOpen = false;


 async function getRecipes(event) {
    event.preventDefault();
    const searchRecipe = event.target.value;
    const recipes =  await fetch(`https://api.edamam.com/api/recipes/v2?type=${appType}&app_id=${appId}&app_key=${appKey}&q=${searchRecipe}`)
    const recipesData = await recipes.json();
    recipeListEl.innerHTML = recipesData.hits.map((hit) => recipeHTML(hit.recipe)).join("");
}

function recipeHTML(recipe) {
    return `
    <div class="recipe-card__container">
        <div class="recipe-card__items"(${recipe.label})>
            <h3>${recipe.label}</h3>
            <p><b>Calories:</b> ${recipe.calories.toFixed(2)}</p>
            <figure class="recipe-card__img--wrapper">
                <img class="recipe-card__img" src="${recipe.image}" alt="">
            </figure>
        </div>
    </div>
    `;
}

function getRecipeDetails(recipe) {
    localStorage.setItem("recipe", recipe)
    window.location.href = `${window.location.origin}/recipe.html`
}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open"
}

function clearInputField() {
    const inputElement = document.getElementById("myInput");
    inputElement.value = "";
}

function reloadPage() {
    location.reload();
}