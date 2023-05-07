const counter = document.getElementById("counter");
const addBtn = document.getElementById("addBtn");
const subBtn = document.getElementById("subBtn");
const resetBtn = document.getElementById("resetBtn");

let count = 0;

addBtn.addEventListener("click", () => {
  count++;
  counter.innerText = count;
});

subBtn.addEventListener("click", () => {
  count--;
  counter.innerText = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  counter.innerText = count;
});
