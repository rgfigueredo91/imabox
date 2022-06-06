document.addEventListener("DOMContentLoaded", function(e){
    let language = {
        esp: {
            clientes: "Clientes",
            thanks: " Gracias",
            sofia: " Arquitecta Sofía Gallo Fassi",
            paragraphsofia: " Excelente trabajo! Siempre predispuestos y abiertos a lo que queríamos transmitir, además de entregar antes de la fecha acordada.",
            paragraphrodrigo: " Excelente trabajo, entendieron al toque el proyecto y la materialidad buscada, y por más de estar contra reloj , sacaron una imagen espectacular, de muy buena calidad. Estoy más que  agradecido con ellos. Los recomiendo a full, arriba gurisada.",
            rodrigo:" Arquitecto Rodrigo Mariñelarena",
            claudia:" Arquitecta Claudia Curbelo",
            paragraphclaudia:" Muy buen trabajo! Excelente predisposición en todo momento. Entrega en tiempo y forma.",
            soledad:" Arquitecta Soledad Añón",
            paragraphsoledad: " El profesionalismo y la seriedad con la que trabajan se refleja en cada uno de sus productos que demuestran ser excelentes visualizaciones arquitectónicas, logrando una atmósfera tal que traspasa el papel o la pantalla. Los recomiendo!",
            guillermo: " Arquitecto Guillermo Fernandez",
            paragraphguillermo: " Excelente trabajo, supieron interpretar lo que precisaba. Trabajo muy profesional y a tiempo, muy satisfecho con el resultado!",
            luciana: " Arquitecta Luciana Cano",
            paragraphluciana: " Quedamos muy conformes con el trabajo realizado! Siempre abiertos a lo que queríamos transmitir.",
            santiago: " Ingeniero Santiago Castro",
            paragraphsantiago: " Muy buen servicio, mucho mejor que otros que pagué. Los renders lucen fantásticos, siguiendo mis requerimientos. Trabajaron de manera profesional y entregaron en tiempo y forma",
            juan: " Arquitecto Juan Montans",
            paragraphjuan: " Quedamos muy conformes con el trabajo de visualización, que transmitió el espacio a construir a la perfección. Seguiremos trabajando con Imago para futuras visualizaciones!",
            ximena: " Arquitecta Ximena Mattiauda",
            paragraphximena: " Un trabajo excelente, los chicos se preocuparon por entender el proyecto para poder transmitirlo. Cumpliendo con la entrega antes de lo acordado acordado. Estamos muy agradecidas, de seguro volveríamos a elegir trabajar con ellos.",
            tatiana: " Arquitecta Tatiana Fabres",
            paragraphtatiana: " Nos entregaron un resultado impecable y antes de lo solicitado, entendiendo claramente la esencia del proyecto, unos genios! Sin dudas volveremos a trabajar con ellos en la próxima oportunidad.",
            lorena: " Arquitecta Lorena Silva",
            paragraphLorena: " Excelente trabajo! Recomiendo, son puntuales en entregas de fechas, están predispuestos para evacuar dudas en todo momento, y lograron transmitir el espíritu del proyecto!",
            maria: " Arquitecta María Gonzalez",
            paragraphmaria: " Estuvieron atentos a todos los detalles del proyecto, cumplieron con los plazos y los resultados fueron excelentes!",
            gustavo: " Arquitecto Gustavo Gonzalez",
            paragraphgustavo: " Lograron trasmitir 100% el concepto que quería mostrar! Estuvimos en constante comunicación, mostrándome  pruebas y viendo avances. Excelente calidad de trabajo y en tiempo acordado. Quede muy satisfecho! Muy recomendable!"
        }
    };
    //define language via window hash
    if (window.location.hash === "#esp") {
        
        //vr
        
        document.getElementById("clientesid").textContent = language.esp.clientes;
        document.getElementById("thankstrans").textContent = language.esp.thanks;
        document.getElementById("sofiagallofassi").textContent = language.esp.sofia;
        document.getElementById("paragraphidsofia").textContent = language.esp.paragraphsofia;
        document.getElementById("marinalarena").textContent = language.esp.rodrigo;
        document.getElementById("paragraphirodrigo").textContent = language.esp.paragraphrodrigo;
        document.getElementById("claudiaid").textContent = language.esp.claudia;
        document.getElementById("paragraphiclauida").textContent = language.esp.paragraphclaudia;
        document.getElementById("soledadid").textContent = language.esp.soledad;
        document.getElementById("paragraphisoledad").textContent = language.esp.paragraphsoledad;
        document.getElementById("guillermoid").textContent = language.esp.guillermo;
        document.getElementById("paragraphiguillermo").textContent = language.esp.paragraphguillermo;
        document.getElementById("lucianaid").textContent = language.esp.luciana;
        document.getElementById("paragraphiluciana").textContent = language.esp.paragraphluciana;
        document.getElementById("santaigoid").textContent = language.esp.santiago;
        document.getElementById("paragraphisantiago").textContent = language.esp.paragraphsantiago;
        document.getElementById("juanid").textContent = language.esp.juan;
        document.getElementById("paragraphijuan").textContent = language.esp.paragraphjuan;
        document.getElementById("ximenaid").textContent = language.esp.ximena;
        document.getElementById("paragraphiximena").textContent = language.esp.paragraphximena;
        document.getElementById("tatianaid").textContent = language.esp.tatiana;
        document.getElementById("paragraphitatiana").textContent = language.esp.paragraphtatiana;
        document.getElementById("lorenaid").textContent = language.esp.lorena;
        document.getElementById("paragraphilorena").textContent = language.esp.paragraphLorena;
        document.getElementById("mariagonid").textContent = language.esp.maria;
        document.getElementById("paragraphimaria").textContent = language.esp.paragraphmaria;
        document.getElementById("gustavoid").textContent = language.esp.gustavo;
        document.getElementById("paragraphgustavo").textContent = language.esp.paragraphgustavo;

    }   
    
 
});