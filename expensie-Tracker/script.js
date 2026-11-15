const balance = document.getElementById("balance");
const incomeDislay = document.getElementById("income");
const expensesDisplay = document.getElementById("expenses");
const transactionList = document.getElementById("transactionList");
const type = document.getElementById("type");
const description = document.getElementById("description");
const amount = document.getElementById("amount");
const result = document.getElementById("result");
const addButton = document.getElementById("addButton");
let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
function updateTracker() {
  transactionList.innerHTML = "";
  let totalIncome = 0;
  let totalExpense = 0;
  transactions.forEach((transaction, index) => {
    const item = document.createElement("div");
    item.classList.add("transaction-item");
    if (transaction.type === "income") {
      totalIncome += transaction.amount;
      item.style.borderLeft = "5px solid green";
    } else {
      totalExpense += transaction.amount;
      item.style.borderLeft = "5px solid red";
    }
    item.innerHTML = `
    <span>${transaction.description}</span>;
     <span>$${transaction.amount.toFixed(2)}</span>;
     <button onclick="deleteTransaction(${index})" style="background:none;border:none;color:red;cursor:pointer;">X
</button>`;
    transactionList.appendChild(item);
  });
  const totalBalnce = totalIncome - totalExpense;
  balance.textContent = `$${totalBalnce.toFixed(2)}`;
  incomeDislay.textContent = `$${totalIncome.toFixed(2)}`;
  expensesDisplay.textContent = `$${totalExpense.toFixed(2)}`;
  localStorage.setItem("transactions", JSON.stringify(transactions));
}
function addTransactions() {
  const descText = description.value.trim();
  const amountVal = parseFloat(amount.value);
  const typeVal = type.value;
  if (descText === "" || isNaN(amountVal) || amountVal <= 0) {
    result.textContent = "fadlan gali sharaxaad sax ah iyo lacag sax ah";
    result.style.color = "red";
    return;
  }
  result.textContent = "";
  const newTransaction = {
    description: descText,
    amount: amountVal,
    type: typeVal,
  };
  transactions.push(newTransaction);
  updateTracker();
  description.value = "";
  amount.value = "";
}
function deleteTransaction(index) {
  transactions.splice(index, 1);
  updateTracker();
}
addButton.addEventListener("click", addTransactions);
updateTracker();
