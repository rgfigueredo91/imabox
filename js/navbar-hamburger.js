(function () {
    var navbar = document.getElementById('navbar');
    var toggle = document.getElementById('navToggle');
    if (!navbar || !toggle) return;

    function openMenu() {
        navbar.classList.add('open');
        toggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        navbar.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    toggle.addEventListener('click', function () {
        navbar.classList.contains('open') ? closeMenu() : openMenu();
    });

    document.querySelectorAll('.nav-links a').forEach(function (link) {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeMenu();
    });

    if (typeof timedRefresh === 'undefined') {
        window.timedRefresh = function () {};
    }
})();
