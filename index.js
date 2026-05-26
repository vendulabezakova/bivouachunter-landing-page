// Testimonial slider
let current = 0;
const track = document.getElementById('t-track');
const dots = document.querySelectorAll('.t-dot');
function goTo(idx) {
  current = idx;
  track.style.transform = `translateX(-${idx * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === idx));
}
// Auto-advance
setInterval(() => goTo((current + 1) % 3), 5000);


function makeQR(id) {
  const qr = document.getElementById(id);
  if (!qr) return;
  const size = 7;
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement('div');
    cell.className = 'qr-cell';
    const row = Math.floor(i / size);
    const col = i % size;
    const inCorner =
      (row < 3 && col < 3) || (row < 3 && col > 3) ||
      (row > 3 && col < 3);
    const dark = inCorner ? true : Math.random() > 0.5;
    cell.style.background = dark ? '#111' : '#fff';
    qr.appendChild(cell);
  }
}
makeQR('qr-box-ios');
makeQR('qr-box-android');