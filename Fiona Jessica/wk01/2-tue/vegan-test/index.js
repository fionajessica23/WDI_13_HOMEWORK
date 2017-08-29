var menuChoice = prompt('What do you want for dinner? Steak, fruit salad, tofurkey, or pork chops');
console.log(menuChoice);

if (menuChoice === 'fruit salad' || menuChoice === 'tofurkey') {
  console.log('This cuisine is vegan friendly');
} else if (menuChoice === 'steak' || menuChoice === 'pork chops') {
  console.log('Vegans beware');
} else {
  console.log('Its not on the tonight menu');
}
