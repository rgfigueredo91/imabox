function timedRefresh() { setTimeout("location.reload(true);", 600); }

document.addEventListener("DOMContentLoaded", function () {
    var esp = {
        heroTag:        "Agencia creativa · Arquitectura &amp; Real Estate",
        heroH1a:        "Revelamos el futuro",
        heroH1b:        "antes de que ocurra.",
        heroSub:        "Somos arquitectos. Nos encargamos de la marca total de tu proyecto — desde la identidad hasta el día que se vende la última unidad. Todo lo visual, todo integrado, todo nuestro.",
        btnVerServicios:"Ver servicios",
        btnHablemos:    "Hablemos",

        difEyebrow:     "Por qué somos distintos",
        difH2:          "No somos solo un estudio de visualización.",
        difP:           "Entendemos el espacio antes de que exista. Eso cambia todo lo que producimos — desde la primera imagen hasta la campaña de lanzamiento.",
        pillar1H3:      "Somos arquitectos",
        pillar1P:       "Cada imagen es una decisión de diseño. Entendemos la escala, la luz, la materialidad — y cuando el proyecto todavía no está del todo definido, lo completamos.",
        pillar2H3:      "Desde el día cero",
        pillar2P:       "Trabajamos cuando el proyecto todavía es una idea en papel. Ayudamos a definir el nombre, la identidad visual, el posicionamiento — todo antes de que la obra empiece.",
        pillar3H3:      "Todo lo visual, todo integrado",
        pillar3P:       "Marca, imágenes, video, cinemagraphs, showroom virtual, tour 360, redes sociales, material para inversores. Un solo equipo que mantiene coherencia en cada pieza.",

        srvHeader:      "Todo lo que necesita un proyecto para venderse",
        srvHeaderSub:   "La marca total de un proyecto. Todo esto convive bajo una misma dirección creativa — para que cada pieza cuente la misma historia.",
        srv1Badge:      "Marca",
        srv1H3:         "Identidad visual del proyecto",
        srv1P:          "Nombre, logo, paleta, tipografía, brand guidelines. La marca del proyecto antes de que se construya — para que cada pieza comunique lo mismo.",
        srv2Badge:      "Visualización",
        srv2H3:         "Imágenes fotorrealistas",
        srv2P:          "Exteriores, interiores, amenidades y accesos. Imágenes que hacen que alguien que no sabe leer planos entienda exactamente dónde va a vivir.",
        srv3Badge:      "Visualización",
        srv3H3:         "Video y cinemagraphs",
        srv3P:          "Videos de concepto, fly-throughs, timelapses de obra. Cinemagraphs: imágenes fijas con movimiento sutil — el formato con mayor engagement en redes.",
        srv4Badge:      "Herramientas de venta",
        srv4H3:         "Showroom virtual interactivo",
        srv4P:          "Recorrido digital del proyecto, planta por planta. Disponibilidad en vivo, calculadora de préstamo, formulario de leads y analítica incluida.",
        srv5Badge:      "Diseño",
        srv5H3:         "Diseño de interiores",
        srv5P:          "Propuesta de materialidad, layout y ambientación. Imágenes conceptuales para mostrar cómo se puede vivir el espacio antes de que exista.",
        srv6Badge:      "Contenido",
        srv6H3:         "Contenido para redes",
        srv6P:          "Posts, carruseles, reels y historias alineados con la identidad del proyecto. Estrategia pensada para atraer compradores, no solo seguidores.",
        srv7Badge:      "Herramientas de venta",
        srv7H3:         "Maquetas interactivas",
        srv7P:          "Masterplans 3D interactivos para que los compradores exploren el desarrollo — unidades, vistas, disponibilidad — desde cualquier dispositivo.",

        procTag:        "Proceso",
        procH2:         "Así trabajamos",
        procSub:        "Cada proyecto es distinto, pero el camino siempre empieza en el mismo lugar: antes de que haya algo que mostrar.",
        step1H4:        "Concepto",
        step1P:         "Entendemos el proyecto: ubicación, programa, mercado. Definimos qué quiere comunicar y a quién.",
        step2H4:        "Identidad",
        step2P:         "Desarrollamos la marca del edificio: nombre, logo, paleta, tipografía. El ADN visual de todo.",
        step3H4:        "Visualización",
        step3P:         "Imágenes, videos y cinemagraphs. Las imágenes que hacen real al proyecto antes de que exista.",
        step4H4:        "Herramientas",
        step4P:         "Showroom virtual, tour 360 y material de venta. El ecosistema digital completo del proyecto.",
        step5H4:        "Lanzamiento",
        step5P:         "Activamos el contenido, publicamos en portales y redes. El proyecto sale al mercado listo para vender.",

        modTag:         "Inversión",
        modH2a:         "El trabajo se estructura",
        modH2b:         "en dos momentos.",
        modIntro:       "No cobramos por imagen suelta ni por hora. Estructuramos el trabajo como lo que es: un proyecto con inicio, producción y vida en el mercado.",
        modInsight:     "El costo del proyecto se amortiza en la primera unidad vendida. A partir de ahí, todo lo que generamos es rentabilidad para tu proyecto.",
        mod1H3:         "Producción del proyecto",
        mod1P:          "Todo el material visual definido al inicio: identidad de marca, imágenes, video, showroom virtual, tour 360, material para inversores. Se acuerda una vez, se paga por etapas. Sin sorpresas.",
        mod1Li1:        "Alcance cerrado desde el arranque",
        mod1Li2:        "Revisiones incluidas en el proceso",
        mod1Li3:        "El material queda en propiedad del cliente",
        mod2H3:         "Acompañamiento mensual",
        mod2P:          "Una vez lanzado el proyecto, el material necesita vida: contenido nuevo, actualizaciones de disponibilidad, redes activas, reportes de leads. Un equipo dedicado sin tener que volver a explicar el proyecto.",
        mod2Li1:        "Continuidad sobre lo que ya existe",
        mod2Li2:        "Escala según la etapa del proyecto",
        mod2Li3:        "Se puede sumar desde el día uno o después del lanzamiento",

        ctaTag:         "Hablemos",
        ctaH2a:         "Tu proyecto empieza",
        ctaH2b:         "una conversación.",
        ctaP:           "Contanos en qué etapa está y en 24 horas te contamos cómo lo encaramos.",
        btnWrite:       "Escribirnos",
        btnMeeting:     "Agendar reunión",

        footerP1:       "Agencia creativa · Arquitectura &amp; Real Estate — Montevideo, Uruguay",
        footerP2:       "© 2025 Imabox. Todos los derechos reservados.",
    };

    if (window.location.hash === "#esp") {
        function t(id, html) {
            var el = document.getElementById(id);
            if (el) el.innerHTML = html;
        }
        t("srv-hero-tag",     esp.heroTag);
        t("srv-hero-h1a",    esp.heroH1a);
        t("srv-hero-h1b",    esp.heroH1b);
        t("srv-hero-sub",    esp.heroSub);
        t("srv-btn-ver",     esp.btnVerServicios);
        t("srv-btn-hablemos",esp.btnHablemos);

        t("dif-eyebrow",     esp.difEyebrow);
        t("dif-h2",          esp.difH2);
        t("dif-p",           esp.difP);
        t("pillar1-h3",      esp.pillar1H3);
        t("pillar1-p",       esp.pillar1P);
        t("pillar2-h3",      esp.pillar2H3);
        t("pillar2-p",       esp.pillar2P);
        t("pillar3-h3",      esp.pillar3H3);
        t("pillar3-p",       esp.pillar3P);

        t("srvsec-h2",       esp.srvHeader);
        t("srvsec-sub",      esp.srvHeaderSub);
        t("srv1-badge",      esp.srv1Badge);
        t("srv1-h3",         esp.srv1H3);
        t("srv1-p",          esp.srv1P);
        t("srv2-badge",      esp.srv2Badge);
        t("srv2-h3",         esp.srv2H3);
        t("srv2-p",          esp.srv2P);
        t("srv3-badge",      esp.srv3Badge);
        t("srv3-h3",         esp.srv3H3);
        t("srv3-p",          esp.srv3P);
        t("srv4-badge",      esp.srv4Badge);
        t("srv4-h3",         esp.srv4H3);
        t("srv4-p",          esp.srv4P);
        t("srv5-badge",      esp.srv5Badge);
        t("srv5-h3",         esp.srv5H3);
        t("srv5-p",          esp.srv5P);
        t("srv6-badge",      esp.srv6Badge);
        t("srv6-h3",         esp.srv6H3);
        t("srv6-p",          esp.srv6P);
        t("srv7-badge",      esp.srv7Badge);
        t("srv7-h3",         esp.srv7H3);
        t("srv7-p",          esp.srv7P);

        t("proc-tag",        esp.procTag);
        t("proc-h2",         esp.procH2);
        t("proc-sub",        esp.procSub);
        t("step1-h4",        esp.step1H4);
        t("step1-p",         esp.step1P);
        t("step2-h4",        esp.step2H4);
        t("step2-p",         esp.step2P);
        t("step3-h4",        esp.step3H4);
        t("step3-p",         esp.step3P);
        t("step4-h4",        esp.step4H4);
        t("step4-p",         esp.step4P);
        t("step5-h4",        esp.step5H4);
        t("step5-p",         esp.step5P);

        t("mod-tag",         esp.modTag);
        t("mod-h2a",         esp.modH2a);
        t("mod-h2b",         esp.modH2b);
        t("mod-intro",       esp.modIntro);
        t("mod-insight",     esp.modInsight);
        t("mod1-h3",         esp.mod1H3);
        t("mod1-p",          esp.mod1P);
        t("mod1-li1",        esp.mod1Li1);
        t("mod1-li2",        esp.mod1Li2);
        t("mod1-li3",        esp.mod1Li3);
        t("mod2-h3",         esp.mod2H3);
        t("mod2-p",          esp.mod2P);
        t("mod2-li1",        esp.mod2Li1);
        t("mod2-li2",        esp.mod2Li2);
        t("mod2-li3",        esp.mod2Li3);

        t("cta-tag",         esp.ctaTag);
        t("cta-h2a",         esp.ctaH2a);
        t("cta-h2b",         esp.ctaH2b);
        t("cta-p",           esp.ctaP);
        t("cta-btn-write",   esp.btnWrite);
        t("cta-btn-meeting", esp.btnMeeting);

        t("footer-p1",       esp.footerP1);
        t("footer-p2",       esp.footerP2);

        // keep #esp on nav links
        document.querySelectorAll("a[href='services.html']").forEach(function(el){ el.href = "services.html#esp"; });
        document.querySelectorAll("a[href='https://imabox.uy/about.html']").forEach(function(el){ el.href = "about.html#esp"; });
        document.querySelectorAll("a[href='https://imabox.uy/contact.html']").forEach(function(el){ el.href = "contact.html#esp"; });
        document.querySelectorAll("a[href='branding.html']").forEach(function(el){ el.href = "branding.html#esp"; });
        document.querySelectorAll("a[href='works.html']").forEach(function(el){ el.href = "works.html#esp"; });
        document.querySelectorAll("a[href='films.html']").forEach(function(el){ el.href = "films.html#esp"; });
        document.querySelectorAll("a[href='showroom.html']").forEach(function(el){ el.href = "showroom.html#esp"; });
        document.querySelectorAll("a[href='masterplanes.html']").forEach(function(el){ el.href = "masterplanes.html#esp"; });
    }
});
