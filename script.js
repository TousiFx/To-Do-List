const inputValue = document.getElementById("task-input");
const btnValue = document.getElementById("addBtn");
const ListValue = document.getElementById("task-list");
const cleanList = document.getElementById("btn-clean");

btnValue.addEventListener("click", function () {
  const inputValueData = inputValue.value;

  if (inputValueData !== "") {
    const newTodo = document.createElement("li");
    newTodo.className = "list-line";
    const newSpan = document.createElement("span");
    newSpan.textContent = inputValueData;

    const delBtn = document.createElement("button");
    delBtn.className = "delete-btn";
    delBtn.textContent = "x";
    newTodo.appendChild(delBtn);
    newTodo.appendChild(newSpan);

    ListValue.appendChild(newTodo);
    inputValue.value = "";
  } else {
    alert("Please enter some text first!");
  }
});

ListValue.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    const removeBtn = event.target.parentElement;
    removeBtn.remove();
  }
});

cleanList.addEventListener("click", function clearList(ulId) {
  if (ListValue) {
    ListValue.innerHTML = "";
  }
});
