window.onload = function () {
    /* COUNTRYS */
    let form = document.querySelector("form#form");
    let countryName = document.querySelector("#name");
    let countryLastName = document.querySelector("#lastName");
    let countryEmail = document.querySelector("#email");
    let countryPassword = document.querySelector("#password");
    /* msg of h4 */
    let msg = document.querySelector("h4#msg");
    let msgName = document.querySelector("h5.name");
    let msgLastName = document.querySelector("h5.lastName");
    let msgEmail = document.querySelector("h5.email");
    let msgPassword = document.querySelector("h5.password");
    /* VALIDATION OF EMAIL */
    var expresion = /\w+@\w+\.+[a-z]/;
    /* var expresion = /\w+@\w+\.+[a-z]/; */
    form.addEventListener("submit", (e) => {

        if (countryName.value.length < 2) {
            e.preventDefault();
            msgName.innerHTML = "Tu nombre debe ser mayor a 2 caracteres";
        }
        if (countryLastName.value.length < 4) {
            e.preventDefault();
            msgLastName.innerHTML = "Tu apellido debe ser mayor a 4 caracteres";
        }
        if (!expresion.test(countryEmail.value)) {
            e.preventDefault();
            msgEmail.innerHTML = "correo electrónico invalido";
        }
        if (countryPassword.value.length < 8) {
            e.preventDefault();
            msgPassword.innerHTML = "Tu contraseña debe ser mayor a 8 caracteres";
        } else if (countryName.value == "") {
            e.preventDefault()
            msg.innerHTML = "Todos los campos son obligatorios"
            return false
        } else if (countryLastName == "") {
            e.preventDefault()
            msg.innerHTML = "Todos los campos son obligatorios"
            return false
        } else if (countryEmail == "") {
            e.preventDefault()
            msg.innerHTML = "Todos los campos son obligatorios"
            return false
        } else if (countryPassword == "") {
            e.preventDefault()
            msg.innerHTML = "Todos los campos son obligatorios"
            return false
        }
    });
}