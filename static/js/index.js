const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
let year = document.querySelector('.copyright')

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

year.text = new Date().getFullYear();