//JS Variables
//1.Assign the string "Jack" to a variable called captain
// var captain = 'Jack';

//
// 2.Using the captain variable, use string concatenation to form the string "Oh Jack, my Jack!",
// assigning it to a variable named phrase

// var phrase = 'Oh ' + captain + ', my ' + captain + '!';
// console.log(phrase);
//


//JS Conditionals
//1.Write an if statement that console.logs "SOS!" if there are more souls than lifeRafts
// var souls = 2;
// var lifeRafts = 2;
//
// if (souls > lifeRafts) {
//   console.log('SOS!');
// } else {
//   console.log('we are safe');
// }

//Data Structures - JS Arrays
//1.Create an array named weekend with just 'Saturday' in it
// var weekend = ['Saturday'];

//2.Write JS to add 'Sunday' to the end of the weekend array
// weekend.push('Sunday');

//3.Write JS to add 'Friday' to the front of the weekend array
// weekend.unshift('Friday');

//4.Write JS to access 'Saturday' in the array and assign to a variable named day
// var day = weekend.slice(1, 2);

//5.Write JS to remove 'Friday' from the array
// weekend.shift();


//Data Structures - JS Objects
//1.Write an object literal named brain having a property of energyLevel with a value of 10
// var brain = {
//   energyLevel: 10
// };

//2.Write JS to assign the property of energyLevel to a variable named energy
// var energy = brain.energyLevel;

//3.Write JS to add a dream property to the brain object that holds the string 'electric sheep'
// brain.dream ='electric sheep';

//JS Functions
//1.Write a function to return the area of a rectangle (the product of its length and its width)
// var areaRectangle = function (length, width) {
//   return length * width;
// }

//2.Invoke the function with 3 and 4 as arguments and save it to a variable
// var calculatingArea = areaRectangle(3, 4);
// console.log(calculatingArea);

//3.In the following code sample:
// var fruits = ['banana', 'apple', 'kiwi'];
//
// var addFruit = function (arr) {
//   arr.push('mango');
// }
//
// addFruit(fruits);
// console.log(fruits);
//
// explanation = because when the function get called, it's adding 'mango' to the original fruits array at the very end and returns new length.
// And because the fruits var that get passed in to the function is a global variable.

//Palindrome Problem
var word = [];
var palindromeWord = [];

var inputWord = 'helpme'
