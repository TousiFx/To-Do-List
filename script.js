function updatedText() {
  const userInput = document.getElementById("task-input").value;
  document.getElementById("task-list").textContent += userInput;
}
