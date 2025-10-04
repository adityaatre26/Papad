const itemSection = document.querySelector(".recipes");

const dataToBeAdded = localStorage.getItem("RecipeData");

let res;

window.addEventListener("load", async () => {
  res = JSON.parse(dataToBeAdded);
  console.log(res);

  if (res.length == 1) {
    const oneRecipe = document.querySelector(".oneRecipe");
    oneRecipe.style.display = "block";

    const tbd = JSON.stringify(res);
    const para = document.createElement("p");
    const node = document.createTextNode(res);
    para.appendChild(node);

    const element = document.querySelector(".recipeIst");
    element.appendChild(para);
  } else {
    const catalogue = document.querySelector(".availableRecipes");
    catalogue.style.display = "block";

    // add all the divs in a loop
    for (let i = 0; i < res.length; i++) {
      let recipeName = res[i].strMeal;
      const divi = document.createElement("div");
      const innerDivi = document.createElement("div");
      const para = document.createElement("p");
      const linki = document.createElement("a");
      const node = document.createTextNode(recipeName);

      para.appendChild(node);
      linki.appendChild(para);
      divi.appendChild(linki);

      divi.classList.add("recipeCard");

      catalogue.appendChild(divi);
    }
  }
  console.log("page is fully loaded");
});
