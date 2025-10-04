const itemSection = document.querySelector(".recipes");

const dataToBeAdded = localStorage.getItem("RecipeData");

let res;

window.addEventListener("load", async () => {
  res = JSON.parse(dataToBeAdded);

  console.log(res);
  console.log("page is fully loaded");
});
