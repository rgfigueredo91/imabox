document.addEventListener("DOMContentLoaded", function(e){
    let language = {
        esp: {
            tittles: " Para quien es nuestro servicio",
            architecture: " Firmas de Arquitectura",
            students: " Estudiantes de fin de carrera",
            developers: " Desarrolladores",
            professionals: " Profesionales",
            paragraph: " Presupuestamos cada trabajo por separado. El precio para cada proyecto esta definido por su complejidad, su alcance, fechas limite, etc. De esta manera podemos asegurar la mejor calidad-precio. Para hacer un presupuesto certero, necesitamos ver el proyecto. Documentación básica sería suficiente, algunos planos, dibujos, no hay necesidad de esperar por un desarrollo completo del mismo. Necesitamos cantidad de imágenes, duración de videos, tours virtuales, dependiendo que tipo de servicio estas buscando. Si estas interesado en nuestros servicios, envíanos una solicitud y podemos cotizarte sin costo alguno.",
            imstudent: " SOY ESTUDIANTE DE FIN DE CARRERA",
            experience: " SELECCIONAR EXPERIENCIA",
            selectanoption: " Seleccionar opción",
            lightexp: " Experiencia simple",
            fullexp: " Experiencia total",
            interiorrendering: " RENDERS INTERIORES",
            scope: " Alcance",
            scope2: " Alcance",
            amountint: " Cantidad",
            exteriorrendering: " RENDERS EXTERIORES",
            amountext: " Cantidad",
            timeline: " SELECCIONAR TIEMPOS",
            rush: " Urgente (2-10 días)",
            standard: " Normal (11-30 días)",
            check: " Ver precio estimado",
            lastp: " El precio enviado es estimativo y puede variar en función de las complejidades del proyecto. Si quieres saber con mas exactitud el precio, contáctanos por privado y con gusto te aclararemos todas las dudas.",
            selectanoption2: " Seleccionar opción",
            ifYouAre: " Puedes enviarnos la información de los diferentes servicios para recibir un precio estimado en tu casilla.  Para saber un precio exacto, por favor contáctanos.",
            scopetranslate: " ALCANCE",
            amounfinal: " CANTIDAD",
            button: " Envía para chequear precios",
            name: " Nombre",
            submitforcheck: " envía para chequear precios",
            latestTrends: " Usando las últimas tendencias en el campo de la psicología de ventas y marketing, los folletos y las páginas web son un gran atractivo para que los usuarios puedan conocerte. Como desarrolladores y apasionados por el diseño en todos sus aspectos, podemos brindarte una solución creativa que atraiga la atención de los mismos, incrementando tus ventas.",
            brochure: " BROCHURES DE VENTA Y SITIOS WEB",
            movements: " La experiencia de movimientos da la posibilidad de moverte en la escena de una manera mas fluida y mirar el proyecto de varios puntos de vista. La experiencia a elegir depende mucho del tamaño del proyecto.",
            vrScope: " RV-Alcance",
            realExp: " Experiencia Real (más de 30 cámaras)",
            highExp: " Experiencia Alta (21 a 30 cámaras)",
            medExp: " Experiencia Media (11 a 20 cámaras)",
            lowExp: " Experiencia Baja (1 a 10 cámaras)",
            selectOptVR: " Seleccionar opción",
            vrtransFreedom: " Experiencia de movimientos",
            VRtransprev: "¿De los renders anteriores?",
            previousYesTranslateVR: " Sí",
            previousTranslateVR: " EXP. REALIDAD VIRTUAL",
            scoperender360: " 360-Alcance",
            amount360trans: " 360-Cantidad",
            transyes360: "Sí",
            trans360: " ¿De los renders anteriores?",
            rendering360trans: " VISUALIZACIÓN 360",
            scoperender3: " Anim-Alcance",
            animationamounttrans: " Tiempo (segundos)",
            animationrenderingtrans: " ANIMACIONES REND."

        }
    };
    //define language via window hash
    if (window.location.hash === "#esp") {
        
        //pricing
        document.getElementById("titleservicefor").textContent = language.esp.tittles;
        document.getElementById("architecture-studio").textContent = language.esp.architecture;
        document.getElementById("finalcareerstudents").textContent = language.esp.students;
        document.getElementById("developers").textContent = language.esp.developers;
        document.getElementById("professionals").textContent = language.esp.professionals;
        document.getElementById("principalparagraph").textContent = language.esp.paragraph;
        document.getElementById("imstudent").textContent = language.esp.imstudent;
        document.getElementById("selectexperiencetrans").textContent = language.esp.experience;
        document.getElementById("selectanoption").textContent = language.esp.selectanoption;
        document.getElementById("lightexperiencetransl").textContent = language.esp.lightexp;
        document.getElementById("interiorrenderingtrans").textContent = language.esp.interiorrendering;
        document.getElementById("scoperender").textContent = language.esp.scope;
        document.getElementById("scoperender2").textContent = language.esp.scope2;
        document.getElementById("interioramounttrans").textContent = language.esp.amountint;
        document.getElementById("exteriorrenderingtrans").textContent = language.esp.exteriorrendering;
        document.getElementById("exterioramounttrans").textContent = language.esp.amountext;
        document.getElementById("timelinetranslate").textContent = language.esp.timeline;
        document.getElementById("rushtranslate").textContent = language.esp.rush;
        document.getElementById("standardtranslate").textContent = language.esp.standard;
       // document.getElementById("checkpricing").textContent = language.esp.check;
        document.getElementById("lastparagraph").textContent = language.esp.lastp;
        document.getElementById("fullexperiencetransl").textContent = language.esp.fullexp;
        document.getElementById("selectanoption2").textContent = language.esp.selectanoption2;
        document.getElementById("ifYouAreId").textContent = language.esp.ifYouAre;
        document.getElementById("scoptranslate").textContent = language.esp.scopetranslate;
        document.getElementById("amounttranslate").textContent = language.esp.amounfinal;
        document.getElementById("ocultarboton").textContent = language.esp.button;
        document.getElementById("nametranslate").placeholder = language.esp.name;
     
        document.getElementById("idbutton").textContent = language.esp.submitforcheck;
        document.getElementById("latestTrends").textContent = language.esp.latestTrends;
        document.getElementById("brochure").textContent = language.esp.brochure;
        document.getElementById("freedomMovements").textContent = language.esp.movements;
        document.getElementById("vrscoperender3").textContent = language.esp.vrScope;
        document.getElementById("realtranslate").textContent = language.esp.realExp;
        document.getElementById("hightranslate").textContent = language.esp.highExp;
        document.getElementById("mediumTranslate").textContent = language.esp.medExp;
        document.getElementById("lowTranslate").textContent = language.esp.lowExp;
        document.getElementById("selectanoptionVR").textContent = language.esp.selectOptVR;
        document.getElementById("vrtransFreedom").textContent = language.esp.vrtransFreedom;
        document.getElementById("VRtransprev").textContent = language.esp.VRtransprev;
        document.getElementById("previousYesTranslateVR").textContent = language.esp.previousYesTranslateVR;
        document.getElementById("VRrenderingtrans").textContent = language.esp.previousTranslateVR;
        document.getElementById("scoperender360").textContent = language.esp.scoperender360;
        document.getElementById("amount360trans").textContent = language.esp.amount360trans;
        document.getElementById("360trans").textContent = language.esp.trans360;
        document.getElementById("previousYesTranslate").textContent = language.esp.transyes360;
        document.getElementById("rendering360trans").textContent = language.esp.rendering360trans;
        document.getElementById("scoperender3").textContent = language.esp.scoperender3;
        document.getElementById("animationamounttrans").textContent = language.esp.animationamounttrans;
        document.getElementById("animationrenderingtrans").textContent = language.esp.animationrenderingtrans;
    }   
    
 
});

