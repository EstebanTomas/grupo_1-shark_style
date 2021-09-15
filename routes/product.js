const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const multer = require('multer');

var controllersOfProducts = require('../controllers/productsControllers');

const storage = multer.diskStorage({
    destination: (req, file, cb ) => {
        cb(null, path.resolve(__dirname, '../public/img'));
    },
    filename:  (req, file, cb ) => {
        cb(null, 'foto' + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({storage});

// paths to product list
router.get('/', controllersOfProducts.productList);
//router.get('/:id', controllersOfProducts.productList);

router.get('/admin', controllersOfProducts.administration)
// this path shows the edit form
router.get('/:idProducts/edit', controllersOfProducts.editProduct);
router.put('/edit', controllersOfProducts.edit);

// route of create
router.get('/create', controllersOfProducts.productCreate);
router.post('/create', upload.array('image', 4) ,controllersOfProducts.create);

// routes in detail
router.get('/detail/:id', controllersOfProducts.productDetail);

// routes in delete
router.get('/delete/:id', controllersOfProducts.delete);

// creo estas routas para trabajar con las vistas
router.get('/edit', controllersOfProducts.editProduct);
router.get('/detail', controllersOfProducts.productDetail);


module.exports = router;