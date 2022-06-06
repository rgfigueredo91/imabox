document.addEventListener("DOMContentLoaded", function(e){
    let language = {
        esp: {
            
            button: " contáctanos",
            textarea: " escribe el cuerpo del mail aquí",
            send: " Click aquí para subir los archivos antes de enviar",
            subject: " asunto del mail",
            studio: " estudio de arquitectura, negocio, etc.",
            name: " nombre",
        }
    };
    //define language via window hash
    if (window.location.hash === "#esp") {
        
        //vr
        
        document.getElementById("buttoncontact").textContent = language.esp.button;
        document.getElementById("textareaid").placeholder = language.esp.textarea;
        document.getElementById("send").textContent = language.esp.send;
        document.getElementById("subjectid").placeholder = language.esp.subject;
        document.getElementById("studioarchid").placeholder = language.esp.studio;
        document.getElementById("nameid").placeholder = language.esp.name;
    }   
    
 
});