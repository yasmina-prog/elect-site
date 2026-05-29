const totalFrames = 40;
const fps = 24; // vitesse de l'animation (images/seconde)
let currentFrame = 1;

function pad(n) {
  return String(n).padStart(4, '0'); // 0001, 0002 ...
}

const img = document.getElementById('animation');

setInterval(() => {
  img.src = `frames/${pad(currentFrame)}.png`;
  currentFrame = currentFrame >= totalFrames ? 1 : currentFrame + 1;
}, 1000 / fps);