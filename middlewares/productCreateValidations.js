const { check } = require('express-validator');
// const path = require('path');
// const fs = require('fs');

const productCreateValidations = [

    // check('description')
    // .notEmpty().withMessage('No puede estar vacío.').bail()
    // .isLength({ min: 1, max: 45 }).withMessage('Puede tener un máximo de 45 caracteres.'),

    // check('price')
    // .notEmpty().withMessage('No puede estar vacío.').bail()
    // .isLength({ min: 1, max: 80 }).withMessage('Puede tener un máximo de 80 caracteres.'),

    // check('sizes')
    // .notEmpty().withMessage('No puede estar vacío.').bail()
    // .isLength({ min: 1, max: 80 }).withMessage('Puede tener un máximo de 80 caracteres.'),

    // check('colors')
    // .notEmpty().withMessage('No puede estar vacío.').bail()
    // .isLength({ min: 1, max: 80 }).withMessage('Puede tener un máximo de 80 caracteres.'),

    // check('gender')
    // .notEmpty().withMessage('No puede estar vacío.').bail()
    // .isLength({ min: 1, max: 80 }).withMessage('Puede tener un máximo de 80 caracteres.'),

    // check('category')
    // .notEmpty().withMessage('No puede estar vacío.').bail()
    // .isLength({ min: 1, max: 80 }).withMessage('Puede tener un máximo de 80 caracteres.'),

    // check('images').custom((value, { req }) => {
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