/* ============================================================
   Verticales de redes dentro de la galería

   Se reproducen solos, en loop y mudos, pero SOLO mientras están a
   la vista: si arrancaran todos al cargar, la página pediría los seis
   videos de una y se comería el ancho de banda de las imágenes.
   Por eso van con preload="none" y el src se pide recién cuando el
   video entra en pantalla.

   Con prefers-reduced-motion no se reproducen: queda el póster.
   ============================================================ */
(function () {
    var videos = document.querySelectorAll('.g-video video');
    if (!videos.length) return;

    var quieto = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (quieto) return;

    /* en redes lentas o con ahorro de datos tampoco: el póster alcanza */
    var con = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (con && (con.saveData || /(^|-)2g$/.test(con.effectiveType || ''))) return;

    if (!('IntersectionObserver' in window)) return;

    var io = new IntersectionObserver(function (entradas) {
        entradas.forEach(function (e) {
            var v = e.target;
            if (e.isIntersecting) {
                /* preload="none" no baja nada hasta que se llama a load() */
                if (v.preload === 'none') { v.preload = 'auto'; v.load(); }
                var p = v.play();
                if (p && p.catch) p.catch(function () { /* si lo bloquean, queda el póster */ });
            } else if (!v.paused) {
                v.pause();
            }
        });
    }, { threshold: 0.25 });

    Array.prototype.forEach.call(videos, function (v) { io.observe(v); });
})();
