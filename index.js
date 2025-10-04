const recipeBtn = document.querySelector("#getRecipe");
const filterRecipeBtn = document.querySelector("#filterBtn");
const resultsDiv = document.querySelector(".searchResults");
const getRecipeByInitials = async () => {
  const p = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  );

  const result = await p.json();

  console.log(result.meals);
};

const getRecipe = async () => {
  const recipeName = document.getElementById("search-bar-js").value;
  const p = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`
  );

  const result = await p.json();

  const toBeStored = JSON.stringify(result.meals);

  localStorage.setItem("RecipeData", toBeStored);

  window.location.href = "http://127.0.0.1:5500/recipe.html";
  console.log(result.meals[0].strMeal);
};

recipeBtn.addEventListener("click", getRecipe);
