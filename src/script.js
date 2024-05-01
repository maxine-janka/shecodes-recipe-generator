
function displayRecipe(response){
  console.log("recipe generated");
  new Typewriter("#recipe-details", { 
    strings: response.data.answer,
    autoStart: true,
    delay: 0.2,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let recipeKeywords = document.querySelector("#user-input");
  let apiKey = "badact1734fb41b82663o4ab9a6e5204";
  let prompt = `Generate a recipe using ${recipeKeywords.value}`;
  let context = "You are very knowledgable about home cooking and love to share easy home cooked recipes. Display one recipe per search. Strictly display the recipe in HTML format. Do not write the word HTML";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating recipe");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayRecipe)
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);