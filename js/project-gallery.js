/* ── Imabox — JS compartido de páginas de proyecto ──
   Cada bloque actúa solo si la página tiene los elementos:
   .swipebox (lightbox), .img.video-item (video al hover),
   [data-reveal] (slider antes/después), .compare-slider (comparador). */

/* Lightbox */
$(document).ready(function () { $('.swipebox').swipebox({ useSVG: false }); });

/* Video al hover */
document.querySelectorAll('.img.video-item').forEach(function (item) {
    var video = item.querySelector('video');
    if (!video) return;
    item.addEventListener('mouseenter', function () { video.play(); });
    item.addEventListener('mouseleave', function () { video.pause(); video.currentTime = 0; });
});

/* Reveal sliders (antes/después dentro de la galería) */
document.querySelectorAll('[data-reveal]').forEach(function (wrap) {
    var before   = wrap.querySelector('.reveal-before');
    var handle   = wrap.querySelector('.reveal-handle');
    var dragging = false;

    function setPos(x) {
        var rect = wrap.getBoundingClientRect();
        var pct  = Math.max(2, Math.min(98, ((x - rect.left) / rect.width) * 100));
        before.style.clipPath = 'inset(0 ' + (100 - pct) + '% 0 0)';
        handle.style.left     = pct + '%';
    }

    handle.addEventListener('mousedown',  function (e) { dragging = true; e.preventDefault(); });
    document.addEventListener('mouseup',  function ()  { dragging = false; });
    document.addEventListener('mousemove', function (e) { if (dragging) setPos(e.clientX); });

    wrap.addEventListener('touchstart', function () { dragging = true; }, { passive: true });
    wrap.addEventListener('touchend',   function () { dragging = false; });
    wrap.addEventListener('touchmove',  function (e) {
        if (dragging) { setPos(e.touches[0].clientX); e.stopPropagation(); }
    }, { passive: true });
});

/* Compare slider (sección propia, p.ej. elbio-fernandez) */
document.querySelectorAll('.compare-slider').forEach(function (slider) {
    var before = slider.querySelector('.cs-before');
    var handle = slider.querySelector('.cs-handle');
    var active = false;

    function setPos(clientX) {
        var rect = slider.getBoundingClientRect();
        var pct = Math.max(0, Math.min(100, (clientX - rect.left) / rect.width * 100));
        before.style.clipPath = 'inset(0 ' + (100 - pct).toFixed(2) + '% 0 0)';
        handle.style.left = pct.toFixed(2) + '%';
    }

    slider.addEventListener('mousedown', function (e) { active = true; setPos(e.clientX); e.preventDefault(); });
    window.addEventListener('mousemove', function (e) { if (active) setPos(e.clientX); });
    window.addEventListener('mouseup', function () { active = false; });

    slider.addEventListener('touchstart', function (e) { active = true; setPos(e.touches[0].clientX); }, { passive: true });
    window.addEventListener('touchmove', function (e) { if (active) setPos(e.touches[0].clientX); }, { passive: true });
    window.addEventListener('touchend', function () { active = false; });
});
