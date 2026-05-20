function timedRefresh() { setTimeout("location.reload(true);", 600); }

document.addEventListener("DOMContentLoaded", function () {
    var esp = {
        heroTag:    "Sobre nosotros",
        heroH1a:    "Somos la agencia creativa detrás",
        heroH1b:    "de la marca de tu proyecto.",
        heroSub:    "Fundamos Imabox convencidos de que la imagen de un proyecto puede ser tan decisiva como el proyecto mismo — y que para hacerlo bien, hay que entender el espacio antes de mostrarlo.",

        histYear:   "2018",
        histEyebrow:"Nuestra historia",
        histH2:     "Empezamos como lo que somos: arquitectos.",
        histP1:     "Nos graduamos como arquitectos y desde el primer día supimos que queríamos hacer algo distinto. No construir edificios — construir la imagen que los hace deseables.",
        histP2:     "Antes de fundar Imabox viajamos casi un año por el mundo. <strong>China, Corea, Japón, Italia, Suiza, Alemania, Francia, Colombia.</strong> No como turistas — como arquitectos con los ojos muy abiertos. Eso le dio a nuestra mirada algo que no se aprende en un estudio: perspectiva real.",
        histP3:     "En <strong>2018 fundamos Imabox en Montevideo</strong>. No como un estudio de visualización, sino como una agencia creativa que se hace cargo de toda la imagen de un proyecto — desde la identidad de marca hasta el día del lanzamiento.",
        histP4:     "La orientación norte no vende un apartamento. <strong>El sol de la mañana entrando por la ventana mientras tomás un café, sí.</strong> Con cada imagen, cada video, cada cinemagraph, construimos la experiencia de vivir algo que todavía no existe — para que quien lo vea lo desee antes de que se ponga el primer ladrillo.",

        difEyebrow: "Por qué somos distintos",
        difH2:      "No somos solo un estudio<br>de visualización.",
        difP:       "Entendemos el espacio antes de que exista. Eso cambia todo lo que producimos — desde la primera imagen hasta la campaña de lanzamiento.",
        pillar1H3:  "Somos arquitectos",
        pillar1P:   "Cada imagen es una decisión de diseño. Entendemos la escala, la luz, la materialidad — y cuando el proyecto todavía no está del todo definido, lo completamos.",
        pillar2H3:  "Desde el día cero",
        pillar2P:   "Trabajamos cuando el proyecto todavía es una idea en papel. Ayudamos a definir el nombre, la identidad visual, el posicionamiento — todo antes de que la obra empiece.",
        pillar3H3:  "Todo lo visual, todo integrado",
        pillar3P:   "Marca, imágenes, video, cinemagraphs, showroom virtual, tour 360, redes sociales, material para inversores. Un solo equipo que mantiene coherencia en cada pieza.",

        valTag:     "Lo que nos define",
        valH2:      "No solo mostramos el espacio.<br>Lo pensamos.",
        val1H3:     "Somos arquitectos",
        val1P:      "Cada imagen es una decisión de diseño. Entendemos la escala, la luz, la materialidad — y cuando el proyecto no está del todo definido, lo completamos con criterio profesional.",
        val2H3:     "Desde el día cero del proyecto",
        val2P:      "Trabajamos antes de que haya algo que mostrar. Nombre, identidad visual, posicionamiento — todo antes de que la obra empiece. Cuanto antes entramos, mejor sale el resultado.",
        val3H3:     "La marca total, integrada",
        val3P:      "Imágenes, video, cinemagraphs, showroom virtual, contenido para redes. Un solo equipo, una sola dirección creativa — para que cada pieza cuente la misma historia.",

        ctaTag:     "Hablemos",
        ctaH2a:     "Tu proyecto empieza",
        ctaH2b:     "una conversación.",
        ctaP:       "Contanos en qué etapa está y en 24 horas te contamos cómo lo encaramos.",
        btnWrite:   "Escribirnos",
        btnMeeting: "Agendar reunión",

        footerP1:   "Agencia creativa · Arquitectura &amp; Real Estate — Montevideo, Uruguay",
        footerP2:   "© 2025 Imabox. Todos los derechos reservados.",
    };

    if (window.location.hash === "#esp") {
        function t(id, html) {
            var el = document.getElementById(id);
            if (el) el.innerHTML = html;
        }
        t("abt-hero-tag",    esp.heroTag);
        t("abt-hero-h1a",    esp.heroH1a);
        t("abt-hero-h1b",    esp.heroH1b);
        t("abt-hero-sub",    esp.heroSub);

        t("hist-year",       esp.histYear);
        t("hist-eyebrow",    esp.histEyebrow);
        t("hist-h2",         esp.histH2);
        t("hist-p1",         esp.histP1);
        t("hist-p2",         esp.histP2);
        t("hist-p3",         esp.histP3);
        t("hist-p4",         esp.histP4);

        t("dif-eyebrow",     esp.difEyebrow);
        t("dif-h2",          esp.difH2);
        t("dif-p",           esp.difP);
        t("pillar1-h3",      esp.pillar1H3);
        t("pillar1-p",       esp.pillar1P);
        t("pillar2-h3",      esp.pillar2H3);
        t("pillar2-p",       esp.pillar2P);
        t("pillar3-h3",      esp.pillar3H3);
        t("pillar3-p",       esp.pillar3P);

        t("val-tag",         esp.valTag);
        t("val-h2",          esp.valH2);
        t("val1-h3",         esp.val1H3);
        t("val1-p",          esp.val1P);
        t("val2-h3",         esp.val2H3);
        t("val2-p",          esp.val2P);
        t("val3-h3",         esp.val3H3);
        t("val3-p",          esp.val3P);

        t("abt-cta-tag",     esp.ctaTag);
        t("abt-cta-h2a",     esp.ctaH2a);
        t("abt-cta-h2b",     esp.ctaH2b);
        t("abt-cta-p",       esp.ctaP);
        t("abt-btn-write",   esp.btnWrite);
        t("abt-btn-meeting", esp.btnMeeting);

        t("footer-p1",       esp.footerP1);
        t("footer-p2",       esp.footerP2);

        document.querySelectorAll("a[href='projects.html']").forEach(function(el){ el.href = "projects.html#esp"; });
        document.querySelectorAll("a[href='services.html']").forEach(function(el){ el.href = "services.html#esp"; });
        document.querySelectorAll("a[href='about.html']").forEach(function(el){ el.href = "about.html#esp"; });
        document.querySelectorAll("a[href='contact.html']").forEach(function(el){ el.href = "contact.html#esp"; });
    }
});
