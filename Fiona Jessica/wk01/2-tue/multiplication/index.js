// Write a for loop that will iterate from 0 to 10.
// For each iteration of the for loop,
// it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
//
// Bonus: Use a nested for loop to show the tables
// for every multiplier from 1 to 10 (100 results total).



// for (var number = 0; number <= 10; number++) {
//   var multipliedNumber = number * 9;
//   console.log(number + ' * 9 = ' + multipliedNumber);
// }




for (var number1 = 1; number1 <= 10; number1++) {
  for (var number2 = 1; number2 <= 10; number2++) {
    var table = number1*number2;
    // console.log(table);
    var show = number1 + ' x ' + number2 + ' = ' + table;
    console.log(show);
  }
}
