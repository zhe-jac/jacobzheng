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

// Column blur helpers
const leftCol = document.querySelector('.left-col');
const rightCol = document.querySelector('.right-col');
let blurTimer;

function blurCol(toBlur, toClear) {
  toClear.classList.remove('col-blur');
  toBlur.classList.add('col-blur');
  clearTimeout(blurTimer);
  blurTimer = setTimeout(() => toBlur.classList.remove('col-blur'), 1500);
}

// "about me" button — scroll + highlight text + cascade sections + blur projects
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

  blurCol(rightCol, leftCol);
});

// "projects" button — pulse highlight on Tandem card + blur about me
document.getElementById('btn-projects').addEventListener('click', () => {
  const target = document.getElementById('tandem-card');
  if (window.innerWidth <= 720) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  target.classList.remove('focus-pulse');
  void target.offsetWidth;
  target.classList.add('focus-pulse');
  target.addEventListener('animationend', () => target.classList.remove('focus-pulse'), { once: true });

  blurCol(leftCol, rightCol);
});

// Player sidebar drag
const playerSidebar = document.getElementById('player-sidebar');
const playerHandle  = playerSidebar ? playerSidebar.querySelector('.player-handle') : null;
if (playerSidebar && playerHandle) {
  let dragging = false, ox = 0, oy = 0;
  playerHandle.addEventListener('mousedown', (e) => {
    dragging = true;
    const r = playerSidebar.getBoundingClientRect();
    ox = e.clientX - r.left;
    oy = e.clientY - r.top;
    playerHandle.style.cursor = 'grabbing';
    e.preventDefault();
  });
  document.addEventListener('mousemove', (e) => {
    if (!dragging) return;
    playerSidebar.style.left = (e.clientX - ox) + 'px';
    playerSidebar.style.top  = (e.clientY - oy) + 'px';
  });
  document.addEventListener('mouseup', () => {
    dragging = false;
    playerHandle.style.cursor = 'grab';
  });
}

// Tandem: play on hover (remember position), click to pause/play + scrub
const tandemCard = document.getElementById('tandem-card');
const tandemVideo = tandemCard.querySelector('video');
if (tandemVideo) {
  tandemCard.addEventListener('mouseenter', () => {
    tandemCard.classList.add('played');
    tandemVideo.play().catch(() => {});
  });
  tandemCard.addEventListener('mouseleave', () => tandemVideo.pause());

  tandemVideo.addEventListener('click', (e) => {
    e.stopPropagation();
    if (tandemVideo.paused) {
      tandemVideo.play().catch(() => {});
      tandemVideo.removeAttribute('controls');
    } else {
      tandemVideo.pause();
      tandemVideo.setAttribute('controls', '');
    }
  });
}
