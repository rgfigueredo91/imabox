document.addEventListener("DOMContentLoaded", function(e){
    let language = {
        esp: {
            
            title: "  Click en las imágenes para interactuar con la experiencia",
          
            
        }
    };
    //define language via window hash
    if (window.location.hash === "#esp") {
        
        //vr
        
        document.getElementById("titlesvr").textContent = language.esp.title;
     
    
        
        
        
    }   
    
 
});