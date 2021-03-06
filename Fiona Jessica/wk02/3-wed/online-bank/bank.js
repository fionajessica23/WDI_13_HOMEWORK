console.log('make this online bank works properly!!');

//SAVINGS ATM machine

var savingsBalanceShown = document.querySelector('#savings-balance');
var savingsAmountInput = document.querySelector('#savings-amount');
var savingsWithdrawButton = document.querySelector('#savings-withdraw');
var savingsDepositButton = document.querySelector('#savings-deposit');


var clearSavingInput = function () {
  savingsAmountInput.value = '';
};


var savingsWithdraw = function (originalBalance, amountWithdraw) {
  var checkingOriginalBalance = +checkingBalanceShown.textContent;
  if (originalBalance >= amountWithdraw) {
    return originalBalance - amountWithdraw;
  } else {
    var tempWithdraw = amountWithdraw - originalBalance;

    if (checkingOriginalBalance > 0 && checkingOriginalBalance >= tempWithdraw) {
      checkingBalanceShown.textContent = checkingOriginalBalance - tempWithdraw;
      savingsBalanceShown.textContent = 0;
      return checkingBalanceShown.toFixed(2);  //fixing to 2 decimal value  and return
    } else {
      return false;
    }
  }
};

savingsWithdrawButton.addEventListener('click', function() {
  var originalBalance = +savingsBalanceShown.textContent; //also convert string to number
  var amountWithdraw = Number(savingsAmountInput.value); //convert string to number
  var withdrawBalance = savingsWithdraw(originalBalance, amountWithdraw);

  if (withdrawBalance) {
    savingsBalanceShown.textContent = withdrawBalance;
  } else {
    alert("You dont have enough money");
  } clearSavingInput();
})


var deposit = function (originalBalance, amountDeposit) {
  return originalBalance + amountDeposit;
};

savingsDepositButton.addEventListener('click', function() {
  var originalBalance = +savingsBalanceShown.textContent; //also convert string to number
  var amountDeposit = Number(savingsAmountInput.value); //convert string to number
  var depositBalance = deposit(originalBalance, amountDeposit);
  savingsBalanceShown.textContent = depositBalance.toFixed(2);
  clearSavingInput();
})


//CHECKING ATM machine
var checkingBalanceShown = document.querySelector('#checking-balance');
var checkingAmountInput = document.querySelector('#checking-amount');
var checkingWithdrawButton = document.querySelector('#checking-withdraw');
var checkingDepositButton = document.querySelector('#checking-deposit');

var clearCheckingInput = function () {
  checkingAmountInput.value = '';
};

var checkingWithdraw = function (originalBalance, amountWithdraw) {
  if (originalBalance >= amountWithdraw) {
    return originalBalance - amountWithdraw;
  } else {
    clearCheckingInput();
    alert("You dont have enough money");
  }
};

checkingWithdrawButton.addEventListener('click', function() {
  var originalBalance = +checkingBalanceShown.textContent; //also convert string to number
  var amountWithdraw = Number(checkingAmountInput.value); //convert string to number
  var withdrawBalance = checkingWithdraw(originalBalance, amountWithdraw);
  checkingBalanceShown.textContent = withdrawBalance.toFixed(2); //fixing to 2 decimal value
  clearCheckingInput();
})


checkingDepositButton.addEventListener('click', function() {
  var originalBalance = +checkingBalanceShown.textContent; //also convert string to number
  var amountDeposit = Number(checkingAmountInput.value); //convert string to number
  var depositBalance = deposit(originalBalance, amountDeposit);
  checkingBalanceShown.textContent = depositBalance.toFixed(2);
  clearCheckingInput();
})
