// 1. Write a function lengths that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

// var lengths = function(stringArr) {
//   var lengthsOfElems = [];
//
//   stringArr.forEach( function(elem) {
//     lengthsOfElems.push( elem.length );
//   } );
//
//   //alternative way below
//   // for (var index = 0; index < stringArr.length; index++) {
//   //   lengthsOfElems.push( stringArr[index].length  );
//   // }
//   //up to here
//
//   return lengthsOfElems;
// }
//
// console.log(lengths(['arya', 'tirza', 'fiona']));

// 2. Write a Javascript function called transmogrifier
// Your function should return the "transmogrified" result
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.


// var transmogrifier = function(number1, number2, number3) {
//   var multiplying = (number1 * number2);
//   var power = Math.pow(multiplying, number3);
//   var result = power;
//   return result;
// }
//
// var finalResult = transmogrifier(4,3,2);
// console.log(finalResult);


// 3. Write a function wordReverse that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.
var wordReverse = function(textArr) {
  var finalWord = [];

  textArr.forEach( function(elem){
    var splitArr = elem.split(' ');
    var reversedArr = splitArr.reverse();
    var joinedArr = reversedArr.join(' ');
    finalWord.push(joinedArr);
  })

  return finalWord;
}

console.log(wordReverse(['ryan is super awesome', 'tirza is super smart', 'what about fiona']));
