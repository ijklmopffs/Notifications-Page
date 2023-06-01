const mark = document.querySelector(".mark");
const allUnread = document.querySelectorAll(".unread");
const number = document.querySelector(".number");
const numberString = number.textContent;
const numberValue = Number(numberString);
const webber = document.querySelector(".webber");
const jacob = document.querySelector(".jacob");
const angy = document.querySelector(".angy");

console.log(numberValue);

mark.addEventListener("click", () => {
  allUnread.forEach((unread) => {
    unread.style.backgroundColor = "white";
  });
  number.textContent = "0";
});

webber.addEventListener("click", () => {
  webber.classList.toggle("unread");
  number.textContent = numberValue - 1;
});
jacob.addEventListener("click", () => {
  jacob.classList.toggle("unread");
  number.textContent = numberValue - 1;
});
angy.addEventListener("click", () => {
  angy.classList.toggle("unread");
  number.textContent = numberValue - 1;
});
