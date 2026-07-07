/* ── Imabox i18n ──
   El idioma vive en la URL: las páginas /en/ son estáticas (generadas desde
   los atributos data-en) y no cargan este script. Este archivo corre solo en
   las páginas en español y:
   1. redirige a /en/ si el usuario eligió inglés antes (localStorage) y la
      página declara una alternativa hreflang="en"
   2. mantiene el swap client-side viejo como fallback para páginas con
      data-en que todavía no tienen versión /en/
   Nota: ya no se auto-cambia por navigator.language — eso hacía que Google
   (que renderiza con en-US) indexara el sitio en inglés sobre las URLs ES. */
(function () {

    if (location.hash === '#eng') { localStorage.setItem('ix-lang', 'en'); }
    if (location.hash === '#esp') { localStorage.setItem('ix-lang', 'es'); }
    var stored = localStorage.getItem('ix-lang');

    var enAlt = document.querySelector('link[rel="alternate"][hreflang="en"]');
    var hasEnPage = enAlt && enAlt.href.indexOf('/en/') !== -1;

    /* preferencia explícita de inglés + existe página /en/ -> ir ahí */
    if (stored === 'en' && hasEnPage) {
        location.replace(enAlt.href);
        return;
    }

    var lang = stored === 'en' ? 'en' : 'es';
    window.IX_LANG = lang;

    /* typewriter phrases — read by index before typewriter starts */
    window.IX_PHRASES = lang === 'en'
        ? ['We make it real.', 'We make it visible.', 'We make it desirable.', 'We make it sellable.']
        : ['Lo hacemos real.', 'Lo hacemos visible.', 'Lo hacemos deseable.', 'Lo hacemos vendible.'];

    function markActiveLang() {
        document.querySelectorAll('.nav-lang a').forEach(function (a) {
            var href  = a.getAttribute('href') || '';
            var isEng = href.indexOf('eng') !== -1;
            var on    = (lang === 'en' && isEng) || (lang === 'es' && !isEng);
            a.classList.toggle('lang-active', on);
        });
    }

    function apply() {
        document.documentElement.lang = lang;
        markActiveLang();

        /* restaurar scroll en páginas normales (no index/snap) tras cambiar idioma */
        var savedScroll = sessionStorage.getItem('ix-scroll');
        if (savedScroll !== null) {
            sessionStorage.removeItem('ix-scroll');
            var y = parseInt(savedScroll, 10);
            if (y > 0) { window.scrollTo(0, y); }
        }

        if (lang === 'en') {
            /* fallback legacy: swap client-side en páginas sin versión /en/ */
            document.querySelectorAll('[data-en]').forEach(function (el) {
                el.innerHTML = el.getAttribute('data-en');
            });
            document.querySelectorAll('[data-en-ph]').forEach(function (el) {
                el.placeholder = el.getAttribute('data-en-ph');
            });
            document.querySelectorAll('meta[data-en-content]').forEach(function (el) {
                el.setAttribute('content', el.getAttribute('data-en-content'));
            });
            document.querySelectorAll('select[data-en-opts]').forEach(function (sel) {
                try {
                    var opts = JSON.parse(sel.getAttribute('data-en-opts'));
                    Array.from(sel.options).forEach(function (opt, i) {
                        if (opts[i] !== undefined) opt.textContent = opts[i];
                    });
                } catch (e) {}
            });
            var t = document.querySelector('title');
            if (t && t.getAttribute('data-en')) document.title = t.getAttribute('data-en');
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', apply);
    } else {
        apply();
    }

    /* switcher manual (links eng/esp) */
    window.setLang = function (l) {
        if (l === window.IX_LANG) return;
        localStorage.setItem('ix-lang', l);
        if (l === 'en' && hasEnPage) {
            /* hay versión estática en inglés: navegar directo */
            location.href = enAlt.href;
            return;
        }
        if (typeof window.snapCurrent === 'number' && window.snapCurrent > 0) {
            sessionStorage.setItem('ix-section', window.snapCurrent);
        } else {
            sessionStorage.setItem('ix-scroll', String(window.scrollY || 0));
        }
        location.reload();
    };

})();
