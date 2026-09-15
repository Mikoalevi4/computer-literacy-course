// Animate score counter + progress bar when #scoring section enters viewport

const totalEl = document.getElementById('totalDisplay');
const barEl = document.getElementById('progressBar');
let animated = false;

function animateScore() {
  if (animated) return;
  animated = true;

  let count = 0;
  const target = 100;
  const duration = 1200;
  const step = target / (duration / 16);

  const timer = setInterval(() => {
    count = Math.min(count + step, target);
    totalEl.textContent = Math.round(count);
    barEl.style.width = Math.round(count) + '%';
    if (count >= target) clearInterval(timer);
  }, 16);
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) animateScore(); });
}, { threshold: 0.3 });

const scoringSection = document.getElementById('scoring');
if (scoringSection) observer.observe(scoringSection);
