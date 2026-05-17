document.addEventListener("DOMContentLoaded", function(e){
    let language = {
        esp: {
            
            firstParagraph: "Somos una agencia creativa. Nos especializamos en identidad de marca, fotografía y producción audiovisual para proyectos de arquitectura y real estate. Lo que nos mueve es construir la experiencia de un proyecto antes de que exista — porque una buena imagen no solo muestra lo que va a ser, sino que hace que la gente lo quiera.",
            iporaUnoTitle: `Parque Termal Iporá`,
            iporaUnoSubtitle: "Figarola Davila Arquitectos",
            secondParagraph: "Trabajamos con desarrolladores y estudios de arquitectura en proyectos de real estate, espacios comerciales y urbanos. Cada trabajo empieza con una pregunta simple: ¿qué tiene que sentir la gente cuando ve esto? La respuesta la construimos con imagen, marca y movimiento — los tres lenguajes con los que hacemos que un proyecto exista antes de existir.",
            secondParagraphDos: "¿Empezamos a construir juntos?",
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