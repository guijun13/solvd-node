const bankAccount = {
  balance: 10000,
  get formattedBalance() {
    return `$${this.balance}`;
  },
  set addToBalance(addBalance) {
    this.balance += addBalance;
  },
  transfer: function (currentBankAccount, targetBankAccount, amount) {
    if (currentBankAccount.balance >= amount) {
      currentBankAccount.balance -= amount;
      targetBankAccount.balance += amount;
    } else {
      console.error('Not enough money to make the transfer');
    }
  },
};

console.log('Initial value: ', bankAccount.formattedBalance);

bankAccount.addToBalance = 100;
console.log('Updated value: ', bankAccount.formattedBalance);

const targetBankAccount = {
  balance: 1000,
};

bankAccount.transfer(bankAccount, targetBankAccount, 3000);

console.log(bankAccount.formattedBalance);
console.log('Target bank account: ', targetBankAccount.balance);
