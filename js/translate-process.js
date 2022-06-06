
document.addEventListener("DOMContentLoaded", function(e){
    let language = {
        esp: {
          
            cooperation: " Coopera con nosotros",
            stage1:" ETAPA 1",
            previous:" Información previa",
            stage2:" ETAPA 2",
            paragraph:" Para realizar un presupuesto lo más ajustado posible necesitamos información sobre el proyecto, ya sean planos, bocetos, modelos 3D, número de imágenes a realizar, plazo de entrega, etc. No es necesario que el proyecto esté perfectamente definido para generar el mismo.",
            paragraph2:" La mayoría de estudios elaboran sus propios modelos 3D. De ser proporcionado por el cliente, el mismo debe ajsutarse a nuestros estándares. Si dispone de sus propio modelos 3D, envíenoslo previamente y realizaremos las comprobaciones necesarias. En caso de no contar con un modelo, nosotros procedemos a modelarlo.",
            stage3:" ETAPA 3",
            model:" Modelo 3D",
            beginning:" Comienzo",
            paragraph3:" Aceptado el presupuesto, y tras el pago del acopio, iniciamos el encargo. Durante el proceso de modelado se envían imágenes del progreso para confirmar que todo es correcto.",
            stage4:" ETAPA 4",
            whiterender:" Render blanco - Punto de vista",
            paragraph4:" Una vez confirmado que el modelo es correcto, los puntos de vistas seran chequeados con ustedes. Propondremos puntos de vista, sugiriendo la mejor seleccion. La intención es generar un hilo conductor entre imágenes para narrar de la mejor manera posible la propuesta. Estas imágenes muestran unicamente la espacialidad sin materiales (renders blancos). Se realiza una confirmación de los puntos de vista sobre los cual se trabajará mas adelante.",
            stage5:" ETAPA 5",
            overview:" Primera revisión",
            paragraph5:" En esta etapa se presenta la visualización completa, con materiales aplicados, luz y atmósferas elegidas. El cliente tendrá la posibilidad de hacer una lista de comentarios. La misma deberá ser muy precisa. Los comentarios referidos a luces, atmósfera, equipamiento, decoración y vegetación tienen que aparecer, todo lo que no sea comentado será entendido como aprobado por defecto.",
            stage6:" ETAPA 6",
            overview2:" Segunda revisión",
            paragraph6:" En esta etapa levantamos las observaciones realizadas en la etapa anterior, para asegurar que las expectativas fueron cumplidas. Este es el último momento antes de renderizar la imagen en alta resolución.",
            stage7:" ETAPA FINAL",
            delivery:" Entrega y pago",
            paragraph7:" Una vez realizado el pago, enviamos las imágenes en alta resolución (formato tiff-jpg) y sin marcas de agua. El tamaño es suficiente para cartelerías, impresión, folletos, catálogos.",
            studentcoop:' "Esta cooperación no aplica para estudiantes de fin de carrera"',
            download: " Descargar el siguiente documento para conocer los procesos de trabajos para estudiante de fin de carrera",
            english: " Versión en inglés",
            spanish: " Versión en español",

        }
    };
    //define language via window hash
    if (window.location.hash === "#esp") {
        
        //process
        
        document.getElementById("cooperation-translate").textContent = language.esp.cooperation;
        document.getElementById("stage1").textContent = language.esp.stage1;
        document.getElementById("stage2").textContent = language.esp.stage2;
        document.getElementById("previous-info").textContent = language.esp.previous;
        document.getElementById("paragraph-stage1").textContent = language.esp.paragraph;
        document.getElementById("paragraph-stage2").textContent = language.esp.paragraph2;
        document.getElementById("stage3").textContent = language.esp.stage3;
        document.getElementById("model-info").textContent = language.esp.model;
        document.getElementById("beginning-info").textContent = language.esp.beginning;
        document.getElementById("paragraph-stage3").textContent = language.esp.paragraph3;
        document.getElementById("stage4").textContent = language.esp.stage4;
        document.getElementById("whiterender-info").textContent = language.esp.whiterender;
        document.getElementById("paragraph-stage4").textContent = language.esp.paragraph4;
        document.getElementById("stage5").textContent = language.esp.stage5;
        document.getElementById("overview-info").textContent = language.esp.overview;
        document.getElementById("paragraph-stage5").textContent = language.esp.paragraph5;
        document.getElementById("stage6").textContent = language.esp.stage6;
        document.getElementById("overview2-info").textContent = language.esp.overview2;
        document.getElementById("paragraph-stage6").textContent = language.esp.paragraph6;
        document.getElementById("stage7").textContent = language.esp.stage7;
        document.getElementById("delivery-info").textContent = language.esp.delivery;
        document.getElementById("paragraph-stage7").textContent = language.esp.paragraph7;
        document.getElementById("studentcooperation").textContent = language.esp.studentcoop;
        document.getElementById("downloaddocument").textContent = language.esp.download;
        document.getElementById("englishversion").textContent = language.esp.english;
        document.getElementById("españolversion").textContent = language.esp.spanish;

        


    }   
    
 
});

