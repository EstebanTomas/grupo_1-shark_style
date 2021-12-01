const { body, check } = require('express-validator');
// const path = require('path');
// const fs = require('fs');

/* ○ Nombre

■ Obligatorio.
■ Deberá tener al menos 5 caracteres.

○ Descripción

■ Deberá tener al menos 20 caracteres.

○ Imagen

■ Deberá ser un archivo válido (JPG, JPEG, PNG, GIF). */
const productCreateValidations = [
    check("name").notEmpty().isLength({ min: 5, max: 80 }).bail().withMessage("Este campo no debe estar vacío y tiene un máximo de 80 caracteres."),
    check("description").notEmpty().isLength({ min: 20, max: 100 }).bail().withMessage("Este campo debe tener un minimo de 20 caracteres y máximo 100."),
    check('price').notEmpty().isNumeric().withMessage("Este campo no debe estar vacio y solo se aceptan numeros"),
   /*  check("sizes").notEmpty().withMessag("Debes seleccionar almenos un talle, 'sizes'. "), */
    check("colors").notEmpty().withMessage("Selecciona un color"),
    check("gender").notEmpty(),
    check("category").notEmpty()

]

module.exports = productCreateValidations;