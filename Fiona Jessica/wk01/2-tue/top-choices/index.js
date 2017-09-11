// Create an array to hold your top choices (colors, presidents, whatever).
//
// For each choice, log to the screen a string like: "My #1 choice is blue."
//
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice",
// picking the right suffix for the number based on what it is.





// var myTopChoices = ['blue', 'chocolate', 'BMW'];
//
// for (var i = 0; i < myTopChoices.length; i++) {
//   console.log('My #1 choice is ' + myTopChoices[i]);
// }



var myTopChoices = ['blue', 'chocolate', 'BMW'];
var order = ['1st', '2nd', '3rd'];

for (var i = 0; i < myTopChoices.length; i++) {
  console.log('My ' + order[i] + ' choice is ' + myTopChoices[i]);
}
