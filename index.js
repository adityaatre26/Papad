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
  const p = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
  );

  const result = await p.json();

  const para = document.createElement("p");
  const node = document.createTextNode(result.meals[0].strMeal);
  para.appendChild(node);

  resultsDiv.appendChild(para);

  localStorage.setItem("RecipeData:", result.meals);
  console.log(result.meals[0].strMeal);
};

recipeBtn.addEventListener("click", getRecipe);
