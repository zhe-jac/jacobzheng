const intro = document.getElementById('intro') as HTMLElement;
const app   = document.getElementById('app')   as HTMLElement;
const nav   = document.getElementById('nav')   as HTMLElement;

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

// Active nav link
const navLinks   = document.querySelectorAll<HTMLAnchorElement>('.nav-links a');
const sectionEls = document.querySelectorAll<HTMLElement>('section[id]');

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

// Scroll-reveal
const sections = document.querySelectorAll<HTMLElement>('.row-section');
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

// Project card: play demo video on hover
document.querySelectorAll<HTMLElement>('.proj-card').forEach((card) => {
  const video = card.querySelector('video');
  if (!video) return;
  card.addEventListener('mouseenter', () => video.play().catch(() => {}));
  card.addEventListener('mouseleave', () => { video.pause(); video.currentTime = 0; });
});
