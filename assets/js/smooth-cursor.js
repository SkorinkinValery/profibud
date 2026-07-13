/* ============================================================
   Плавный кастомный курсор (Magic UI).
   Пружинная физика перенесена из макета Estate Landing.dc.html.
   Активируется только при pointer: fine (мышь).
   ============================================================ */
(function smoothCursor() {
  const el = document.querySelector('.smooth-cursor');
  if (!el) return;
  if (window.matchMedia && !window.matchMedia('(pointer: fine)').matches) return;

  document.documentElement.classList.add('smooth-cursor-on');

  const k = 400, c = 45, mass = 1;
  let tx = window.innerWidth / 2, ty = window.innerHeight / 2;
  let px = tx, py = ty, vx = 0, vy = 0;
  let angle = 0, targetAngle = 0, seen = false;

  window.addEventListener('mousemove', (e) => {
    tx = e.clientX; ty = e.clientY;
    if (!seen) { seen = true; px = tx; py = ty; el.style.opacity = '1'; }
  });

  let last = performance.now();
  function tick(now) {
    let dt = Math.min((now - last) / 1000, 0.033); last = now;
    const h = 1 / 240; let t = dt;
    while (t > 0) {
      const s = Math.min(h, t); t -= s;
      vx += ((-k * (px - tx) - c * vx) / mass) * s; px += vx * s;
      vy += ((-k * (py - ty) - c * vy) / mass) * s; py += vy * s;
    }
    const speed = Math.hypot(vx, vy);
    if (speed > 25) targetAngle = Math.atan2(vy, vx) * 180 / Math.PI + 90;
    let diff = ((targetAngle - angle + 540) % 360) - 180;
    angle += diff * Math.min(dt * 12, 1);
    el.style.transform = `translate(${px}px, ${py}px) translate(-50%, -50%) rotate(${angle}deg)`;
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();
