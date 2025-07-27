const { LinkedList } = require('./structures');

class Bank {
    constructor() {
        this.accounts = new LinkedList();
    }

    addAccount(accountNumber, balance) {
        if (this.accounts.find(acc => acc.accountNumber === accountNumber)) {
            return false;
        }
        this.accounts.add({ accountNumber, balance });
        return true;
    }

    getAccount(accountNumber) {
        return this.accounts.find(acc => acc.accountNumber === accountNumber);
    }

    transfer(fromAccNum, toAccNum, amount) {
        const fromAcc = this.getAccount(fromAccNum);
        const toAcc = this.getAccount(toAccNum);

        if (!fromAcc || !toAcc) return "Account not found";
        if (fromAcc.balance < amount) return "Insufficient funds";

        fromAcc.balance -= amount;
        toAcc.balance += amount;
        return "Transfer successful";
    }

    getAllAccounts() {
        return this.accounts.toArray();
    }
}

module.exports = Bank;
