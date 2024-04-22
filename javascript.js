document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("retangulo1").addEventListener("click", function() {
        exibirImagem("Captura de tela 2024-03-03 175332.png", "transferir (6).jpeg");
    });
    document.getElementById("retangulo2").addEventListener("click", function() {
        exibirImagem("Captura de tela 2024-03-03 175919.png", "transferir (7).jpeg");
    });
    document.getElementById("retangulo3").addEventListener("click", function() {
        exibirImagem("Captura de tela 2024-03-03 180419.png", "Taylor swift reputation wallpaper.jpeg");
    });
    document.getElementById("retangulo6").addEventListener("click", function() {
        exibirImagem("Captura de tela 2024-03-03 181900.png", "Lana Del Rey Wallpaper.jpeg");
    });
    document.getElementById("retangulo5").addEventListener("click", function() {
        exibirImagem("Captura de tela 2024-03-03 181449.png", "TRAVIS SCOTT.jpeg");
    });
    document.getElementById("retangulo4").addEventListener("click", function() {
        exibirImagem("Captura de tela 2024-03-03 194153.png", "Drake.jpeg");
    });

    function exibirImagem(imagemArtista, imagemAlbum) {
        var elementoArtista = document.querySelector(".quadradodeartista");
        if (elementoArtista) {
            elementoArtista.style.backgroundImage = "url('" + imagemArtista + "')";
        } else {
            console.error("O elemento 'quadradodeartista' não foi encontrado.");
        }

        var elementoAlbum = document.getElementById("album-image");
        if (elementoAlbum) {
            elementoAlbum.style.backgroundImage = "url('" + imagemAlbum + "')";
        } else {
            console.error("O elemento 'album-image' não foi encontrado.");
        }
    }
});
