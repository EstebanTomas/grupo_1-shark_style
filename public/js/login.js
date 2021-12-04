window.onload = function () {
    /* elements html */
    let form = document.querySelector("form.inputs-container");
    let confirmEmail = document.querySelector("#confirmEmail");
    let confirmPassword = document.querySelector("#confirmPassword");
    let small = document.querySelector(".msg-email");
    let smallPassword = document.querySelector(".msg-password");
    /* EVENTS */
    confirmEmail.addEventListener("focus", function () {
        if (confirmEmail.value.length > 0) {
            small.innerText = "";
        } else {
            small.innerText = "Ingresa un correo electrónico";
        }
    });
    confirmEmail.addEventListener("change", function () {
        small.innerText = "¡Perfecto!";
    })
    confirmEmail.addEventListener("blur", function () {
        small.innerText = "";
    });
    confirmPassword.addEventListener("focus", function () {
        smallPassword.innerText = "Ingresa tu contraseña";
    });
    confirmPassword.onchange = () => {
        console.log(this.currentTarget, "eah");
        smallPassword.innerText = "¡Perfecto!";
    };
    confirmPassword.onblur = function () {
        smallPassword.innerText = "";
    }
    /* VALIDATION OF EMAIL */
    var expresion = /\w+@\w+\.+[a-z]/;
    /* EVENTS OF VALIDATIONS */
    form.addEventListener("submit", (e) => {
        if (confirmEmail.value == "") {
            e.preventDefault()
            small.innerText = "El campo de email no debe estar vacio";
        }
        if (!expresion.test(confirmEmail.value)) {
            e.preventDefault()
            small.innerText = "El email ingresado no es valido";
        }
        if (confirmPassword.value.length < 8) {
            e.preventDefault()
            smallPassword.innerText = "Tu contraseña debe ser de más de 8 caracteres";
        }
    });
}