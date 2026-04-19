(function () {
  // Skip on touch devices
  if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;

  /* ── DOM setup ─────────────────────────────────────── */
  const ring = document.createElement('div');
  ring.id = 'cursor-ring';

  const arrowEl = document.createElement('div');
  arrowEl.id = 'cursor-arrow';
  ring.appendChild(arrowEl);

  document.body.appendChild(ring);
  document.body.classList.add('custom-cursor-active');

  // Keep cursor-ring as last child so it always renders above
  // any dynamically injected overlays (swipebox, modals, etc.)
  const domObserver = new MutationObserver(function () {
    if (document.body.lastChild !== ring) {
      document.body.appendChild(ring);
    }
  });
  domObserver.observe(document.body, { childList: true });

  /* ── Arrow SVGs ────────────────────────────────────── */
  const arrowSVG = {
    top:    '<svg viewBox="0 0 20 20" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="4,13 10,6 16,13"/></svg>',
    bottom: '<svg viewBox="0 0 20 20" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="4,7 10,14 16,7"/></svg>',
    left:   '<svg viewBox="0 0 20 20" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="13,4 6,10 13,16"/></svg>',
    right:  '<svg viewBox="0 0 20 20" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="7,4 14,10 7,16"/></svg>'
  };

  /* ── State ─────────────────────────────────────────── */
  const EDGE_PX   = 72;
  let currentEdge = null;   // null | 'top' | 'bottom' | 'left' | 'right'
  let currentSize = 'normal'; // 'normal' | 'edge' | 'hamburger'

  /* ── Position + edge detection ────────────────────── */
  document.addEventListener('mousemove', function (e) {
    ring.style.left = e.clientX + 'px';
    ring.style.top  = e.clientY + 'px';

    if (currentSize === 'hamburger') return;

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    let dir = null;
    if      (e.clientY < EDGE_PX)        dir = 'top';
    else if (e.clientY > vh - EDGE_PX)   dir = 'bottom';
    else if (e.clientX < EDGE_PX)        dir = 'left';
    else if (e.clientX > vw - EDGE_PX)   dir = 'right';

    currentEdge = dir;

    if (dir) {
      ring.classList.remove('size-hamburger');
      ring.classList.add('size-edge');
      arrowEl.innerHTML = arrowSVG[dir];
      currentSize = 'edge';
    } else {
      ring.classList.remove('size-edge');
      arrowEl.innerHTML = '';
      currentSize = 'normal';
    }
  });

  /* ── Click on top/bottom edge → scroll ────────────── */
  document.addEventListener('click', function (e) {
    if (!currentEdge) return;
    if (currentSize === 'hamburger') return;

    // Don't hijack clicks on interactive elements
    const tag = e.target.tagName;
    if (tag === 'A' || tag === 'BUTTON' || tag === 'INPUT') return;

    if (currentEdge === 'bottom') {
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    } else if (currentEdge === 'top') {
      window.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
    }
  });

  /* ── Hamburger / interactive-element hover ─────────── */
  function attachHoverElements() {
    const selectors = ['.hamburger', '.imabox-chat-btn'];

    selectors.forEach(function (sel) {
      const el = document.querySelector(sel);
      if (!el) return;

      el.addEventListener('mouseenter', function () {
        ring.classList.remove('size-edge');
        ring.classList.add('size-hamburger');
        arrowEl.innerHTML = '';
        currentSize = 'hamburger';
      });

      el.addEventListener('mouseleave', function () {
        ring.classList.remove('size-hamburger');
        currentSize = 'normal';
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attachHoverElements);
  } else {
    attachHoverElements();
  }

  /* ── Hide when leaving window ──────────────────────── */
  document.addEventListener('mouseleave', function () {
    ring.classList.add('hidden');
  });
  document.addEventListener('mouseenter', function () {
    ring.classList.remove('hidden');
  });

})();
