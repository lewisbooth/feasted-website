const nav = $("nav")
const navMenuToggle = $(".nav-menu-toggle")
const navMenuButtons = $$(".nav-menu a")

navMenuToggle.addEventListener("click", toggleMenu)

navMenuButtons.forEach(e => e.addEventListener("click", toggleMenu))

function toggleMenu() {
  if (nav.classList.contains("active")) {
    nav.classList.remove("active")
    nav.setAttribute("aria-expanded", "false")
  } else {
    nav.classList.add("active")
    nav.setAttribute("aria-expanded", "true")
  }
}