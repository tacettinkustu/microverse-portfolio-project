const hamburgerMenu = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".is-open")

hamburgerMenu.addEventListener("click", toggleMenu);

function toggleMenu(e) {
  if (navMenu.style.display === "block") {
    navMenu.style.display = "none";
  } else {
    navMenu.style.display = "block";
  }
  e.preventDefault();
}
