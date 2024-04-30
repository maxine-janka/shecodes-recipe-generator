
function generateRecipe(event) {
  event.preventDefault();
  

  new Typewriter("#recipe-details", {
    strings: "Banana Bread Recipe",
    autoStart: true,
    delay: 1,
    cursor: "",
  });



}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);