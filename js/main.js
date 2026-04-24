"use strict";

const intro = document.getElementById('intro');
const app   = document.getElementById('app');

// Intro: click to dismiss and play sound
const introSound = document.getElementById('intro-sound');

intro.addEventListener('click', () => {
  if (introSound) introSound.play().catch(() => {});
  intro.classList.add('fade-out');
  app.classList.add('visible');
  setTimeout(() => intro.remove(), 500);
}, { once: true });

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

// "about me" button — scroll + highlight text + cascade sections
document.getElementById('btn-about').addEventListener('click', () => {
  const aboutSection = document.getElementById('about');
  aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const aboutCard = aboutSection.querySelector('.about-card');
  aboutCard.classList.remove('text-highlight');
  void aboutCard.offsetWidth;
  aboutCard.classList.add('text-highlight');
  aboutCard.addEventListener('animationend', () => aboutCard.classList.remove('text-highlight'), { once: true });

  ['university', 'interests', 'experience'].forEach((id, i) => {
    setTimeout(() => {
      const section = document.getElementById(id);
      section.classList.remove('section-highlight');
      void section.offsetWidth;
      section.classList.add('section-highlight');
      section.addEventListener('animationend', () => section.classList.remove('section-highlight'), { once: true });
    }, 200 + i * 150);
  });
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
