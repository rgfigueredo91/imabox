function timedRefresh() { setTimeout("location.reload(true);", 600); }

document.addEventListener("DOMContentLoaded", function () {
    var esp = {
        heroParagraph:  "Somos una agencia creativa para arquitectura y real estate. Cada proyecto empieza con una pregunta: ¿qué tiene que sentir la gente cuando ve esto? La respuesta la construimos con imagen, marca y movimiento — haciendo que un proyecto sea deseable antes de que se ponga el primer ladrillo.",
        heroCta:        "¿Empezamos a construir juntos?",
        heroBtnCall:    "Agendar una llamada",
        heroP:          "Identidad de marca y visualización 3D — Montevideo, Uruguay.",

        hotspotLabel:   "Entrar a la piscina",

        iporaTitle:     "Parque Termal Iporá",
        iporaSubtitle:  "Figarola Davila Arquitectos",
        iporaSlide2H2:  "Parque Termal Iporá",
        iporaSlide2P:   "Piscina termal — vista interior",

        statLabel1:     "Proyectos entregados",
        statLabel2:     "Países",
        statLabel3:     "Años de experiencia",

        arecoTitle:     "Jardines de Areco",
        arecoSubtitle:  "Gomez Platero Arquitectura y Urbanismo",

        footerP1:       "Agencia creativa · Arquitectura &amp; Real Estate — Montevideo, Uruguay",
        footerP2:       "© 2025 Imabox. Todos los derechos reservados.",
    };

    if (window.location.hash !== "#esp") return;

    function t(id, html) {
        var el = document.getElementById(id);
        if (el) el.innerHTML = html;
    }

    t("translateFirstParagraph",   esp.heroParagraph);
    t("translateSecondParagraphDos", esp.heroCta);
    t("btnBookCall",               esp.heroBtnCall);
    t("idx-hero-p",                esp.heroP);

    t("hotspot-pool-label",        esp.hotspotLabel);

    t("iporaUnoTitle",             esp.iporaTitle);
    t("iporaUnoSubtitle",          esp.iporaSubtitle);
    t("ipora-slide2-h2",           esp.iporaSlide2H2);
    t("ipora-slide2-p",            esp.iporaSlide2P);

    t("stat-label-1",              esp.statLabel1);
    t("stat-label-2",              esp.statLabel2);
    t("stat-label-3",              esp.statLabel3);

    t("arecoUnoTitle",             esp.arecoTitle);
    t("arecoUnoSubtitle",          esp.arecoSubtitle);
    t("arecoDosTitle",             esp.arecoTitle);
    t("arecoDosSubtitle",          esp.arecoSubtitle);
    t("arecoTresTitle",            esp.arecoTitle);
    t("arecoTresSubtitle",         esp.arecoSubtitle);

    t("footer-p1",                 esp.footerP1);
    t("footer-p2",                 esp.footerP2);

    document.querySelectorAll("a[href='projects.html']").forEach(function(el){ el.href = "projects.html#esp"; });
    document.querySelectorAll("a[href='services.html']").forEach(function(el){ el.href = "services.html#esp"; });
    document.querySelectorAll("a[href='about.html']").forEach(function(el){ el.href = "about.html#esp"; });
    document.querySelectorAll("a[href='contact.html']").forEach(function(el){ el.href = "contact.html#esp"; });
});
