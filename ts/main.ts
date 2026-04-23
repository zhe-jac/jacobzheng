const intro = document.getElementById('intro') as HTMLElement;
const app   = document.getElementById('app')   as HTMLElement;
const nav   = document.getElementById('nav')   as HTMLElement;

// Intro: animation runs ~0.95s, hold, then fade out
const HOLD_MS = 2300;
const FADE_MS = 500;

setTimeout(() => {
  intro.classList.add('fade-out');
  app.classList.add('visible');
  setTimeout(() => intro.remove(), FADE_MS);
}, HOLD_MS);

// Nav: go solid when user scrolls past the hero
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 80);
}, { passive: true });

// Scroll-reveal each section
const sections = document.querySelectorAll<HTMLElement>('.row-section');

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
