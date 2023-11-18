const addTodo = document.getElementById("addTodo");
const inputBox = document.getElementById("input_box");
const listContainer = document.getElementById("listContainer");
const date = document.getElementById("date");

//showData to display
addTodo.addEventListener("click", () => {
  if (inputBox.value === "") {
    alert("Plase Write a Some Text");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
});

//remove
listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

//localStorage set data
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
