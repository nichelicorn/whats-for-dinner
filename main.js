// ⤵ global variables
var sideRadio = document.querySelector('#Side');
var mainRadio = document.querySelector('#Main-dish');
var dessertRadio = document.querySelector('#Dessert');
var letsCookButton = document.querySelector('.lets-cook');
var cookpot = document.querySelector('.cookpot');
var makeThis = document.querySelector('.make-this')
// var mealRadio = document.querySelector('#Entire-meal');
// var addRecButton = document.querySelector('.add-recipe');

// ⤵ event listeners
// sideRadio.addEventListener('checked', showRandomSide);
letsCookButton.addEventListener('click', showRandomSelection)

// Build a function that will randomly generate either a Side, Main Dish, or Dessert, depending upon which radio button is clicked
  // need arrays for [Sides], [Main Dish], [Dessert]

function generateRandomIndex(array) {
  for (var i = 0; i < array.length; i++) {
    var randomIndex = array[Math.floor(Math.random() * array.length)];
  }
  console.log(randomIndex);
  return randomIndex;
};

function showRandomSelection() {
  // var randomDish;
  cookpot.classList.add('.hidden');
  if (sideRadio.checked === true) {
    // generateRandomIndex(sides);
    // console.log(randomDish);
    makeThis.innerText = (generateRandomIndex(sides));
  } else if (mainRadio.checked === true) {
    generateRandomIndex(mainDishes)
  } else if (dessertRadio.checked === true) {
    generateRandomIndex(desserts)
  }
}

//
// function showRandomSide() {
//   cookpot.classList.add('hidden');
//   recipe.innerText = generateRandomIndex(sides);
// };

// function showRandomMain() {
//   cookpot.classList.add('hidden');
// };
//
// function showRandomDessert() {
//   cookpot.classList.add('hidden');
// };

// function showRandomMeal() {
//   cookpot.classList.add('hidden');
// }

// when the [LET'S COOK] button is clicked, display randomly generated recipe name
// Recipe name should appear below the phrase "You should make:" - styles medium size font, italic
// Recipe name should appear in large font with an '!' at the end
// Cookpot icon should disappear
// [CLEAR] button should appear
