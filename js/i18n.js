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

    function apply() {
        if (lang !== 'en') return; /* Spanish is HTML default — nothing to do */

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

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', apply);
    } else {
        apply();
    }

    /* manual switcher — called from eng/esp links */
    window.setLang = function (l) {
        localStorage.setItem('ix-lang', l);
        location.hash = (l === 'en' ? 'eng' : 'esp');
        location.reload();
    };

})();
