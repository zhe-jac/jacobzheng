"use strict";
const intro = document.getElementById('intro');
const app = document.getElementById('app');
let spotify = null;
let wantsPlay = false;
window
    .onSpotifyIframeApiReady = (api) => {
    api.createController(document.getElementById('spotify-embed'), { uri: 'spotify:playlist:0QBLgVEs2uO8aGpFoneoiD', width: '100%', height: 80 }, (controller) => {
        spotify = controller;
        // clicked through the intro before the player finished loading
        if (wantsPlay)
            controller.play();
    });
};
intro.addEventListener('click', () => {
    wantsPlay = true;
    spotify?.play();
    intro.classList.add('fade-out');
    app.classList.add('visible');
    setTimeout(() => intro.remove(), 500);
}, { once: true });
document.querySelectorAll('.project-card').forEach((card) => {
    const video = card.querySelector('video');
    if (video) {
        card.addEventListener('mouseenter', () => {
            card.classList.add('played');
            video.play().catch(() => { });
        });
        card.addEventListener('mouseleave', () => video.pause());
        video.addEventListener('click', (e) => {
            e.stopPropagation();
            if (video.paused) {
                video.play().catch(() => { });
                video.removeAttribute('controls');
            }
            else {
                video.pause();
                video.setAttribute('controls', '');
            }
        });
    }
});
