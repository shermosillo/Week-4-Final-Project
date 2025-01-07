const appId = "5c80967a"
const appKey = "e40187c7a1d8778d47a827f645b52f73"
const appType = "public"
const recipeDetailEl = document.querySelector(".recipe-card")
const recipe = localStorage.getItem("recipe")


async function getRecipeDetails(uri) {
    const selectedRecipes =  await fetch(`https://api.edamam.com/api/recipes/v2/${uri}?app_id=${appId}&app_key=${appKey}`)
    const selectedRecipesData = await selectedRecipes.json();
    displayRecipeDetails(recipe);
}
    

function displayRecipeDetails(recipe) {
        return `
        <div class="recipe-card__container">
            <div class="recipe-card__items" (${recipe.label})>
                <h3>${recipe.label}</h3>
                <p><b>Calories:</b> ${recipe.calories.toFixed(2)}</p>
                <figure class="recipe-card__img--wrapper">
                    <img class="recipe-card__img" src="${image}" alt="">
                </figure>
                // <p><b>Ingredients:</b>${recipe.ingredientLines}</p>
                // <ul>
                //     <li>${recipe.quantity}</li>
                //     <li>${recipe.text}</li>
                // </ul>
                <p><b>Total Nutrients:</b>${recipe.totalNutrients}</p>
            </div>
        </div>
        `;
    }

getRecipes();