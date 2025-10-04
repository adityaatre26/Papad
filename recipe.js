const itemSection = document.querySelector(".recipes");

const dataToBeAdded = localStorage.getItem("RecipeData");

let res;

window.addEventListener("load", async () => {
  res = JSON.parse(dataToBeAdded);
  console.log(res);

  if (res.length == 1) {
    const oneRecipe = document.querySelector(".oneRecipe");
    oneRecipe.style.display = "block";

    let ingredients = [];
    let str = "strIngredient";

    for (let i = 1; i <= 20; i++) {
      let temp = str + i;

      //   console.log(res[0][temp]);
      if (res[0][temp] && res[0][temp].length > 0) {
        ingredients.push(res[0][temp]);
      }
    }
    console.log(ingredients);

    let measurements = [];
    str = "strMeasure";

    for (let i = 1; i <= 20; i++) {
      let temp = str + i;

      //   console.log(res[0][temp]);
      if (res[0][temp] && res[0][temp].length > 0) {
        measurements.push(res[0][temp]);
      }
    }

    console.log(measurements);

    const heading = document.querySelector(".recipeName");
    const instr = document.querySelector(".recipeName");

    heading.innerHTML = res[0].strMeal;
    instr.innerHTML = res[0].strInstructions;
  } else {
    const catalogue = document.querySelector(".availableRecipes");
    catalogue.style.display = "block";

    // add all the divs in a loop
    for (let i = 0; i < res.length; i++) {
      let recipeName = res[i].strMeal;
      const divi = document.createElement("div");
      const para = document.createElement("p");
      const linki = document.createElement("a");
      const node = document.createTextNode(recipeName);

      para.appendChild(node);
      linki.appendChild(para);
      divi.appendChild(linki);

      divi.classList.add("recipeCard");
      linki.classList.add(recipeName);

      catalogue.appendChild(divi);
    }
  }
  console.log("page is fully loaded");
});
