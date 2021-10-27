const multer = require('multer');
const path = require("path");

const multerStorage = multer.diskStorage({
    destination: ( req, file, cb ) => {
        var location = path.join(__dirname, "../public/img/productImage");
        cb( null, location );
    },
    filename: ( req, file, cb ) => {
        var format = 'producto' + '-' + Date.now() + path.extname(file.originalname);
        cb( null, format);
    }
});

const upload = multer({storage: multerStorage});

module.exports = upload;