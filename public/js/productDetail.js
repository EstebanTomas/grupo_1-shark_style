window.onload =  function () {
    let image = document.querySelectorAll('#p1')
    let imgPrincipal = document.querySelector('img .img-principalPicture')
    image.addEventListener('click', function (event) {
        event.forEach(e => {
            alert('estoy funcionando') 
        });
    });
}