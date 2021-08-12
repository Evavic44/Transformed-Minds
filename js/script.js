const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
   hamburger.classList.toggle("active");
   navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
   hamburger.classList.remove("active");
   navMenu.classList.remove("active");
}

// Navbar scroll effect
const navbar = document.getElementById('navbar');
const link = document.getElementById('link');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');
const link4 = document.getElementById('link4');
const logo = document.getElementById('logo'); 
let scrolled = false;

window.onscroll = function() {
   if(window.pageYOffset > 100) {
      navbar.classList.remove('top');
      link.classList.remove('colors');
      link2.classList.remove('colora');
      link3.classList.remove('colorb');
      link4.classList.remove('colorc');
      logo.classList.remove('colorz')
   } else {
      navbar.classList.add('top');
      link.classList.add('colors');
      link2.classList.add('colora');
      link3.classList.add('colorb');
      link4.classList.add('colorc');
      logo.classList.add('colorz');
   }
}