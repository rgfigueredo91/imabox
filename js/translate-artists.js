document.addEventListener("DOMContentLoaded", function(e){
    let language = {
        esp: {
            
            title: " Vamos a conocernos",
            paragraph: " Muchos viajes y extensa experiencia recibida en todo el mundo, formaron nuestra visión de la arquitectura, dándonos una dósis de inspiración que nos puso en marcha. Fundamos Imago Rendering Studio con pasión para evocar emociones y crear mucho valor.",
            title2: " Nuestro viaje",
            title3: " FUNDADOR - ARQUITECTO - ARTISTA 3D",
            paragraph2: "Mi forma de pasar el tiempo siempre fue estar conectado con el arte, la arquitectura, la pintura, la tecnología y la fotografía. Transformándose luego en una pasión por crear imágenes y animaciones en la computadora. Tengo fervor por el diseño y la creación."  ,   
            phototittle: " Fotos de viaje",

        }
    };


    //define language via window hash
    if (window.location.hash === "#esp") {
        
        //artists
        
        document.getElementById("title-translate").textContent = language.esp.title;
        document.getElementById("paragraph-translate").textContent = language.esp.paragraph;
        document.getElementById("title2-translate").textContent = language.esp.title2;
        document.getElementById("title-translate-artist").textContent = language.esp.title3;
        document.getElementById("paragraph2-translate").textContent = language.esp.paragraph2;
        document.getElementById("photos-tittle-translate").textContent = language.esp.phototittle;

        
        
        
    }   
    
 
});