


document.addEventListener("DOMContentLoaded", function() {
    var imgContainers = document.querySelectorAll(".img");

    imgContainers.forEach(function(imgContainer) {
        var gif = imgContainer.querySelector(".gif");

        // Reproducir el GIF cuando el mouse pasa sobre la imagen
        imgContainer.addEventListener("mouseenter", function() {
            gif.style.display = "block";
        });

        // Pausar el GIF cuando el mouse sale de la imagen
        imgContainer.addEventListener("mouseleave", function() {
            gif.style.display = "none";
        });
    });
});