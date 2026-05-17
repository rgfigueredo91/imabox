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

/* ── SCROLL CON RUEDA ── */
window.addEventListener('wheel', (e) => {
    if (window.innerWidth <= 900) return;
    e.preventDefault();
    if (scrollLocked) return;
    let delta = e.deltaY;
    if (e.deltaMode === 1) delta *= 24;
    if (e.deltaMode === 2) delta *= 600;
    if (Math.abs(delta) < 3) return;
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

/* ── INTERSECTION OBSERVER para animaciones ── */
const animEls = document.querySelectorAll('.anim, .anim-left, .anim-right');
const ioAnim = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            ioAnim.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });
animEls.forEach(el => ioAnim.observe(el));

/* Hero line */
const heroLine = document.querySelector('.hero-line');
if (heroLine) heroLine.classList.add('visible');

/* ── PARALLAX: glow sigue el mouse ── */
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
