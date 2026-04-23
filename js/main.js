"use strict";
const intro = document.getElementById('intro');
const app   = document.getElementById('app');
const nav   = document.getElementById('nav');

const HOLD_MS = 2300;
const FADE_MS = 500;

setTimeout(() => {
  intro.classList.add('fade-out');
  app.classList.add('visible');
  setTimeout(() => intro.remove(), FADE_MS);
}, HOLD_MS);

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

const navLinks   = document.querySelectorAll('.nav-links a');
const sectionEls = document.querySelectorAll('section[id]');

const activeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  },
  { rootMargin: '-40% 0px -40% 0px' }
);

sectionEls.forEach((el) => activeObserver.observe(el));

const sections = document.querySelectorAll('.row-section');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

sections.forEach((el) => revealObserver.observe(el));
