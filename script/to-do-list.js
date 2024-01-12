let addBtn = document.querySelector("button");
let input = document.querySelector("input");
let tasklist = document.querySelector("ul");

addBtn.addEventListener("click", () => {
  let text = input.value;
  let task = createTask(text);
  task.innerHTML +=
    '<span class="closeBtn"><i class="fa-solid fa-trash-can"></i></span>';

  tasklist.appendChild(task);
  input.value = "";
  
});
tasklist.addEventListener("click", (e) => {
  if (e.target.nodeName === "I") {
    e.target.parentElement.parentElement.style = "display :none";
  }
  if (e.target.nodeName === "LI") {
    e.target.classList.toggle("done");
  }
});

function createTask(text) {
  let li = document.createElement("li");
  li.textContent = text;
  return li;
}
