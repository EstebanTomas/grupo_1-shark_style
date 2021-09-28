const express = require('express');
const path = require('path');
const router = express.Router();
const { check } = require('express-validator');
const multer = require('multer');

var controllersOfProducts = require('../controllers/productsControllers');

const multerStorage = multer.diskStorage({
    destination: ( req, file, cb ) => {
        var location = path.resolve(__dirname, "../public/img/image");
        cb( null, location );
    },
    filename: ( req, file, cb ) => {
        var format = 'foto' + '-' + Date.now() + path.extname(file.originalname);
        cb( null, format);
    }
});

/*
const multerStorage = multer.diskStorage({
    destination: (req, file, cb ) => {
        cb(null, path.resolve(__dirname, '../public/img/product'));
    },
    filename:  (req, file, cb ) => {
        let imagesFile =  'foto' + '-' + Date.now() + path.extname(file.originalname);
        cb(null, imagesFile);
    }
});
*/

const upload = multer({storage: multerStorage});

// paths to product list
router.get('/', controllersOfProducts.productList);
//router.get('/:id', controllersOfProducts.productList);

router.get('/admin', controllersOfProducts.administration)
// this path shows the edit form
router.get('/edit/:id', controllersOfProducts.editProduct);
router.put('/edit/:id', controllersOfProducts.edit);

// route of create
router.get('/create', controllersOfProducts.productCreate);
router.post('/create', upload.array('image', 3) ,controllersOfProducts.create);

// routes in detail
router.get('/detail/:id', controllersOfProducts.productDetail);

// routes in delete
router.get('/delete/:id', controllersOfProducts.delete);

// creo estas routas para trabajar con las vistas
router.get('/edit', controllersOfProducts.editProduct);
router.get('/detail', controllersOfProducts.productDetail);


module.exports = router;