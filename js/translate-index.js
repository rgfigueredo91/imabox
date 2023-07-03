document.addEventListener("DOMContentLoaded", function(e){
    let language = {
        esp: {
            
            firstParagraph: "Imabox es un estudio experto en visualización arquitectónica que se especializa en fotografía, diseño gráfico y trabajos audiovisuales. Nos destacamos en capturar la belleza de las imágenes arquitectónicas a través de nuestra experiencia en geometría, textura e iluminación. Nuestro objetivo es crear experiencias visuales distintivas que muestren las fortalezas de cada proyecto.",
            iporaUnoTitle: `Parque Termal Iporá`,
            iporaUnoSubtitle: "Figarola Davila Arquitectos",
            secondParagraph: "Nos especializamos en desarrollos inmobiliarios, comercios, espacios públicos y planes urbanos, creando fotografías cautivadoras que representan el futuro. Utilizando hábilmente la luz y la textura, diseñamos experiencias visuales únicas. Con más de una década de experiencia, comprendemos las necesidades específicas de nuestros clientes, y nuestra pasión por este arte nos impulsa a trabajar incansablemente cada día para lograr los mejores resultados posibles.",
            secondParagraphDos: "¿PODEMOS SER PARTE DE DESCUBRIR EL FUTURO JUNTOS?",
            arecoTitle: "Jardines de Areco",   
            arecoSubtitle: 'Gomez Platero Arquitectura y Urbanismo', 

        }
    };


    //define language via window hash
    if (window.location.hash === "#esp") {
        
        //artists
        
        document.getElementById("translateFirstParagraph").textContent = language.esp.firstParagraph;

        document.getElementById("iporaUnoTitle").textContent = language.esp.iporaUnoTitle;
        document.getElementById("iporaUnoSubtitle").textContent = language.esp.iporaUnoSubtitle;
        document.getElementById("iporaDosTitle").textContent = language.esp.iporaUnoTitle;
        document.getElementById("iporaDosSubtitle").textContent = language.esp.iporaUnoSubtitle;
        document.getElementById("iporaTresTitle").textContent = language.esp.iporaUnoTitle;
        document.getElementById("iporaTresSubtitle").textContent = language.esp.iporaUnoSubtitle;
        document.getElementById("iporaCuatroTitle").textContent = language.esp.iporaUnoTitle;
        document.getElementById("iporaCuatroSubtitle").textContent = language.esp.iporaUnoSubtitle;




        document.getElementById("translateSecondParagraph").textContent = language.esp.secondParagraph;
        document.getElementById("translateSecondParagraphDos").textContent = language.esp.secondParagraphDos;


        document.getElementById("arecoUnoTitle").textContent = language.esp.arecoTitle;
        document.getElementById("arecoUnoSubtitle").textContent = language.esp.arecoSubtitle;
        
        document.getElementById("arecoDosTitle").textContent = language.esp.arecoTitle;
        document.getElementById("arecoDosSubtitle").textContent = language.esp.arecoSubtitle;

        
        document.getElementById("arecoTresTitle").textContent = language.esp.arecoTitle;
        document.getElementById("arecoTresSubtitle").textContent = language.esp.arecoSubtitle;
     

        
        
        
    }   
    
 
});