const express = require('express');
const fs = require('fs');
const path = require('path');
const Bank = require('./bank');

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'data', 'accounts.json');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const bank = new Bank();

// Load accounts from JSON
function loadData() {
    if (!fs.existsSync(DATA_FILE)) return;
    const data = JSON.parse(fs.readFileSync(DATA_FILE));
    data.forEach(acc => bank.addAccount(acc.accountNumber, acc.balance));
}

// Save accounts to JSON
function saveData() {
    const accounts = bank.getAllAccounts();
    fs.writeFileSync(DATA_FILE, JSON.stringify(accounts, null, 2));
}

loadData();

// Get all accounts
app.get('/accounts', (req, res) => {
    res.json(bank.getAllAccounts());
});

// Add account
app.post('/accounts', (req, res) => {
    const { accountNumber, balance } = req.body;
    if (bank.addAccount(accountNumber, balance)) {
        saveData();
        res.status(201).json({ message: "Account added" });
    } else {
        res.status(400).json({ error: "Account already exists" });
    }
});

// Transfer
app.post('/transfer', (req, res) => {
    const { from, to, amount } = req.body;
    const result = bank.transfer(from, to, amount);
    if (result === "Transfer successful") {
        saveData();
        res.json({ message: result });
    } else {
        res.status(400).json({ error: result });
    }
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
