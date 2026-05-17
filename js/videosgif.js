


document.addEventListener("DOMContentLoaded", function() {
    var imgContainers = document.querySelectorAll(".img");

    imgContainers.forEach(function(imgContainer) {
        var gif = imgContainer.querySelector(".gif");

        // Reproducir el GIF cuando el mouse pasa sobre la imagen
        imgContainer.addEventListener("mouseenter", function() {
            if (gif) gif.style.display = "block";
        });

        imgContainer.addEventListener("mouseleave", function() {
            if (gif) gif.style.display = "none";
        });
    });
});