function timedRefresh() { setTimeout("location.reload(true);", 600); }

document.addEventListener("DOMContentLoaded", function () {
    var esp = {
        heroTag:    "Sobre nosotros",
        heroH1a:    "Somos la agencia creativa detrás",
        heroH1b:    "de la marca de tu proyecto.",

        tabBtn0:    "Nuestra historia",
        tabBtn1:    "El viaje",
        tabBtn2:    "Lo que nos mueve",

        tab0Tag:    "2018 — Montevideo",
        tab0P:      "Nos graduamos como arquitectos y desde el primer día supimos que queríamos hacer algo distinto. No construir edificios — <strong>construir la imagen que los hace deseables.</strong> En 2018 fundamos Imabox, no como un estudio de visualización, sino como una agencia creativa que se hace cargo de toda la imagen de un proyecto — desde la identidad de marca hasta el día del lanzamiento.",

        tab1Tag:    "China · Corea · Japón · Europa",
        tab1P:      "Antes de fundar Imabox viajamos casi un año por el mundo. <strong>China, Corea, Japón, Italia, Suiza, Alemania, Francia, Colombia.</strong> No como turistas — como arquitectos con los ojos muy abiertos. Eso le dio a nuestra mirada algo que no se aprende en un estudio: perspectiva real.",

        tab2Tag:    "Nuestra filosofía",
        tab2P:      "La orientación norte no vende un apartamento. <strong>El sol de la mañana entrando por la ventana mientras tomás un café, sí.</strong> Con cada imagen, cada video, cada cinemagraph, construimos la experiencia de vivir algo que todavía no existe — para que quien lo vea lo desee antes de que se ponga el primer ladrillo.",

        difEyebrow: "Por qué somos distintos",
        difH2:      "No somos solo un estudio<br>de visualización.",
        pillar1H3:  "Somos arquitectos",
        pillar1P:   "Cada imagen es una decisión de diseño. Entendemos la escala, la luz, la materialidad — y cuando el proyecto todavía no está del todo definido, lo completamos.",
        pillar2H3:  "Desde el día cero",
        pillar2P:   "Trabajamos cuando el proyecto todavía es una idea en papel. Ayudamos a definir el nombre, la identidad visual, el posicionamiento — todo antes de que la obra empiece.",
        pillar3H3:  "Todo lo visual, todo integrado",
        pillar3P:   "Marca, imágenes, video, showroom virtual, contenido para redes. Un solo equipo, una sola dirección creativa — para que cada pieza cuente la misma historia.",

        btnWrite:   "Escribirnos",

        footerP1:   "Agencia creativa · Arquitectura &amp; Real Estate — Montevideo, Uruguay",
        footerP2:   "© 2025 Imabox. Todos los derechos reservados.",
    };

    if (window.location.hash === "#esp") {
        function t(id, html) {
            var el = document.getElementById(id);
            if (el) el.innerHTML = html;
        }
        t("abt-hero-tag",  esp.heroTag);
        t("abt-hero-h1a",  esp.heroH1a);
        t("abt-hero-h1b",  esp.heroH1b);

        t("tab-btn-0",     esp.tabBtn0);
        t("tab-btn-1",     esp.tabBtn1);
        t("tab-btn-2",     esp.tabBtn2);
        t("tab0-p",        esp.tab0P);
        t("tab1-p",        esp.tab1P);
        t("tab2-p",        esp.tab2P);

        var tag0 = document.querySelector("#tab-panel-0 .tab-tag");
        var tag1 = document.querySelector("#tab-panel-1 .tab-tag");
        var tag2 = document.querySelector("#tab-panel-2 .tab-tag");
        if (tag0) tag0.textContent = esp.tab0Tag;
        if (tag1) tag1.textContent = esp.tab1Tag;
        if (tag2) tag2.textContent = esp.tab2Tag;

        t("dif-eyebrow",   esp.difEyebrow);
        t("dif-h2",        esp.difH2);
        t("pillar1-h3",    esp.pillar1H3);
        t("pillar1-p",     esp.pillar1P);
        t("pillar2-h3",    esp.pillar2H3);
        t("pillar2-p",     esp.pillar2P);
        t("pillar3-h3",    esp.pillar3H3);
        t("pillar3-p",     esp.pillar3P);

        t("abt-btn-write", esp.btnWrite);
        t("footer-p1",     esp.footerP1);
        t("footer-p2",     esp.footerP2);

        document.querySelectorAll("a[href='projects.html']").forEach(function(el){ el.href = "projects.html#esp"; });
        document.querySelectorAll("a[href='services.html']").forEach(function(el){ el.href = "services.html#esp"; });
        document.querySelectorAll("a[href='about.html']").forEach(function(el){ el.href = "about.html#esp"; });
        document.querySelectorAll("a[href='contact.html']").forEach(function(el){ el.href = "contact.html#esp"; });
    }
});
