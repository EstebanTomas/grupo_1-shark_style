window.onload = function () {
    let addButton = document.querySelector(".add-button");
    let conteiner = document.querySelector(".conteiner-add-button");

    addButton.addEventListener('click', function () {
        conteiner.innerHTML += '<input class="create-input" type="color" name="colors"></input>'
    })
}