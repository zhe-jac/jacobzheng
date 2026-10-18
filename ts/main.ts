const intro = document.getElementById('intro') as HTMLElement;
const app   = document.getElementById('app')   as HTMLElement;

// spotify playlist — built through Spotify's iFrame API so the intro click can
// start playback (Flight's Booked is the playlist's first track)
interface SpotifyController { play(): void; }
interface SpotifyIFrameAPI {
  createController(
    el: HTMLElement,
    options: { uri: string; width: string; height: number },
    callback: (controller: SpotifyController) => void,
  ): void;
}

let spotify: SpotifyController | null = null;
let wantsPlay = false;

(window as unknown as { onSpotifyIframeApiReady: (api: SpotifyIFrameAPI) => void })
  .onSpotifyIframeApiReady = (api) => {
    api.createController(
      document.getElementById('spotify-embed')!,
      { uri: 'spotify:playlist:0QBLgVEs2uO8aGpFoneoiD', width: '100%', height: 80 },
      (controller) => {
        spotify = controller;
        // clicked through the intro before the player finished loading
        if (wantsPlay) controller.play();
      },
    );
  };

intro.addEventListener('click', () => {
  wantsPlay = true;
  spotify?.play();
  intro.classList.add('fade-out');
  app.classList.add('visible');
  setTimeout(() => intro.remove(), 500);
}, { once: true });

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
