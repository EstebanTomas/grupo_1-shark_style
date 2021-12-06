window.onload = function () {
    // Para copiar la url en el portapeles
    let follow = document.querySelector(".follow");

    follow.addEventListener('click', function () {
        let url = location.href;
        navigator.clipboard.writeText(url);
        alert('Copiado en el portapapeles "'+ url + '"')
    })

    // Para mostrar los colores en un circulo
    let colors = document.querySelectorAll('.propertyColor');
    let circles = document.querySelectorAll('.circle');
    let conteiner = document.querySelectorAll('.conteiner-color');
    let color;
    let circle;

    for ( let i = 0; i < conteiner.length; i++) {
        color = colors[i].innerText;
        circle = circles[i];
        circle.style.backgroundColor = color;
    }

}