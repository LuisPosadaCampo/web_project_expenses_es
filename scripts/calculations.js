let budgetValue = 0;
let totalExpensesValue = 0;
let balanceColor = "green";

let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

for (let i = 0; i < expenseEntries.length; i++) {
  totalExpensesValue += expenseEntries[i][1];
}

function calculateBalance() {
  totalExpensesValue = 0;
  for (let i = 0; i < expenseEntries.length; i++) {
    totalExpensesValue += expenseEntries[i][1];
  }

  let currentBalance = budgetValue - totalExpensesValue;

  if (currentBalance < 0) {
    balanceColor = "red";
  } else if (currentBalance < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }

  return currentBalance;
}

function updateBalanceColor() {
  calculateBalance();
}

function addExpense(category, amount) {
  expenseEntries.push([category, amount]);
}

function changeBudget(newBudget) {
  budgetValue = newBudget;
}

function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  }
  return totalExpensesValue / expenseEntries.length;
}

function calculateCategoryExpenses(category) {
  let categoryTotal = 0;
  for (let i = 0; i < expenseEntries.length; i++) {
    if (expenseEntries[i][0] === category) {
      categoryTotal += expenseEntries[i][1];
    }
  }
  return categoryTotal;
}

function calculateLargestCategory() {
  const categories = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];
  let largestCategory = categories[0];
  let maxExpense = calculateCategoryExpenses(categories[0]);

  for (let i = 1; i < categories.length; i++) {
    let currentCategoryExpense = calculateCategoryExpenses(categories[i]);
    if (currentCategoryExpense > maxExpense) {
      maxExpense = currentCategoryExpense;
      largestCategory = categories[i];
    }
  }
  return largestCategory;
}

function addExpenseEntry(values) {
  expenseEntries.push([values[0], values[1]]);
  totalExpensesValue += values[1];
}
