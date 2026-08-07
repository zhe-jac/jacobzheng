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

const isMobile = (): boolean => window.innerWidth <= 720;

function blurCol(toBlur: HTMLElement, toClear: HTMLElement): void {
  // one stacked column on phones — blurring the part you just scrolled past
  // only gets in the way
  if (isMobile()) return;
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
  const list = document.getElementById('projects-list')!;
  // on phones the button acts as navigation: jump to the projects heading
  if (isMobile()) {
    document.getElementById('projects')!.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  pulseElement(list);
  blurCol(leftCol, rightCol);
});

document.querySelectorAll<HTMLElement>('.project-card').forEach((card) => {
  const video = card.querySelector('video');
  if (video) {
    card.addEventListener('mouseenter', () => {
      card.classList.add('played');
      video.play().catch(() => {});
    });
    card.addEventListener('mouseleave', () => video.pause());

    video.addEventListener('click', (e) => {
      e.stopPropagation();
      if (video.paused) {
        video.play().catch(() => {});
        video.removeAttribute('controls');
      } else {
        video.pause();
        video.setAttribute('controls', '');
      }
    });
  }

});
