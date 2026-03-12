# Finance Tracker CLI

A command-line personal finance tracker built with Node.js. Add income and expenses, view your balance, generate monthly reports, and filter transactions — all from your terminal with persistent local storage.

---

## Demo

```
1. Add Transaction
2. View Balance
3. Monthly Report
4. Filter with Type
5. Filter with Category
6. Exit

Choose option: 1

1. Expense
2. Income

Choose option: 2
Enter Amount: 5000
Category (e.g Salary, Food): Salary
✅ Transaction saved!
```

---

## Features

-  Add **Income** and **Expense** transactions
-  View **total balance** (income - expenses)
-  **Monthly report** — filtered to current month
-  Filter transactions by **type** (Income / Expense)
-  Filter transactions by **category** (e.g. Food, Salary)
-  **Persistent storage** — data saved locally in `transactions.json`
-  Input validation for amounts and categories

---

## Tech Stack

| Technology | Usage |
|---|---|
| Node.js | Runtime |
| `prompt-sync` | Synchronous CLI input |
| `fs` module | File-based persistent storage |
| JSON | Data storage format |

---

## Project Structure

```
finance-tracker-cli/

├── .gitignore
├── index.js              # Main app logic & CLI loop
├── package-lock.json
├── package.json
├── README.md
└── transactions.json     # Auto-generated data file (git-ignored)
```

---

## Getting Started

### Prerequisites

- Node.js `>=16.0.0`
- npm `>=7.0.0`

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/maazkhan-tech/finance-tracker-cli.git
   cd finance-tracker-cli
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the app**
   ```bash
   node index.js
   ```

---

## Dependencies

```json
{
  "dependencies": {
    "prompt-sync": "^4.2.0"
  }
}
```

Install manually:
```bash
npm install prompt-sync
```

---

## Usage Guide

| Option | Action |
|---|---|
| `1` | Add a new Income or Expense transaction |
| `2` | View current total balance |
| `3` | View all transactions for the current month |
| `4` | Filter transactions by type (Income / Expense) |
| `5` | Filter transactions by category name |
| `6` | Exit the application |

### Example Transactions

```
Type: Income | Amount: 5000 | Category: Salary
Type: Expense | Amount: 150  | Category: Food
Type: Expense | Amount: 50   | Category: Transport

Total Balance: 4800
```

---

## Data Storage

Transactions are saved automatically in `transactions.json` in the root directory.
This file is **git-ignored** and created locally on first run.

```json
[
  {
    "transactionType": "Income",
    "amount": 5000,
    "category": "Salary",
    "createdAt": 1749500000000
  }
]
```

---

## What I Learned

- Building interactive CLI apps with Node.js
- File system operations with the `fs` module
- JSON-based persistent local storage
- Input validation and error handling
- Array filtering and data aggregation

---

## Contributing

Contributions, issues, and feature requests are welcome!
Feel free to open an [issue](https://github.com/maazkhan-tech/finance-tracker-cli/issues) or submit a pull request.

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Author

**Your Name**
- GitHub: [@maazkhan-tech](https://github.com/maazkhan-tech)
- LinkedIn: [Click](https://linkedin.com/in/maaz-khan-5385bb386)
