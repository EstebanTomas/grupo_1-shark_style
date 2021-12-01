const { body ,check } = require("express-validator");

const editProductValidation = [

    check('name').notEmpty().isLength({ min: 5, max: 100 }).bail().withMessage('Este campo no puede estar vació. El nombre del producto tiene que contener más de 5 caracteres'),

    check('description').notEmpty().isLength({ min: 20, max: 100 }).bail().withMessage('Este campo no puede estar vació .Su descripcion del producto debe tener más de 20 caracteres'),

    check("price").notEmpty().isNumeric().withMessage("Este campo no puede estar vacío. Coloque un precio a su producto/s."),

    check("gender").notEmpty(),

    check("colors").notEmpty().withMessage("Este campo no puede estar vacío."),

    check("category").notEmpty().withMessage("Este campo no puede estar vació."),
];


module.exports = editProductValidation;

