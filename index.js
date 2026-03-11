const prompt = require("prompt-sync")();
const fs = require("fs");

let transactions = [];
const filePath = "./transactions.json";
const validationHelper = (number) => Number.isInteger(number);
if (fs.existsSync(filePath) && fs.statSync(filePath).size > 0) {
  const readfile = fs.readFileSync(filePath);
  transactions = JSON.parse(readfile);
}


function saveToFile() {
  fs.writeFileSync(filePath, JSON.stringify(transactions, null, 2));
}
function addTransaction(type, amount, category) {
  let transaction = {
    transactionType: type,
    amount: amount,
    category: category,
    createdAt: Date.now(),
  };
  transactions.push(transaction);
  saveToFile();
}

function showBalance() {
  if (transactions.length === 0) console.log("Transactions not found!");
  let exp = 0;
  let inc = 0;
  for (let tr of transactions) {
    if (tr.transactionType === "Expense") {
      exp += tr.amount;
    }
    if (tr.transactionType === "Income") {
      inc += tr.amount;
    }
  }
  return console.log("Total Balance:", inc - exp);
}

function monthlyReport() {
  if (transactions.length === 0) console.log("Transactions not found!");
  const now = new Date();

  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).getTime();
  const endOfMonth = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0,
    23,
    59,
    59,
  ).getTime();

  let filterTransactions = transactions.filter(
    (tr) => tr.createdAt >= startOfMonth && tr.createdAt <= endOfMonth,
  );

  for (let filtr of filterTransactions) {
    console.log("----------");
    console.log("Type:", filtr.transactionType);
    console.log("Amount:", filtr.amount);
    console.log("Category:", filtr.category);
    console.log("Date:", new Date(filtr.createdAt).toLocaleDateString());
    console.log("----------");
  }
}

function filterByTransactionType(filteroption) {
  if (transactions.length === 0) console.log("Transactions not found!");
  let filterByType = [];
  if (filteroption === "1") {
    filterByType = transactions.filter(
      (tr) => tr.transactionType === "Expense",
    );
  } else if (filteroption === "2") {
    filterByType = transactions.filter(
      (tr) => tr.transactionType === "Income",
    );
  } else {
    return console.log("Invalid option");
  }
  for (let filtr of filterByType) {
    console.log("----------");
    console.log("Type:", filtr.transactionType);
    console.log("Amount:", filtr.amount);
    console.log("Category:", filtr.category);
    console.log("Date:", new Date(filtr.createdAt).toLocaleDateString());
    console.log("----------");
  }
}

function filterByCategory(category) {
  const matches = transactions.filter(tr =>
    tr.category.trim().toLowerCase() === category.trim().toLowerCase()
  );
  if (matches.length === 0) {
    console.log("Category not found!");
    return;
  }
  matches.forEach(tr => {
    console.log("----------");
    console.log("Type:", tr.transactionType);
    console.log("Amount:", tr.amount);
    console.log("Category:", tr.category);
    console.log("Date:", new Date(tr.createdAt).toLocaleDateString());
    console.log("----------");
  });
}


while (true) {
  console.log(`
1. Add Transaction
2. View Balance
3. Monthly Report
4. Filter with Type
5. Filter with Category
6. Exit
       `);

  let option = prompt("Choose option: ");
  let converted = Number(option);
  switch (converted) {
    case 1:
      console.log(`
1. Expense
2. Income
                `);
      let type = prompt("Choose option: ");
      let typeConverted = Number(type);
      let typeConfirmation = "";
      if (!validationHelper(typeConverted)) {
        console.log("Invalid Option Try Again!");
        break;
      } else {
        if (validationHelper(typeConverted) && typeConverted === 1) {
          typeConfirmation = "Expense";
        } else if (validationHelper(typeConverted) && typeConverted === 2) {
          typeConfirmation = "Income";
        } else {
          console.log("Invalid Option Try Again!");
          break;
        }
      }
      let amount = prompt("Enter Amount: ");

      if (isNaN(Number(amount))) {
        console.log("Please Enter correct amount");
        break;
      }
      if (Number(amount) <= 0) {
        console.log("Amount must be greater than 0");
        break;
      }
      let category = prompt("Category (e.g Salary, Food): ");
      if (!isNaN(category)) {
        console.log("Category connot be a number");
        break;
      }
      addTransaction(typeConfirmation, Number(amount), category);
      break;
    case 2:
      showBalance();
      break;
    case 3:
      monthlyReport();
      break;
    case 4:
      console.log(`
1. Expense
2. Income
                `);
      const filteroption = prompt("Choose: ");
      filterByTransactionType(filteroption);
      break;
      case 5:
        let categoryInput = prompt('Enter Category Name: ');
        filterByCategory(categoryInput);
        break;
    case 6:
      console.log("Exited");
      process.exit();
    default:
      console.log("Invalid Option try again!");
  }
}
