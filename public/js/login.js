window.onload = function () {
    /* elements html */
    let form = document.querySelector("form.inputs-container");
    let confirmEmail = document.querySelector("#confirmEmail");
    let confirmPassword = document.querySelector("#confirmPassword");
    let small = document.querySelector(".msg-email");
    let smallPassword = document.querySelector(".msg-password")
    /* 
    ○ Email
    ■ Obligatorio.
    ■ Deberá ser válido.
    ■ Deberá existir en base.
    
    ○ Contraseña
    ■ Obligatoria.
    ■ Deberá coincidir con la existente en base. */
    confirmEmail.addEventListener("focus", function () {
        small.innerText = "Ingresa un correo electrónico valido";
    });
    confirmEmail.addEventListener("change", function () {
        small.innerText = "¡Perfecto!";
    })
    confirmEmail.addEventListener("blur", function () {
        small.innerText = "";
    });
    confirmPassword.addEventListener("focus", function () {
        smallPassword.innerText = "Tu contraseña debe contener más de 8 caracteres";
    });
    confirmPassword.onchange= () => {
        console.log(this.currentTarget,"eah");
        smallPassword.innerText = "¡Perfecto!";
    };
    
    confirmPassword.onblur = function (e) {
        smallPassword.innerText = "";
    }
    form.addEventListener("submit", (e) => {
        if ( confirmEmail.value == "" ) {
            e.preventDefault()
            small.innerText = "El campo de email no debe estar vacio";
        }
        if (confirmPassword.value.length < 8 ) {
            e.preventDefault()
            smallPassword.innerText = "Tu contraseña debe ser de más de 8 caracteres";

        }

    });
    /*confirmEmail.addEventListener("focus", () => {
        small.innerText = "Ingresá un correo electrónico";
    }) 
    
    /* if (confirmEmail.value.length < 0) {
            small.innerText = "Debes escribir un email";
        } */
    /* 
        confirmPassword.addEventListener("focus", function () {
            smallPassword.innerText = "Tu contraseña debe contener más de 8 caracteres";
        });
        if (confirmPassword.value.length > 8) {
            smallPassword.innerText = "¡Perfecto!";
        }
        confirmPassword.onblur = function () {
            smallPassword.innerText = "";
        }
        
        */
}