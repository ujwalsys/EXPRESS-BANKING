

# 💳 **Express Banking System**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=node.js\&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge\&logo=express\&logoColor=white)
![Vanilla JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)

---

## ✅ **Overview**

The **Express Banking System** is a **full-stack JavaScript application** that demonstrates **data structures** in real-world banking operations.
The app allows you to:
✔ Add new bank accounts
✔ Transfer funds between accounts
✔ Check balances
✔ Persist data in a JSON file

---

## 🏗 **Development Tasks**

### **1. Start the project**

* Set up **Node.js environment**
* Install required libraries:

  ```bash
  npm init -y
  npm install express
  ```
* Create `index.js` as the main server file.

---

### **2. Construct Node, LinkedList, and TreeNode classes**

* **Node Class** → Represents individual elements in the list
* **LinkedList Class** → Stores accounts in a sequential manner
* **TreeNode Class** → Used for building a **Binary Search Tree** for fast account lookups

**Example:**

```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  add(data) { /* Add account */ }
  find(predicate) { /* Search account */ }
}
```

---

### **3. Create a Bank Class**

* **Bank.js** uses `LinkedList` and `TreeNode` internally
* Handles all banking operations:

  * Adding accounts
  * Searching accounts
  * Transferring money

---

### **4. Add new accounts**

* Method `addAccount(accountNumber, balance)`:

  * Stores the account in **LinkedList**
  * Inserts account number into **Binary Search Tree** for optimized searching

---

### **5. Transfer and Balance Check**

* **`transfer(fromAcc, toAcc, amount)`**:

  * Validates both accounts
  * Checks if sufficient balance exists
  * Deducts from `fromAcc` and adds to `toAcc`
* **`getBalance(accountNumber)`**:

  * Finds the account and returns current balance

---

## 🛠 **Tech Stack**

* **Backend**: Node.js + Express.js
* **Frontend**: HTML, CSS, **Vanilla JavaScript**
* **Data Storage**: JSON file (`accounts.json`)
* **Data Structures Used**:

  * ✅ Linked List → For maintaining account sequence
  * ✅ Binary Search Tree → For quick account lookups

---

## 📂 **Folder Structure**

```
express-banking-system/
│── index.js          # Express server
│── bank.js           # Bank class logic
│── linkedlist.js     # Linked List implementation
│── tree.js           # TreeNode for BST
│── public/
│    └── index.html   # Frontend UI
│── data/
│    └── accounts.json # Stores accounts
│── package.json
```

---

## ▶ **Run the Project**

```bash
# Install dependencies
npm install

# Start server
node index.js
```

Visit **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 🔍 **Features Implemented**

✔ **Add Account**
✔ **Transfer Funds**
✔ **Balance Check**
✔ **Data Persistence**

---

## ✅ **Why This Project is Unique**

* Combines **DSA concepts (LinkedList & BST)** with **full-stack web development**
* Backend in **Node.js + Express**
* Frontend using **Vanilla JavaScript** with `fetch()` API calls

---

