
document.addEventListener("DOMContentLoaded", function(e){
    let language = {
        esp: {
            stillImages: "Imágenes",
            virtual: "Tour Virtual",
            about: "Nosotros",
            contact: "Contacto",
            portfolio: "Vis Arq",
            visualization: "360º",
            rights: `© 2022 Imabox "Unboxing Possible Futures". Todos los derechos reservados`,

        }
    };
    
    //define language via window hash

    if (window.location.hash === "#esp") {


        //MENU PRINCIPAL
        
        //desktop
        document.getElementById("link-font").textContent = language.esp.stillImages;
        document.getElementById("link-font-about").textContent = language.esp.about;
        document.getElementById("link-font-Virtual").textContent = language.esp.virtual;
        document.getElementById("link-font-contact").textContent = language.esp.contact;
        document.getElementById("link-font-360").textContent = language.esp.visualization;
        document.getElementById("rights-reserved").textContent = language.esp.rights;
        
        //desktop mantener el #eng cuando hago click en los links 
        document.getElementById("link-font").href = "works.html#esp";
        document.getElementById("link-font-contact").href = "contact.html#esp";
        document.getElementById("link-font-about").href = "about.html#esp";
        document.getElementById("link-font-index").href = "index.html#esp";
        document.getElementById("link-font-360").href = "360.html#esp";
        document.getElementById("link-font-Virtual").href = "vr.html#esp";
  



        
    }   

 
});


function timedRefresh() {
    setTimeout("location.reload(true);", 600);
    }


