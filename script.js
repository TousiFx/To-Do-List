const inputFill = document.getElementById("task-input");
const getBtn = document.getElementById("addBtn");
const outputFill = document.getElementById("task-list");

getBtn.addEventListener("click", function () {
  const inputValue = inputFill.value;

  if (inputValue !== "") {
    const newTodo = document.createElement("li");
    const spanTodo = document.createElement("span");
    spanTodo.textContent = inputValue;
    newTodo.className = "list-line";

    const delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.className = "delete-btn";
    newTodo.appendChild(delBtn);
    newTodo.appendChild(spanTodo);

    outputFill.appendChild(newTodo);
    inputFill.value = "";
  } else {
    alert("Please enter some text first!");
  }
});

outputFill.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    const removeBtn = event.target.parentElement;

    removeBtn.remove();
  }
});
