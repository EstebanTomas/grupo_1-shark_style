window.onload = function () {
    let form = document.querySelector("form.main-form");
    let countryName = document.querySelector("#name");
    let countryLastName = document.querySelector("#lastName");
    let countryEmail = document.querySelector("#email");
    let countryPassword = document.querySelector("#password");
    /* Descripción
Editar
○ Nombre y apellido

■ Obligatorio.
■ Deberá tener al menos 2 caracteres.

○ Email

■ Obligatorio.
■ Deberá ser un formato de e-mail válido.
■ No puede repetirse con los e-mails ya registrados.

○ Contraseña

■ Obligatoria.
■ Deberá tener al menos 8 caracteres.
■ (Opcional) → Deberá tener letras mayúsculas, minúsculas, un
número y un carácter especial. */
    countryName.addEventListener("mouseover", () => {

    })
    countryLastName.addEventListener("")

    form.addEventListener("submit", (event) => {
        if (countryName.value == "") {
            event.preventDefault();
        } else if (countryName.value.length < 2) {
            event.preventDefault();
        } else if (countryLastName.value == "") {
            event.preventDefault();
        } else if (countryLastName.value.length < 2) {
            event.preventDefault();
        }
    });

}