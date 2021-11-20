window.onload = function () {
    let follow = document.querySelector(".follow");

    follow.addEventListener('click', function () {
        let url = location.href;
        navigator.clipboard.writeText(url);
        alert('Copiado en el portapapeles "'+ url + '"')
    })
}