const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.is-open');
const closeMenu = document.querySelector('.close-menu')
const listMenu = document.querySelectorAll('.nav-menu-link')
const contact = document.querySelector('#contact-padding')

function toggleMenu() {
  if (navMenu.style.display === 'block') {
    navMenu.style.display = 'none';
  } else {
    navMenu.style.display = 'block';
  }
}

hamburgerMenu.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click',toggleMenu);
