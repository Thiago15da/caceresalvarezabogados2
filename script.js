// Navbar scroll shadow effect
window.addEventListener('scroll', function () {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  nav.classList.toggle('shadow-sm', window.scrollY > 50);
});

// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
}
