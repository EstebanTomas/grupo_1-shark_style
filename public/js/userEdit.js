window.addEventListener("load", function () {
    let form = document.querySelector("form.formulario");
    let nameInput = document.querySelector("input#name");
    let lastNameInput = document.querySelector("input#lastName");
    let emailInput = document.querySelector("input#email");
    let passwordInput = document.querySelector("input#password");
    //let nameInput = document.querySelector("input.")
    let errors = [];

    form.addEventListener("submit", (e) => {
        if (nameInput.value == "") {
            errors.push("Debes escribir un nombre y debe ser de más de dos caracteres");
        } else if (lastNameInput.value == "") {
            errors.push("Tu apellido debe ser de más de dos caracteres");
        } else if (emailInput.value == "") {
            errors.push("Debes escribir un email valido");
        } else if (passwordInput.length > 8) {
            errors.push("Debes escribir una contraseña de más de 8 caracteres");
        }
        if (errors.length > 0) {
            e.preventDefault();
            let error = document.querySelector("#divError ul");
            for (let i = 0; i < errors.length; i++) {
                error.innerHTML += "<li>" + errors[i] + "</li>";
            }
        }
    })
});
