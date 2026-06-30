/**
 * Scroll-nav.js — Arrow key navigation between sections
 * Intercepts Up/Down arrows to jump between sections in order.
 */
(function () {
  const SECTION_IDS = ['home', 'about', 'projects', 'skills'];

  let currentIndex = 0;
  let isScrolling = false;

  function getSectionElements() {
    return SECTION_IDS.map(id => document.getElementById(id)).filter(Boolean);
  }

  function updateCurrentIndex() {
    const scrollY = window.scrollY + 120;
    const sections = getSectionElements();
    let closest = 0;
    sections.forEach((section, i) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      if (scrollY >= top && scrollY < bottom) {
        closest = i;
      }
    });
    currentIndex = closest;
  }

  function scrollToSection(index) {
    const sections = getSectionElements();
    if (index < 0 || index >= sections.length) return;
    if (isScrolling) return;

    isScrolling = true;
    currentIndex = index;
    sections[index].scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Close mobile menu if open
    const menu = document.querySelector('.nav-menu1');
    const burger = document.querySelector('.hamburger');
    if (menu && menu.classList.contains('open')) {
      menu.classList.remove('open');
      if (burger) burger.classList.remove('open');
    }

    // Debounce to prevent rapid-fire scrolls
    setTimeout(() => { isScrolling = false; }, 800);
  }

  function handleKeyDown(e) {
    if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;

    const tag = document.activeElement?.tagName?.toLowerCase();
    if (tag === 'input' || tag === 'textarea' || tag === 'select') return;

    e.preventDefault();
    updateCurrentIndex();

    if (e.key === 'ArrowDown') {
      scrollToSection(currentIndex + 1);
    } else if (e.key === 'ArrowUp') {
      scrollToSection(currentIndex - 1);
    }
  }

  function initScrollNav() {
    if (window.scrollNavInitialized) return;
    window.scrollNavInitialized = true;
    document.addEventListener('keydown', handleKeyDown);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollNav);
  } else {
    initScrollNav();
  }
  // Init on load and also after DOM changes
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollNav);
  } else {
    initScrollNav();
  }
})();
