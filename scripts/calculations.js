// Primer presupuesto
let budgetValue = 0;

// Acumulados de gastos
let totalExpensesValue = 0;

// Color del estado
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

function calculateBalance() {
  totalExpensesValue = 0;

  for (let i = 0; i < expenseEntries.length; i++) {
    totalExpensesValue += expenseEntries[i][1];
  }

  let currentBalance = budgetValue - totalExpensesValue;

  if (currentBalance < 0) {
    balanceColor = "red";
  } else if (currentBalance === 0) {
    balanceColor = "yellow";
  } else {
    balanceColor = "green";
  }
}
