// On the menu tonight: Steak, fruit salad, tofurkey, pork chops.
// Directions to students:
// prompts the user for their menu choice and assign it to a variable.
//
// If a vegan can eat it, return "This cuisine is vegan friendly."
// Otherwise, return "Vegans beware!"
// For the sake of this exercise. Tofurkey is definitely vegan friendly.
// Hint: Two identical strings are considered to be equal to each other.




var menuChoice = prompt('What do you want for dinner? Steak, fruit salad, tofurkey, or pork chops');
console.log(menuChoice);

if (menuChoice === 'fruit salad' || menuChoice === 'tofurkey') {
  console.log('This cuisine is vegan friendly');
} else if (menuChoice === 'steak' || menuChoice === 'pork chops') {
  console.log('Vegans beware');
} else {
  console.log('Its not on the tonight menu');
}
