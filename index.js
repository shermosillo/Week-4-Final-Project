// API: https://api.edamam.com/api/recipes/v2

const appId = "5c80967a"
const appKey = "e40187c7a1d8778d47a827f645b52f73"
const appType = "public"
const appIngredient = localStorage.getItem("ingr")
const recipeListEl = document.querySelector(".recipe-card")

async function getRecipes(event) {
    const ingr = event.target.value;
    renderRecipes(ingr)
}

 async function renderRecipes() {
    const recipes =  await fetch(`https://api.edamam.com/api/recipes/v2?type=${appType}&app_id=${appId}&app_key=${appKey}&q=${appIngredient}`)
    const recipesData = await recipes.json();
    recipeListEl.innerHTML = recipesData.hits.map(hit => recipeHTML(hit.recipe)).join("");
    console.log(recipesData)
}

renderRecipes();



function recipeHTML(recipe) {
    return `<div class="recipe-card">
        <div class="recipe-card__items">
            <h3>${recipe.label}</h3>
            <p><b>Calories:</b> ${recipe.calories.toFixed(2)}</p>
            <p><b>Ingredients:</b></p>
            <ul> 
                ${recipe.ingredientLines.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            <figure>
                    <img src="${recipe.image}" alt="">
                </figure>
        </div>
    </div>`;
}
