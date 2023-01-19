const hamburger = document.querySelector(".hamburger-div");
const mobileMenu = document.querySelector(".mobile-unordered-list");
let hamburgerIcon = document.querySelector(".bi bi-list")


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  hamburgerIcon.classList.toggle("bi bi-x-lg");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  listItems.classList.remove("active");
}))

