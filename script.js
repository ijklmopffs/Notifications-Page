const mark = document.querySelector(".mark");
const allUnread = document.querySelectorAll(".unread");
const number = document.querySelector(".number");
const webber = document.querySelector(".webber");
const jacob = document.querySelector(".jacob");
const angy = document.querySelector(".angy");

mark.addEventListener("click", () => {
  allUnread.forEach((unread) => {
    unread.style.backgroundColor = "white";
  });
  number.textContent = "0";
});

function handleClick(element) {
  element.classList.toggle("unread");
  number.textContent = parseInt(number.textContent) - 1;
}

webber.addEventListener("click", () => handleClick(webber));
jacob.addEventListener("click", () => handleClick(jacob));
angy.addEventListener("click", () => handleClick(angy));
