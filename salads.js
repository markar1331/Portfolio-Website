
// Some JSON variables for the different types of salads



// replace .hide within the HTML
 document.getElementById("chickenCeasarIngredients").classList.add("hide");
 document.getElementById("thaiChickenCrunchIngredients").classList.add("hide");
 document.getElementById("buffaloChickenIngredients").classList.add("hide");
 document.getElementById("mediterraneanMixIngredients").classList.add("hide");
 document.getElementById("asianSesameGrainIngredients").classList.add("hide");

// Activate the show ingredients
document.getElementById("chickenCeasarShowButton").addEventListener("click", function() {
  document.getElementById("chickenCeasarIngredients").classList.add("show");
});

document.getElementById("thaiChickenCrunchShowButton").addEventListener("click", function() {
  document.getElementById("thaiChickenCrunchIngredients").classList.add("show");
});

document.getElementById("buffaloChickenShowButton").addEventListener("click", function() {
  document.getElementById("buffaloChickenIngredients").classList.add("show");
});

document.getElementById("mediterraneanMixShowButton").addEventListener("click", function() {
  document.getElementById("mediterraneanMixIngredients").classList.add("show");
});

document.getElementById("asianSesameGrainShowButton").addEventListener("click", function() {
  document.getElementById("asianSesameGrainIngredients").classList.add("show");
});


// Activate hide ingredients
document.getElementById("chickenCeasarHideButton").addEventListener("click", function() {
  document.getElementById("chickenCeasarIngredients").classList.remove("show");
});

document.getElementById("thaiChickenCrunchHideButton").addEventListener("click", function() {
  document.getElementById("thaiChickenCrunchIngredients").classList.remove("show");
});

document.getElementById("buffaloChickenHideButton").addEventListener("click", function() {
  document.getElementById("buffaloChickenIngredients").classList.remove("show");
});

document.getElementById("mediterraneanMixHideButton").addEventListener("click", function() {
  document.getElementById("mediterraneanMixIngredients").classList.remove("show");
});

document.getElementById("asianSesameGrainHideButton").addEventListener("click", function() {
  document.getElementById("asianSesameGrainIngredients").classList.remove("show");
});
