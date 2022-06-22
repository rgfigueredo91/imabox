



document.addEventListener("DOMContentLoaded", function(e){
    let language = {
        esp: {
            works: "#trabajos ↓",
            about: "#nosotros",
            aboutPhone: "nosotros",
            contact: "#contacto",
            contactphone: "contacto",
            portfolio: "Vis Arq",
            visualization: "360º",
            animations: "Animaciones",
            rights: `© 2022 Imabox "Unboxing Possible Futures". Todos los derechos reservados`,
            vr: " Ps R.V",

        }
    };
    //define language via window hash
    if (window.location.hash === "#esp") {


        //MENU PRINCIPAL
        
        //desktop
        document.getElementById("link-font").textContent = language.esp.works;
        document.getElementById("link-font-about").textContent = language.esp.about;
        document.getElementById("contactid").textContent = language.esp.contact;
        document.getElementById("portfolio-translate").textContent = language.esp.portfolio;
        document.getElementById("360-translate").textContent = language.esp.visualization;
        document.getElementById("rights-reserved").textContent = language.esp.rights;
        document.getElementById("vr-translate").textContent = language.esp.vr;
        document.getElementById("animation-translate").textContent = language.esp.animations;
        
        
        //phone
        document.getElementById("contact-translate-phone").textContent = language.esp.contactphone;
        document.getElementById("portfolio-translate-phone").textContent = language.esp.portfolio;
        document.getElementById("360-translate-phone").textContent = language.esp.visualization;
        document.getElementById("animation-translate-phone").textContent = language.esp.animations;
        document.getElementById("psvr-translate-phone").textContent = language.esp.vr;
        document.getElementById("artist-translate-phone").textContent = language.esp.aboutPhone;

        //desktop mantener el #eng cuando hago click en los links 

      
        document.getElementById("contactid").href = "contact.html#esp";
        document.getElementById("link-font-about").href = "about.html#esp";
        document.getElementById("portfolio-translate").href = "index.html#esp";
        document.getElementById("360-translate").href = "360.html#esp";
        document.getElementById("vr-translate").href = "vr.html#esp";
        document.getElementById("animation-translate").href = "animations.html#esp";

          //phone mantener el #eng cuando hago click en los links
      
        document.getElementById("artist-translate-phone").href = "about.html#esp";
        document.getElementById("portfolio-translate-phone").href = "index.html#esp";
        document.getElementById("360-translate-phone").href = "360.html#esp";
        document.getElementById("psvr-translate-phone").href = "vr.html#esp";
        document.getElementById("animation-translate-phone").href = "animations.html#esp";

        
    }   

 
});


function timedRefresh() {
    setTimeout("location.reload(true);", 600);
    }


