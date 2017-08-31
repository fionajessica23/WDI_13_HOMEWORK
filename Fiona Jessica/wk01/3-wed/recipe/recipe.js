// The Recipe Card


console.log('recipe');

var favRecipe = {
  title: 'sandwich',
  servings: 2,
  ingredients: ['bread', 'lettuce', 'cheese', 'ham']
};

console.log(favRecipe.title);
console.log('serves: ' + favRecipe.servings);
console.log('Ingredients:');
console.log(favRecipe.ingredients.join('\n'));

// the below command listing out the ingredients in array format
console.log('ingredients', favRecipe.ingredients);




// The Reading List

//
// var bookList = [{
//   title: 'twilight',
//   author: 'Stephanie Meyer',
//   about: 'vampire falls in love with a girl',
//   alreadyRead: true
// },
// {
//   title: 'harry potter',
//   author: 'J K Rowling',
//   about: 'a boy attending magic school',
//   alreadyRead: false
// }];
//
//
// bookList.forEach(function(obj) {
//   //console.log(obj.title + ' by ' + obj.author);
//   if (obj.alreadyRead === true) {
//     console.log('I already read ' + obj.title + ' by ' + obj.author);
//   } else {
//     console.log('I still need to read ' + obj.title + ' by ' + obj.author);
//   }
// })




// The Movie Database
//
//
// var movie = {
//   title: 'Taken 3',
//   duration: 115,
//   stars: ['liam neeson', 'famke janssen', 'maggie grace']
// };
//
// var movieInfo = function(movie) {
//   return movie.title + ' lasts for ' + movie.duration + ' minutes. Stars: ' + movie.stars
// }
//
// console.log(movieInfo(movie));
