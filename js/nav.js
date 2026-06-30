/**
 * Nav.js — Hamburger toggle + active section tracking
 * + brand hide on scroll + navbar light/dark adaptation
 */
function initNavMenu() {
  const burger = document.querySelector('.hamburger');
  const menu = document.querySelector('.nav-menu1');
  const brand = document.getElementById('brand');
  const navbar = document.getElementById('navbar');

  if (!burger || !menu || burger.dataset.navBound) return;
  burger.dataset.navBound = 'true';

  // Toggle menu on hamburger click
  burger.addEventListener('click', () => {
    menu.classList.toggle('open');
    burger.classList.toggle('open');
  });

  // Close menu when a link is clicked
  menu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      burger.classList.remove('open');
    });
  });

  // Track active section on scroll (single-page)
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  function updateActiveSection() {
    let current = '';
    const scrollY = window.scrollY + 120; // offset for navbar height
    let currentIsLight = false;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        current = section.getAttribute('id');
        currentIsLight = section.classList.contains('section-light');
      }
    });

    // Update active nav link
    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href').slice(1); // remove #
      if (href === current) {
        link.classList.add('active');
      }
    });

    // Show brand only on home section, hide on all others
    if (brand) {
      if (current === 'home') {
        brand.classList.remove('hidden');
      } else {
        brand.classList.add('hidden');
      }
    }

    // Toggle navbar light/dark
    if (navbar) {
      navbar.classList.toggle('is-light', currentIsLight);
    }
  }

  window.addEventListener('scroll', updateActiveSection, { passive: true });
  window.addEventListener('resize', updateActiveSection, { passive: true });
  updateActiveSection();
}

window.initNavMenu = initNavMenu;
document.addEventListener('DOMContentLoaded', initNavMenu);
