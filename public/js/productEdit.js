window.onload = function () {
    let addButton = document.querySelector(".add-button");
    let conteiner = document.querySelector(".conteiner-add-button");

    addButton.addEventListener('click', function () {
        alert("joya")
        conteiner.innerHTML += '<input class="create-input" type="color" name="colors"></input>'

        window.addEventListener("load", function () {


            let form = document.querySelector("form.create-form");

            let name = document.querySelector("input#name");

            let description = document.querySelector("input#description");

            let images = document.querySelector("input#images");

            var uploadFile = images.files[0];

            var expressionImage = /\.(jpg|jpeg|png|gif)$/i;

            let messageName = document.querySelector("small#messageName");

            let messageDescription = document.querySelector("small#messageDescription");




            form.addEventListener("submit", (e) => {
                if (!expressionImage.test(uploadFile.name)) {
                    e.preventDefault();
                    alert("El archivo que adjuntaste no es una imagen");
                    return false;
                }
                if (name.value == "" || name.value < 5) {
                    e.preventDefault();
                    messageName.innerHTML = "Debes escribir un nombre y debe contener más de 2 caracteres";
                    return false;
                }
                if (description.value == "" || description.value < 20) {
                    e.preventDefault();
                    messageDescription.innerHTML = "este campo no puede estar vacío y su descripción debe contener al menos 20 caracteres";
                    return false;
                }

            })
        })
    })
};
