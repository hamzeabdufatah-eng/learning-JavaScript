document.addEventListener("DOMContentLoaded", () => {
  // Dom elements
  const Form = document.querySelector(".transection-form ");

  const transectionList = document.getElementById("transection-list");
  const noTransection = document.querySelector(".no-transection");
  const searchInput = document.getElementById("search");
  const cancelButton = document.getElementById("cancel-button");
  //   summary elements
  const cardBalance = document.querySelector(".card-balance");
  const cardExpense = document.querySelector(".card-expense");
  const cardIncome = document.querySelector(".card-income");
  //   form elements
  const transectionType = document.getElementById("transection-type");
  const description = document.getElementById("description");
  const amount = document.getElementById("amount");
  const category = document.getElementById("category");
  const date = document.getElementById("date");
  let transections = JSON.parse(localStorage.getItem("transection")) || [];
  const categories = {
    income: ["Salary", "Bussiness", "Investment"],
    expense: ["Food", "Transport", "Utilities", "Healthcare"],
  };
  function render() {
    const type = transectionType.value;
    category.innerHTML = categories[type]
      .map((cat) => `<option value=${cat}>${cat}</option>`)
      .join("");
  }
  let isEditId = null;
  init();
  function init() {
    displayData();
    render();
    transectionType.addEventListener("change", render);
    console.log(Form);
    Form.addEventListener("submit", handleBtn);
    searchInput.addEventListener("input", () => {
      displayData(searchInput.value);
    });
    cancelButton.addEventListener("click", reset);
  }

  function handleBtn(e) {
    e.preventDefault();
    // console.log("sumbit worked");
    const transection = {
      type: transectionType.value,
      description: description.value,
      amount: parseFloat(amount.value),
      category: category.value,
      date: date.value,
      id: isEditId || Date.now(),
    };
    if (isEditId) {
      const index = transections.findIndex((t) => t.id === isEditId);
      if (index !== -1) {
        transections[index] = transection;
      }
    } else {
      transections.push(transection);
    }

    saveTransection();
    displayData();
    reset();
  }
  function saveTransection() {
    localStorage.setItem("transection", JSON.stringify(transections));
  }
  function displayData(searchItem = "") {
    const diplaying = searchItem
      ? transections.filter((t) =>
          t.description.toLowerCase().incudes(searchItem.toLowerCase()),
        )
      : transections;
    if (diplaying.length === 0) {
      noTransection.style.display = "block";
      transectionList.innerHTML = "";
      return;
    }
    noTransection.style.display = "none";
    transectionList.innerHTML = diplaying
      .map(
        (t) =>
          `<tr> <td>${t.date}</td>  <td>${t.description}</td> 
         <td>${t.category}</td>
         <td class="${t.type}>${t.type === "income" ? "+" : "expense"}">
         ${t.type === "income" ? "+" : "-"}
         ${parseFloat(t.amount || 0).toFixed(2)}</td>
        <td> <button class="action-btn btn-edit" data-id="${t.id}">Edit</button></td>  
         <td> <button class="action-btn btn-delete" data-id="${t.id}">Delete</button></td>   </tr>`,
      )
      .join("");
    // EDIT BUTTONS
    document.querySelectorAll(".btn-edit").forEach((btn) => {
      btn.addEventListener("click", (e) =>
        editTransection(Number(btn.dataset.id)),
      );
    });
    // DELETE BUTTONS
    document.querySelectorAll(".btn-delete").forEach((btn) => {
      btn.addEventListener("click", () =>
        deleteTransection(Number(btn.dataset.id)),
      );
    });
    // update summary
    updateSummary();
  }

  function editTransection(id) {
    const trans = transections.find((t) => t.id === id);
    if (trans) {
      isEditId = id;
      transectionType.value = trans.type;
      description.value = trans.description;
      amount.value = trans.amount;
      render();
      category.value = trans.category;
      date.value = trans.date;
    }
  }
  function deleteTransection(id) {
    transections = transections.filter((t) => t.id !== id);
    saveTransection();
    displayData();
    updateSummary()
  }
  function reset() {
    Form.reset();
    isEditId = null;
  }
  function updateSummary() {
    let income = 0;
    let expense = 0;
    transections.forEach((t) => {
      const value = parseFloat(t.amount) || 0;
      if (t.type == "income") {
        income += value;
      } else {
        expense += value;
      }
    });
    const balance = income - expense;
    if (cardIncome) {
      cardIncome.textContent = `${income.toFixed(2)}`;
    }
    if (cardExpense) {
      cardExpense.textContent = `${expense.toFixed(2)}`;
    }
    if (cardBalance) {
      cardBalance.textContent = `${balance.toFixed(2)}`;
    }
  }
});
