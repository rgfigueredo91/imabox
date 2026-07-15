/* Traducción eng/esp para el mini-sitio personal (archivo/works.html + archivo/about.html) */
function timedRefresh() { setTimeout("location.reload(true);", 600); }

document.addEventListener("DOMContentLoaded", function () {
    var esp = {
        navWorks:   "Trabajos",
        navAbout:   "Sobre mí",

        heroTag:    "Sobre mí",
        heroH1a:    "Arquitecto, artista 3D —",
        heroH1b:    "y el código en el medio.",

        tabBtn0:    "Quién soy",
        tabBtn1:    "El viaje",
        tabBtn2:    "Lo que me mueve",

        tab0Tag:    "Montevideo, Uruguay",
        tab0P:      "Soy Rodrigo Figueredo, arquitecto y artista 3D senior. Estudié arquitectura en la Universidad de la República y hoy divido mi tiempo entre <strong>Gómez Platero</strong> — creando imágenes de concepto en el equipo 3D para algunos de los proyectos más grandes de la región — e <strong>Imabox</strong>, la agencia creativa que cofundé en 2018. Todo lo que ves en Trabajos salió de esa práctica.",

        tab1Tag:    "China · Corea · Japón · Europa",
        tab1P:      "En 2019 viajé casi un año y conocí <strong>35 países</strong> — entre ellos China, Corea, Japón y buena parte de Europa. Ver en persona los edificios y las ciudades que solo conocía de los libros cambió mi manera de entender la arquitectura, y eso se nota en mi trabajo todos los días.",

        tab2Tag:    "Oficio + código",
        tab2P:      "Siempre me moví entre el lado artístico y el técnico. Hoy eso significa combinar el trabajo 3D con <strong>código e IA</strong>: escribo mis propias herramientas en JavaScript y Python, construyo experiencias 3D para la web y uso modelos generativos todos los días. ¿El video al lado de este texto? <strong>Lo hice con IA.</strong>",

        platCap0:   "Plataforma 3D en tiempo real",
        platCap1:   "Experiencias interactivas",
        platCap2:   "Visualización 3D",

        difEyebrow: "Lo que aporto",
        difH2:      "Más que<br>un artista 3D.",
        pillar1H3:  "Arquitecto primero",
        pillar1P:   "Formado en la Universidad de la República. Encaro cada imagen como arquitecto: la escala, la luz y la materialidad van primero.",
        pillar2H3:  "Visualización y film",
        pillar2P:   "Artista 3D senior en el departamento de concept design de Gómez Platero. 3ds Max, Corona y V-Ray para imágenes; After Effects y Premiere para film; Twinmotion y Unreal para tiempo real.",
        pillar3H3:  "Código e IA",
        pillar3P:   "Construyo las herramientas con las que trabajo: este sitio, una plataforma 3D web para proyectos inmobiliarios, pipelines en Python. Desarrollo con IA todos los días — desde código asistido hasta modelos generativos de imagen y video.",

        footerP1:   "Arquitecto y Artista 3D Senior — Montevideo, Uruguay",
        footerP2:   "© 2026 Rodrigo Figueredo. Todos los derechos reservados.",
    };

    if (window.location.hash === "#esp") {
        function t(id, html) {
            var el = document.getElementById(id);
            if (el) el.innerHTML = html;
        }
        t("nav-works",     esp.navWorks);
        t("nav-about",     esp.navAbout);

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

        t("plat-cap-0",    esp.platCap0);
        t("plat-cap-1",    esp.platCap1);
        t("plat-cap-2",    esp.platCap2);

        t("dif-eyebrow",   esp.difEyebrow);
        t("dif-h2",        esp.difH2);
        t("pillar1-h3",    esp.pillar1H3);
        t("pillar1-p",     esp.pillar1P);
        t("pillar2-h3",    esp.pillar2H3);
        t("pillar2-p",     esp.pillar2P);
        t("pillar3-h3",    esp.pillar3H3);
        t("pillar3-p",     esp.pillar3P);

        t("abt-footer-p1", esp.footerP1);
        t("abt-footer-p2", esp.footerP2);

        /* mantener #esp al navegar entre páginas */
        document.querySelectorAll(".nav-links a, .nav-logo").forEach(function (el) {
            if (el.href && el.href.indexOf("#") === -1) el.href += "#esp";
        });
    }
});
