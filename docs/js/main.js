// main.js — pas de tracking, pas de bloat

document.querySelectorAll('a[target="_blank"]').forEach(a => {
  if (!a.rel.includes('noopener')) {
    a.rel = (a.rel ? a.rel + ' ' : '') + 'noopener noreferrer';
  }
});

const pulse = document.querySelector('.pulse-card');
if (pulse) {
  pulse.addEventListener('mouseenter', () => {
    pulse.style.boxShadow = '0 0 30px rgba(0,255,200,0.35)';
  });
  pulse.addEventListener('mouseleave', () => {
    pulse.style.boxShadow = '';
  });
}
