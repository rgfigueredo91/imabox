/* ── SCROLL entre secciones ── */
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

window.addEventListener('keydown', (e) => {
    if (window.innerWidth <= 900) return;
    if (e.key === 'ArrowDown' || e.key === 'PageDown') { e.preventDefault(); goToSection(currentIndex + 1); }
    if (e.key === 'ArrowUp'   || e.key === 'PageUp')   { e.preventDefault(); goToSection(currentIndex - 1); }
});

spDots.forEach(d => d.addEventListener('click', () => goToSection(+d.dataset.section)));

/* ── Sync dot en scroll mobile ── */
if (window.innerWidth <= 900) {
    const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                const idx = sections.indexOf(e.target);
                if (idx !== -1) {
                    currentIndex = idx;
                    spDots.forEach((d, i) => d.classList.toggle('active', i === idx));
                }
            }
        });
    }, { threshold: 0.5 });
    sections.forEach(s => io.observe(s));
}

/* ── TABS (sección hero) ── */
const tabBtns   = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = +btn.dataset.tab;
        tabBtns.forEach(b => b.classList.toggle('active', b === btn));
        tabPanels.forEach((p, i) => p.classList.toggle('active', i === target));
    });
});


/* ── ANIMACIONES (intersection observer) ── */
const animEls = document.querySelectorAll('.anim');
const ioAnim = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            ioAnim.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });
animEls.forEach(el => ioAnim.observe(el));
