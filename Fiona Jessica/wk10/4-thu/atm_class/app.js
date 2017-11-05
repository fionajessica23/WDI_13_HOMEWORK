class Atm {

  constructor(type) {
    this.type = type //refering to the instance in the future
    this.money = 0
    this.history = []
  }

  deposit(amount) {
    this.history.push(`+${amount}`)
    return this.money += amount
  }

  withdraw(amount) {
    this.history.push(`-${amount}`)
    return this.money -= amount
  }

  showBalance() {
    return this.money
  }

  transactionHistory() {
    return this.history
  }

}

var a1 = new Atm('checking')
console.log(a1.deposit(70));
console.log(a1.withdraw(10));
console.log(a1.showBalance());
console.log(a1.transactionHistory());
