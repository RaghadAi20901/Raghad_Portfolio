/**
 * Nav.js — Hamburger toggle + active section tracking
 */
function initNavMenu() {
  const burger = document.querySelector('.hamburger');
  const menu = document.querySelector('.nav-menu1');
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

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href').slice(1); // remove #
      if (href === current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveSection, { passive: true });
  updateActiveSection();
}

window.initNavMenu = initNavMenu;
document.addEventListener('DOMContentLoaded', initNavMenu);
