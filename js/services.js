/* ── SECCIONES para scroll ── */
const sections   = [...document.querySelectorAll('section')];
const spDots     = [...document.querySelectorAll('.sp-dot')];
let currentIndex = 0;
let scrollLocked = false;

function goToSection(idx) {
    if (idx < 0 || idx >= sections.length || scrollLocked) return;
    scrollLocked = true;
    currentIndex = idx;
    sections[idx].scrollIntoView({ behavior: 'smooth' });
    spDots.forEach((d, i) => d.classList.toggle('active', i === idx));
    setTimeout(() => { scrollLocked = false; }, 850);
}

/* ── SCROLL CON RUEDA: 1 tick = 1 sección ── */
window.addEventListener('wheel', (e) => {
    if (window.innerWidth <= 900) return;
    e.preventDefault();
    if (scrollLocked) return;
    /* Normalizar deltaY según deltaMode (pixels / lines / pages) */
    let delta = e.deltaY;
    if (e.deltaMode === 1) delta *= 24;
    if (e.deltaMode === 2) delta *= 600;
    if (Math.abs(delta) < 3) return; /* ignorar micro-movimientos de trackpad */
    goToSection(currentIndex + (delta > 0 ? 1 : -1));
}, { passive: false });

/* ── TECLADO ── */
window.addEventListener('keydown', (e) => {
    if (window.innerWidth <= 900) return;
    if (e.key === 'ArrowDown' || e.key === 'PageDown') { e.preventDefault(); goToSection(currentIndex + 1); }
    if (e.key === 'ArrowUp'   || e.key === 'PageUp')   { e.preventDefault(); goToSection(currentIndex - 1); }
});

/* ── DOTS click ── */
spDots.forEach(d => d.addEventListener('click', () => goToSection(+d.dataset.section)));

/* ── ANCHOR links ── */
document.querySelectorAll('a[href^="#sec-"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        const idx = +a.getAttribute('href').replace('#sec-', '');
        goToSection(idx);
    });
});

/* ── INTERSECTION OBSERVER para animaciones ── */
const animEls = document.querySelectorAll('.anim, .anim-left, .anim-right, .anim-scale');
const ioAnim = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            ioAnim.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });
animEls.forEach(el => ioAnim.observe(el));

/* Línea del proceso */
const procesoLine = document.querySelector('.proceso-line');
const ioLine = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) { procesoLine.style.transform = 'scaleX(1)'; ioLine.unobserve(e.target); }
    });
}, { threshold: 0.3 });
if (procesoLine) ioLine.observe(procesoLine.parentElement);

/* Hero line */
const heroLine = document.querySelector('.hero-line');
if (heroLine) heroLine.classList.add('visible');

/* ── PARALLAX: glow sigue el mouse en el hero ── */
const heroGlow = document.getElementById('heroGlow');
document.addEventListener('mousemove', (e) => {
    if (!heroGlow) return;
    const pct = { x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 };
    heroGlow.style.left = `${45 + (pct.x - 50) * 0.18}%`;
    heroGlow.style.top  = `${42 + (pct.y - 50) * 0.14}%`;
});


/* ── Actualizar dot activo al hacer scroll manual (mobile) ── */
if (window.innerWidth <= 900) {
    const ioSection = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const idx = sections.indexOf(entry.target);
                if (idx !== -1) {
                    currentIndex = idx;
                    spDots.forEach((d, i) => d.classList.toggle('active', i === idx));
                }
            }
        });
    }, { threshold: 0.5 });
    sections.forEach(s => ioSection.observe(s));
}
