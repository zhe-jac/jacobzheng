const intro = document.getElementById('intro') as HTMLElement;
const app   = document.getElementById('app')   as HTMLElement;

const introSound = document.getElementById('intro-sound') as HTMLAudioElement | null;
if (introSound) {
  introSound.play().catch(() => {});
}

setTimeout(() => {
  intro.classList.add('fade-out');
  app.classList.add('visible');
  setTimeout(() => intro.remove(), 500);
}, 2300);

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
});

document.getElementById('btn-projects')!.addEventListener('click', () => {
  const target = document.getElementById('tandem-card')!;
  if (window.innerWidth <= 720) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  pulseElement(target);
});

const tandemCard  = document.getElementById('tandem-card') as HTMLElement;
const tandemVideo = tandemCard.querySelector('video');
if (tandemVideo) {
  tandemCard.addEventListener('mouseenter', () => tandemVideo.play().catch(() => {}));
  tandemCard.addEventListener('mouseleave', () => { tandemVideo.pause(); tandemVideo.currentTime = 0; });
}
