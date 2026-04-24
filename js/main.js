"use strict";

const intro = document.getElementById('intro');
const app   = document.getElementById('app');

// Intro timing
setTimeout(() => {
  intro.classList.add('fade-out');
  app.classList.add('visible');
  setTimeout(() => intro.remove(), 500);
}, 2300);

// Scroll-reveal for left column sections
const sections = document.querySelectorAll('.info-section');
const revealObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        revealObs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1 }
);
sections.forEach((el) => revealObs.observe(el));

// "about me" button — scroll to about + pulse highlight
document.getElementById('btn-about').addEventListener('click', () => {
  const target = document.getElementById('about');
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  target.classList.remove('focus-pulse');
  void target.offsetWidth; // reflow to restart animation
  target.classList.add('focus-pulse');
  target.addEventListener('animationend', () => target.classList.remove('focus-pulse'), { once: true });
});

// "projects" button — pulse highlight on Tandem card
document.getElementById('btn-projects').addEventListener('click', () => {
  const target = document.getElementById('tandem-card');
  // On mobile, scroll into view
  if (window.innerWidth <= 720) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  target.classList.remove('focus-pulse');
  void target.offsetWidth;
  target.classList.add('focus-pulse');
  target.addEventListener('animationend', () => target.classList.remove('focus-pulse'), { once: true });
});

// Tandem: play video on hover
const tandemCard = document.getElementById('tandem-card');
const tandemVideo = tandemCard.querySelector('video');
if (tandemVideo) {
  tandemCard.addEventListener('mouseenter', () => tandemVideo.play().catch(() => {}));
  tandemCard.addEventListener('mouseleave', () => { tandemVideo.pause(); tandemVideo.currentTime = 0; });
}
