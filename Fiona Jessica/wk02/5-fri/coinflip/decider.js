// console.log('running');
// The Ultimate Life Decider Never make a decision again!
// Create a file called decider.js
// Write a function called coinFlip that 'console.logs' HEADS or TAILS when called
// Add a counter that declares WINNER in the console when either HEADS or TAILS
// is flipped 5 times.

// add the necessary components to the decider.html file so that when
// the coin image is clicked the coinFlip function result
// and tally are returned somewhere on the page.

// Write a function called coinFlip that 'console.logs' HEADS or TAILS when called
var coin = ['HEADS', 'TAILS'];

var winningPoint = 5;
var headsCounter = 0;
var tailsCounter = 0;


// adding event listener for the coin flip simulation

var coinClicked = document.querySelector('#coin-clicked');
var headsCount = document.querySelector('#heads-count');
var tailsCount = document.querySelector('#tails-count');
var showWinner = document.querySelector('#show-winner');
var flipBtn = document.querySelector('#flip-coin');
var resetBtn = document.querySelector('#play-again');


// var coinFlip = function () {
//   // randomized coinFlip
//
//   // show the tally to the heads-count or tails-count
          // if it is head, add 1 to the heads-count
          // if it is tail, add 1 to the tails-count
//
//   // if tails === 5, then show tails is WINNER
        // reset/disable the coin being clicked further
//   // if heads === 5, then show heads is WINNER
//      // reset/disable the coin being clicked further
//   //
// }

var coinFlip = function () {
  var randomizedCoin = coin[Math.round(Math.random())];

  if (randomizedCoin === 'HEADS') {
    headsCounter += 1;
    headsCount.textContent = headsCounter;
  } else {
    tailsCounter += 1;
    tailsCount.textContent = tailsCounter;
  }

  if (headsCounter === winningPoint) {
    showWinner.textContent = 'HEADS is WINNER!!';


  } else if (tailsCounter === winningPoint) {
    showWinner.textContent = 'TAILS is WINNER!!';
  }
}

coinClicked.addEventListener('click', coinFlip);

var reset = function () {
  headsCount.textContent = 0;
  tailsCount.textContent = 0;
  headsCounter = 0;
  tailsCounter = 0;
  showWinner.textContent = '';

}

flipBtn.addEventListener('click', coinFlip);
resetBtn.addEventListener('click', reset);


// document.getElementById("btnPlaceOrder").disabled = true;
//
// document.getElementById("btnPlaceOrder").disabled = false;
