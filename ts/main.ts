const intro = document.getElementById('intro') as HTMLElement;
const app   = document.getElementById('app')   as HTMLElement;

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
  const target = document.getElementById('about')!;
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  pulseElement(target);
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
