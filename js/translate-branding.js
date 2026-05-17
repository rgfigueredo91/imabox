function timedRefresh() { setTimeout("location.reload(true);", 600); }

document.addEventListener("DOMContentLoaded", function () {
    var esp = {
        heroTag:    "Identidad Visual",
        heroH1:     "Marca total para proyectos que <em>se venden.</em>",
        heroSub:    "Cada proyecto tiene una historia antes de tener una pared. Nosotros la construimos desde el nombre hasta la última pieza de comunicación.",

        footerP1:   "Agencia creativa · Arquitectura &amp; Real Estate — Montevideo, Uruguay",
        footerP2:   "© 2025 Imabox. Todos los derechos reservados.",
    };

    if (window.location.hash === "#esp") {
        function t(id, html) {
            var el = document.getElementById(id);
            if (el) el.innerHTML = html;
        }
        t("brd-hero-tag",  esp.heroTag);
        t("brd-hero-h1",   esp.heroH1);
        t("brd-hero-sub",  esp.heroSub);
        t("footer-p1",     esp.footerP1);
        t("footer-p2",     esp.footerP2);

        document.querySelectorAll("a[href='services.html']").forEach(function(el){ el.href = "services.html#esp"; });
        document.querySelectorAll("a[href='https://imabox.uy/about.html']").forEach(function(el){ el.href = "about.html#esp"; });
        document.querySelectorAll("a[href='https://imabox.uy/contact.html']").forEach(function(el){ el.href = "contact.html#esp"; });
    }
});
