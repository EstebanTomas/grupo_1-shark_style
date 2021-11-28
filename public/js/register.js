window.onload = function () {
    /* COUNTRYS */
    let form = document.querySelector("form#form");
    let countryName = document.querySelector("#name");
    let countryLastName = document.querySelector("#lastName");
    let countryEmail = document.querySelector("#email");
    let countryPassword = document.querySelector("#password");
    /* msg of h4 */
    let nameH4 = document.querySelector("h4.name");
    let lastNameH4 = document.querySelector("h4.lastName");
    let emailH4 = document.querySelector("h4.email");
    let passwordH4 = document.querySelector("h4.password");

    form.addEventListener("submit", (e) => {
       
        if (countryName.value.length < 2 ) {
            nameH4.innerHTML = "Tu nombre debe ser mayor a 2 caracteres";
        }
        if (countryName.value == "") {
            e.preventDefault();
            nameH4.innerHTML = "Debes escribir un nombre de usuario"
        }
        if (countryLastName.value.length < 4 ) {
            lastNameH4.innerHTML = "Tu apellido debe ser mayor a 4 caracteres";
        }
        if (countryLastName.value == "") {
            e.preventDefault();
            lastNameH4.innerHTML = "Debes escribir un nombre de usuario"
        }
    });
    /* 
             Descripción
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

}