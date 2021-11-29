window.onload = function () {

    // Para mostrar los colores en un circulo
    let colors = document.querySelectorAll('.propertyColor');
    let circles = document.querySelectorAll('.circle');
    let conteiner = document.querySelectorAll('.color');
    let color;
    let circle;

    for ( let i = 0; i < conteiner.length; i++) {
        color = colors[i].innerText;
        circle = circles[i];
        circle.style.backgroundColor = color;
    }

}