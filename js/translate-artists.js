document.addEventListener("DOMContentLoaded", function(e){
    let language = {
        esp: {
            
            title: " Vamos a conocernos",
            paragraph: `¡Hola!, déjame contarte algunas cosas sobre nosotros. Después de graduarnos como arquitectos encontramos en la Visualización Arquitectónica, la unión perfecta entre nuestra profesión y nuestra pasión. Viajamos por todo el mundo durante casi un año y obtuvimos una amplia experiencia que moldeó nuestra visión de la arquitectura, nos dio una gran dosis de inspiración y nos llevó a la acción. Fundamos IMABOX con pasión por evocar emociones y crear mucho valor. Nuestro pequeño estudio está ubicado en Montevideo, Uruguay y estamos especializados en el desarrollo de Renders Arquitectónicos, Arquitectura 3D, Imágenes Gráficas por Computadora (CGIs) y cualquier tipo de Visualización Arquitectónica en el campo de la arquitectura, el urbanismo y el paisajismo.`,
            title2: " Nuestro viaje",
            title3: " FUNDADOR - ARQUITECTO - ARTISTA 3D SR.",
            title4: " FUNDADOR - ARQUITECTO - ARTISTA 3D SR.",
            paragraph2: "Mi forma de pasar el tiempo siempre fue estar conectado con el arte, la arquitectura, la pintura, la tecnología y la fotografía. Transformándose luego en una pasión por crear imágenes y animaciones en la computadora. Tengo fervor por el diseño y la creación en todos sus aspectos."  ,   
            paragraph3: 'Buenas!, desde niño disfrutaba mucho el dibujar y aprender del campo de las artes gráficas. En mi tiempo libre me gusta practicar deporte, especialmente baloncesto y no puedo comenzar mi día sin el "mate" (bebida de Infusión originaria de Sur América)'  , 

        }
    };


    //define language via window hash
    if (window.location.hash === "#esp") {
        
        //artists
        
        document.getElementById("title-translate").textContent = language.esp.title;
        document.getElementById("paragraph-translate").textContent = language.esp.paragraph;
        document.getElementById("title2-translate").textContent = language.esp.title2;
        document.getElementById("title-translate-artist").textContent = language.esp.title3;
        document.getElementById("title-translate-artist2").textContent = language.esp.title4;
        document.getElementById("paragraph2-translate").textContent = language.esp.paragraph2;
        document.getElementById("paragraph3-translate").textContent = language.esp.paragraph3;
     

        
        
        
    }   
    
 
});