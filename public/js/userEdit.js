
window.addEventListener("load", function () {
    /* bringing form */
    let form = document.querySelector("form.formulario");
    /* bringing fields */
    let nameInput = document.querySelector("input#name")
    let lastNameInput = document.querySelector("input#lastName")
    let emailInput = document.querySelector("input#email")
    let passwordInput = document.querySelector("input#password")
    let image = document.querySelector("input#avatarEdit");
    //let nameInput = document.querySelector("input.")
    let msgName = document.querySelector("small#msgName");
    let msgLastName = document.querySelector("small#msgLastName");
    let msgEmail = document.querySelector("small#msgEmail");
    let msgPassword = document.querySelector("small#msgPassword");

    /* validations with expressions and validation of image*/
    /* (JPG, JPEG, PNG, GIF) */
    var uploadFile = image.files[0];
    var expression = /\w+@\w+\.+[a-z]/;
    var expressionImg = /\.(jpg|jpeg|png|gif)$/i;

    form.addEventListener("submit", (e) => {
        if (!expressionImg.test(uploadFile.name)) {
            e.preventDefault();
            alert("El archivo que adjuntaste no es una imagen");
            return false;
        }
        if (nameInput.value == "" || nameInput.value < 2) {
            e.preventDefault();
            msgName.innerHTML = "Debes escribir un nombre y debe contener más de 2 caracteres";
            return false;
        }
        if (lastNameInput.value == "" || lastNameInput.value < 2) {
            e.preventDefault();
            msgLastName.innerHTML = "Debes escribir un apellido y debe ser de más de 4 caracteres";
            return false;
        }
        if (!expression.test(emailInput.value)) {
            e.preventDefault();
            msgEmail.innerHTML = "Debes escribir un email valido";
            return false;
        }
        if (passwordInput.value == "" || passwordInput.value.length > 8) {
            e.preventDefault();
            msgPassword.innerHTML = "Debes escribir una contraseña y debe contener más de 8 caracteres";
            return false;
        }
    });
<<<<<<< HEAD
});
=======
    /* ○ Nombre y apellido

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
número y un carácter especial.

○ Imagen

■ Deberá ser un archivo válido (JPG, JPEG, PNG, GIF).
 */
});
>>>>>>> 6b19da5a2a2b4c38dfcc6f09affc8aa0144c4c29
