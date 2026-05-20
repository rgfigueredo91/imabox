function timedRefresh() { setTimeout("location.reload(true);", 600); }

document.addEventListener("DOMContentLoaded", function () {
    var esp = {
        heroTag:    "Agencia creativa · Arquitectura &amp; Real Estate",
        heroH1a:    "Revelamos el futuro",
        heroH1b:    "antes de que ocurra.",
        heroSub:    "Somos arquitectos. Nos encargamos de la imagen completa de tu proyecto — desde la identidad hasta el día que se vende la última unidad. Todo lo visual, todo integrado, todo nuestro.",

        acc0Title:  "Visualización 3D",
        acc0H3:     "Visualización 3D",
        acc0P:      "Imágenes fotorrealistas, animaciones, recorridos virtuales y experiencias 360° que hacen que tu proyecto se sienta real antes de ser construido.",

        acc1Title:  "Marca e Identidad",
        acc1H3:     "Marca e Identidad",
        acc1P:      "Sistemas de identidad visual pensados para arquitectura y real estate — desde el logo hasta el despliegue completo de marca.",

        acc2Title:  "Fotografía y Drone",
        acc2H3:     "Fotografía y Drone",
        acc2P:      "Fotografía arquitectónica y de lifestyle que comunica la sensación de un espacio, no solo su forma.",

        acc3Title:  "Cine y Movimiento",
        acc3H3:     "Cine y Movimiento",
        acc3P:      "Videos y animaciones cinematográficas que cuentan la historia de tu proyecto desde el concepto hasta la entrega.",

        acc4Title:  "Plataforma de Ventas",
        acc4H3:     "Plataforma de Ventas",
        acc4P:      "Showrooms virtuales, visores 3D y masterplans que permiten a los clientes explorar tu proyecto a su ritmo.",

        revealLeft: "Croquis",
        revealRight:"Visión",

        procTag:    "Proceso",
        procH2:     "No necesitás un proyecto completamente definido.",
        procSub:    "Trabajamos desde los primeros bocetos — sumando valor en cada etapa del proceso de diseño arquitectónico.",

        step1H4:    "Concepto",
        step1P:     "Entendemos el proyecto: ubicación, programa, mercado. Definimos qué quiere comunicar y a quién.",
        step2H4:    "Identidad",
        step2P:     "Desarrollamos la marca del edificio: nombre, logo, paleta, tipografía. El ADN visual de todo.",
        step3H4:    "Visualización",
        step3P:     "Imágenes, videos y cinemagraphs. Los visuales que hacen real al proyecto antes de que exista.",
        step4H4:    "Herramientas",
        step4P:     "Showroom virtual, tour 360 y material de venta. El ecosistema digital completo del proyecto.",
        step5H4:    "Lanzamiento",
        step5P:     "Activamos el contenido, publicamos en portales y redes. El proyecto sale al mercado listo para vender.",

        ctaTag:     "Hablemos",
        ctaH2a:     "Tu proyecto empieza",
        ctaH2b:     "una conversación.",
        ctaP:       "Contanos en qué etapa está y en 24 horas te contamos cómo lo encaramos.",
        btnWrite:   "Escribirnos",
        btnMeeting: "Agendar reunión",

        footerP1:   "Agencia creativa · Arquitectura &amp; Real Estate — Montevideo, Uruguay",
        footerP2:   "© 2025 Imabox. Todos los derechos reservados.",
    };

    if (window.location.hash !== "#esp") return;

    function t(id, html) {
        var el = document.getElementById(id);
        if (el) el.innerHTML = html;
    }

    t("srv-hero-tag",    esp.heroTag);
    t("srv-hero-h1a",   esp.heroH1a);
    t("srv-hero-h1b",   esp.heroH1b);
    t("srv-hero-sub",   esp.heroSub);

    t("acc0-title",     esp.acc0Title);
    t("acc0-h3",        esp.acc0H3);
    t("acc0-p",         esp.acc0P);
    t("acc1-title",     esp.acc1Title);
    t("acc1-h3",        esp.acc1H3);
    t("acc1-p",         esp.acc1P);
    t("acc2-title",     esp.acc2Title);
    t("acc2-h3",        esp.acc2H3);
    t("acc2-p",         esp.acc2P);
    t("acc3-title",     esp.acc3Title);
    t("acc3-h3",        esp.acc3H3);
    t("acc3-p",         esp.acc3P);
    t("acc4-title",     esp.acc4Title);
    t("acc4-h3",        esp.acc4H3);
    t("acc4-p",         esp.acc4P);

    t("reveal-label-left",  esp.revealLeft);
    t("reveal-label-right", esp.revealRight);

    t("proc-tag",       esp.procTag);
    t("proc-h2",        esp.procH2);
    t("proc-sub",       esp.procSub);
    t("step1-h4",       esp.step1H4);
    t("step1-p",        esp.step1P);
    t("step2-h4",       esp.step2H4);
    t("step2-p",        esp.step2P);
    t("step3-h4",       esp.step3H4);
    t("step3-p",        esp.step3P);
    t("step4-h4",       esp.step4H4);
    t("step4-p",        esp.step4P);
    t("step5-h4",       esp.step5H4);
    t("step5-p",        esp.step5P);

    t("cta-tag",        esp.ctaTag);
    t("cta-h2a",        esp.ctaH2a);
    t("cta-h2b",        esp.ctaH2b);
    t("cta-p",          esp.ctaP);
    t("cta-btn-write",  esp.btnWrite);
    t("cta-btn-meeting",esp.btnMeeting);

    t("footer-p1",      esp.footerP1);
    t("footer-p2",      esp.footerP2);

    document.querySelectorAll("a[href='projects.html']").forEach(function(el){ el.href = "projects.html#esp"; });
    document.querySelectorAll("a[href='about.html']").forEach(function(el){ el.href = "about.html#esp"; });
    document.querySelectorAll("a[href='contact.html']").forEach(function(el){ el.href = "contact.html#esp"; });
});
