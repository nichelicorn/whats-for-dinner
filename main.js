// ⤵ global variables
var sideRadio = document.querySelector('#Side');
var mainRadio = document.querySelector('#Main-dish');
var dessertRadio = document.querySelector('#Dessert');
var letsCookButton = document.querySelector('.lets-cook');
var cookpot = document.querySelector('.cookpot');
var headline = document.querySelector('.headline');
var makeThis = document.querySelector('.make-this');
var mealRadio = document.querySelector('#Entire-meal');
// var addRecButton = document.querySelector('.add-recipe');

// ⤵ event listeners
letsCookButton.addEventListener('click', showRandomSelection)

// ⤵ functions
function generateRandomIndex(array) {
  for (var i = 0; i < array.length; i++) {
    var randomIndex = array[Math.floor(Math.random() * array.length)];
  }
  console.log(randomIndex);
  return randomIndex;
};

function showRandomSelection() {
  cookpot.classList.add('hidden');
  headline.classList.remove('hidden');
  makeThis.classList.remove('hidden');
  if (sideRadio.checked === true) {
    makeThis.innerText = (`${generateRandomIndex(sides)}!`);
  } else if (mainRadio.checked === true) {
    makeThis.innerText = (`${generateRandomIndex(mainDishes)}!`);
  } else if (dessertRadio.checked === true) {
    makeThis.innerText = (`${generateRandomIndex(desserts)}!`);
  } else if (mealRadio.checked === true) (
    makeThis.innerText = (`${generateRandomIndex(sides)}, ${generateRandomIndex(mainDishes)}, and ${generateRandomIndex(desserts)}!`))
}
// Recipe name should appear below the phrase "You should make:" - styles medium size font, italic
// Recipe name should appear in large font with an '!' at the end
// Cookpot icon should disappear
// [CLEAR] button should appear
