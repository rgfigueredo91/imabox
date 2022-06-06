document.addEventListener("DOMContentLoaded", function(e){
    let language = {
        esp: {
            
            title: " Cierra la brecha entre las visualizaciones 360º y la realidad virtual",
            caption: " Click en la imagen para interactuar con la experiencia",
            rgf: " R|G|F - Arquitectura",
        }
    };
    //define language via window hash
    if (window.location.hash === "#esp") {
        
        //vr
        
        document.getElementById("titlesvr").textContent = language.esp.title;
        document.getElementById("captiontitle").textContent = language.esp.caption;
        document.getElementById("rgfarchitecture").textContent = language.esp.rgf;
        
        
        
    }   
    
 
});