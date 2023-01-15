const hamburger = document.querySelector(".hamburger-div");
const listItems = document.querySelector(".unordered-list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  listItems.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  listItems.classList.remove("active");
}))