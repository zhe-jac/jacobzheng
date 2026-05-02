const intro = document.getElementById('intro') as HTMLElement;
const app   = document.getElementById('app')   as HTMLElement;

const introSound = document.getElementById('intro-sound') as HTMLAudioElement | null;

intro.addEventListener('click', () => {
  if (introSound) introSound.play().catch(() => {});
  intro.classList.add('fade-out');
  app.classList.add('visible');
  setTimeout(() => intro.remove(), 500);
}, { once: true });

const sections = document.querySelectorAll<HTMLElement>('.info-section');
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

function pulseElement(el: HTMLElement): void {
  el.classList.remove('focus-pulse');
  void el.offsetWidth;
  el.classList.add('focus-pulse');
  el.addEventListener('animationend', () => el.classList.remove('focus-pulse'), { once: true });
}

const leftCol  = document.querySelector('.left-col')  as HTMLElement;
const rightCol = document.querySelector('.right-col') as HTMLElement;
let blurTimer: ReturnType<typeof setTimeout>;

function blurCol(toBlur: HTMLElement, toClear: HTMLElement): void {
  toClear.classList.remove('col-blur');
  toBlur.classList.add('col-blur');
  clearTimeout(blurTimer);
  blurTimer = setTimeout(() => toBlur.classList.remove('col-blur'), 1500);
}

document.getElementById('btn-about')!.addEventListener('click', () => {
  const aboutSection = document.getElementById('about')!;
  aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const aboutCard = aboutSection.querySelector('.about-card') as HTMLElement;
  aboutCard.classList.remove('text-highlight');
  void aboutCard.offsetWidth;
  aboutCard.classList.add('text-highlight');
  aboutCard.addEventListener('animationend', () => aboutCard.classList.remove('text-highlight'), { once: true });

  ['university', 'interests', 'experience'].forEach((id, i) => {
    setTimeout(() => {
      const section = document.getElementById(id)!;
      section.classList.remove('section-highlight');
      void section.offsetWidth;
      section.classList.add('section-highlight');
      section.addEventListener('animationend', () => section.classList.remove('section-highlight'), { once: true });
    }, 200 + i * 150);
  });

  blurCol(rightCol, leftCol);
});

document.getElementById('btn-projects')!.addEventListener('click', () => {
  const target = document.getElementById('tandem-card')!;
  if (window.innerWidth <= 720) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  pulseElement(target);
  blurCol(leftCol, rightCol);
});

// Player sidebar drag — attach only to drag bar so iframe stays interactive
const playerSidebar = document.getElementById('player-sidebar');
const playerDragBar = document.getElementById('player-drag-bar');
if (playerSidebar && playerDragBar) {
  let dragging = false, ox = 0, oy = 0;
  playerDragBar.addEventListener('mousedown', (e) => {
    dragging = true;
    const r = playerSidebar.getBoundingClientRect();
    ox = e.clientX - r.left;
    oy = e.clientY - r.top;
    e.preventDefault();
  });
  document.addEventListener('mousemove', (e) => {
    if (!dragging) return;
    playerSidebar.style.left = (e.clientX - ox) + 'px';
    playerSidebar.style.top  = (e.clientY - oy) + 'px';
  });
  document.addEventListener('mouseup', () => { dragging = false; });
}

const tandemCard  = document.getElementById('tandem-card') as HTMLElement;
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
