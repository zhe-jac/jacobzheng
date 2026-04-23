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
  nav.classList.toggle('scrolled', window.scrollY > 80);
}, { passive: true });

const sections = document.querySelectorAll('.row-section');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

sections.forEach((el) => observer.observe(el));
