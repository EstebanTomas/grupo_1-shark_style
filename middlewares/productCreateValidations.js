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
    // check('characteristic')
    // .notEmpty().withMessage('No puede estar vacío.').bail()
    // .isLength({ min: 1, max: 45 }).withMessage('Puede tener un máximo de 45 caracteres.'),

    // check('value')
    // .notEmpty().withMessage('No puede estar vacío.').bail()
    // .isLength({ min: 1, max: 45 }).withMessage('Puede tener un máximo de 45 caracteres.'),

    // check('price')
    // .notEmpty().withMessage('No puede estar vacío.')
    // .isNumeric().withMessage('Debes ingresar un numero'),

    // check('discount')
    // .notEmpty().withMessage('No puede estar vacío.')
    // .isNumeric().withMessage('Debes ingresar un numero'),

    // check('img').custom((value, { req }) => {
    //     let acceptedExtensions = ['.png', '.jpeg', '.jpg'];
    //     if (req.files.length == 3) {
    //         let files = req.files;
    //         files.forEach(file => {
    //             let fileExtension = path.extname((file.originalname));
    //             if (!acceptedExtensions.includes(fileExtension)) {
    //                 fs.unlinkSync(`./public/img/productImage/${file.filename}`);
    //                 throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`)
    //             }else{
    //                 return true;
    //             }
    //         });
    //     } else {
    //         throw new Error('Debes ingresar tres imagenes')
    //     }
    //     return true;
    // })

]

module.exports = productCreateValidations;