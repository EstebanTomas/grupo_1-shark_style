window.onload = function () {
    /* COUNTRYS */
    let form = document.getElementById("form");
    let countryName = document.getElementById("name");
    let countryLastName = document.getElementById("lastname");
    let countryEmail = document.getElementById("emailWithInformation");
    let countryPassword = document.getElementById("password");
    /* msg of h4 */
    let msg = document.getElementById("msg");
    let msgName = document.querySelector("h5.name");
    let msgLastName = document.querySelector("h5.lastName");
    let msgEmail = document.querySelector(".msgOfErrorOfEmail");
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
        if (countryEmail.value.length < 1 ) {
            e.preventDefault();
            msgEmail.innerHTML = "Todos los campos son obligatorios";
            return false
        }
        if (countryPassword.value == "") {
            e.preventDefault();
            msg.innerHTML = "Todos los campos son obligatorios";
            return false
        }
        if (countryPassword.value.length < 8) {
            e.preventDefault();
            msgPassword.innerHTML = "Tu contraseña debe ser mayor a 8 caracteres";
        } else if (countryName.value == "") {
            e.preventDefault();
            msg.innerHTML = "Todos los campos son obligatorios";
            return false
        } else if (countryLastName.value == "") {
            e.preventDefault();
            msg.innerHTML = "Todos los campos son obligatorios";
            return false
        }
        if (!expresion.test(countryEmail.value)) {
            e.preventDefault();
            msgEmail.innerHTML = "correo electrónico invalido";
        }
    });
}