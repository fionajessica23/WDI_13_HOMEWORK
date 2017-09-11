console.log('running');

// create an application that randomly organize a list of things into groups
//
// 1.allow user to enter a list of things
// 2.allow user to enter a group size
// 3.randomly assign things into groups with size given
// 4.if there are remainders here is how it's going to be distributed:
// if the remainder is one randomly assign it to a group
// if the remainders are one less than the group size. they stay as their own group
// else distribute them evenly into each group.

//
// flowchart
// given list of things
//   will be pushed into an array
//   find how many elements in this array
//
//
// given group size
//   this will be the divider number
//
// randomly assign things into group
//   how to divide elements to the group
//   randomizing with no duplication
//
//
// if(remainder === 1) {
//    //randomly assigned into group
// } else if (remainder === groupSize-1) {
//    // stay as their own group
//   resultArr.push(groupArr);
// } else {
//    // distributely evenly into each group
// }


var groupArr = ['a','b','c','d','e','f'];
var groupSize = 2;
var remainder = groupArr.length % groupSize ;
var totalGroupNumber = groupArr.length/groupSize;
var resultArr = [];


var randomValGivenArray = function (arr) {
  var rand = Math.floor(Math.random()*arr.length);
  return arr[rand];
}

// divide list into group , assume there is no remainder

for(var i = 0; i < totalGroupNumber; i++) {
  resultArr[i] = [];

  for(var j = 0; j < groupSize ; j++) {
    randomVal = randomValGivenArray(groupArr);

    // remove the randomVal from the groupArr , this is to handle duplication
    groupArr.splice(groupArr.indexOf(randomVal),1);
    resultArr[i].push(randomVal);
  }
}

    // if(remainder === 1) {
    //    //randomly assigned into group
    // } else if (remainder === groupSize-1) {
    //    // stay as their own group
    //   resultArr.push(groupArr);
    // } else {
    //    // distributely evenly into each group
    // }
console.log(resultArr);
