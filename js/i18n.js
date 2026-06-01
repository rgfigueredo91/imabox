/* ── Imabox i18n — auto-detect + data-en attribute switching ── */
(function () {

    function detectLang() {
        if (location.hash === '#eng') { localStorage.setItem('ix-lang', 'en'); }
        if (location.hash === '#esp') { localStorage.setItem('ix-lang', 'es'); }
        var stored = localStorage.getItem('ix-lang');
        if (stored) return stored;
        var nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
        return nav.startsWith('es') ? 'es' : 'en';
    }

    var lang = detectLang();
    window.IX_LANG  = lang;

    /* typewriter phrases — read by index.html before typewriter starts */
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
        markActiveLang();

        /* restaurar scroll en páginas normales (no index/snap) tras cambiar idioma */
        var savedScroll = sessionStorage.getItem('ix-scroll');
        if (savedScroll !== null) {
            sessionStorage.removeItem('ix-scroll');
            var y = parseInt(savedScroll, 10);
            if (y > 0) { window.scrollTo(0, y); }
        }

        if (lang === 'en') {
            /* static text / html */
            document.querySelectorAll('[data-en]').forEach(function (el) {
                el.innerHTML = el.getAttribute('data-en');
            });

            /* input placeholders */
            document.querySelectorAll('[data-en-ph]').forEach(function (el) {
                el.placeholder = el.getAttribute('data-en-ph');
            });

            /* select option labels */
            document.querySelectorAll('select[data-en-opts]').forEach(function (sel) {
                try {
                    var opts = JSON.parse(sel.getAttribute('data-en-opts'));
                    Array.from(sel.options).forEach(function (opt, i) {
                        if (opts[i] !== undefined) opt.textContent = opts[i];
                    });
                } catch (e) {}
            });

            /* page <title> */
            var t = document.querySelector('title');
            if (t && t.getAttribute('data-en')) document.title = t.getAttribute('data-en');
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', apply);
    } else {
        apply();
    }

    /* manual switcher — called from eng/esp links.
       No cambia el pathname (se queda en la misma página) y, en el index,
       recuerda la sección actual para no volver al hero al recargar. */
    window.setLang = function (l) {
        if (l === window.IX_LANG) return;
        localStorage.setItem('ix-lang', l);
        if (typeof window.snapCurrent === 'number' && window.snapCurrent > 0) {
            sessionStorage.setItem('ix-section', window.snapCurrent);
        } else {
            sessionStorage.setItem('ix-scroll', String(window.scrollY || 0));
        }
        location.reload();
    };

})();
